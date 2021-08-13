import sinon from 'sinon';
import Queue from '../src/Queue';
import Process from '../src/Process';
import Scheduler from '../src/Scheduler';
import { SchedulerInterrupt, QueueType } from '../src/constants/index';

let queue, scheduler;

describe('Queue', () => {
  beforeEach(() => {
    scheduler = new Scheduler();
    queue = new Queue(scheduler, 50, 0, QueueType.CPU_QUEUE);
  });

  it('should have the methods "enqueue", "dequeue", "peek", "getPriorityLevel", "getQueueType", "emitInterrupt", "isEmpty", "doCPUWork", "doBlockingWork", and "manageTimeSlice"', () => {
    expect(Object.getPrototypeOf(queue).hasOwnProperty('enqueue')).toBe(true);
    expect(Object.getPrototypeOf(queue).hasOwnProperty('dequeue')).toBe(true);
    expect(Object.getPrototypeOf(queue).hasOwnProperty('peek')).toBe(true);
    expect(
      Object.getPrototypeOf(queue).hasOwnProperty('getPriorityLevel')
    ).toBe(true);
    expect(Object.getPrototypeOf(queue).hasOwnProperty('getQueueType')).toBe(
      true
    );
    expect(Object.getPrototypeOf(queue).hasOwnProperty('emitInterrupt')).toBe(
      true
    );
    expect(Object.getPrototypeOf(queue).hasOwnProperty('isEmpty')).toBe(true);
    expect(Object.getPrototypeOf(queue).hasOwnProperty('doCPUWork')).toBe(true);
    expect(Object.getPrototypeOf(queue).hasOwnProperty('doBlockingWork')).toBe(
      true
    );
    expect(Object.getPrototypeOf(queue).hasOwnProperty('manageTimeSlice')).toBe(
      true
    );
  });

  test('getQueueType method', () => {
    expect(queue.getQueueType()).toBe(QueueType.CPU_QUEUE);
    queue = new Queue(scheduler, 50, 0, QueueType.BLOCKING_QUEUE);
    expect(queue.getQueueType()).toBe(QueueType.BLOCKING_QUEUE);
  });

  test('getPriorityLevel method', () => {
    expect(queue.getPriorityLevel()).toEqual(0);
    queue = new Queue(scheduler, 5, 3, QueueType.CPU_QUEUE);
    expect(queue.getPriorityLevel()).toEqual(3);
  });

  test('isEmpty method returns true when called on an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    const process = new Process(0);
    queue.enqueue(process);
    expect(queue.isEmpty()).toBe(false);
  });

  test('enqueue method adds a process and set its parent queue property', () => {
    const process = new Process(0);
    queue.enqueue(process);
    expect(process._getParentQueue()).toBe(queue);
    expect(queue.peek()).toBe(process);
  });

  test('peek method returns the least recently added process', () => {
    const process1 = new Process(0);
    const process2 = new Process(1);
    queue.enqueue(process1);
    queue.enqueue(process2);
    expect(queue.peek()).toBe(process1);
  });

  test('dequeue method removes processes in FIFO order', () => {
    const process1 = new Process(0);
    const process2 = new Process(1);
    queue.enqueue(process1);
    queue.enqueue(process2);
    expect(queue.dequeue()).toBe(process1);
    expect(queue.peek()).toBe(process2);
    expect(queue.dequeue()).toBe(process2);
    expect(queue.peek()).toBeUndefined();
  });

  test("manageTimeSlice resets queue's clock for a process whose state has changed", () => {
    const process = new Process(0, 60);
    process.stateChanged = true;

    queue.enqueue(process);
    queue.manageTimeSlice(process, 10);

    expect(queue.quantumClock).toBe(0);
  });

  test("manageTimeSlice method on process that hasn't received more time than the queue's time quantum", () => {
    const process = new Process(0, 60);

    queue.enqueue(process);
    queue.manageTimeSlice(process, 49);

    expect(queue.quantumClock).toBe(49);
    expect(queue.peek()).toBe(process);
  });

  test("manageTimeSlice method on process that receives more time than the queue's time quantum but process has not completed", () => {
    const schedulerSpy = sinon.spy(scheduler, 'handleInterrupt');
    const process = new Process(0, 60);

    queue.enqueue(process);
    process.executeProcess(51);
    queue.manageTimeSlice(process, 51);

    expect(queue.quantumClock).toBe(0);
    expect(process.isFinished()).toBe(false);
    expect(queue.peek()).toBeUndefined();

    expect(schedulerSpy.calledOnce).toBe(true);
  });

  test("manageTimeSlice method on process that receives more time than the queue's time quantum but process has completed", () => {
    const schedulerSpy = sinon.spy(scheduler, 'handleInterrupt');
    const process = new Process(0, 60);

    queue.enqueue(process);
    process.executeProcess(60);
    queue.manageTimeSlice(process, 60);

    expect(queue.quantumClock).toBe(0);
    expect(process.isFinished()).toBe(true);
    expect(queue.peek()).toBeUndefined();

    expect(schedulerSpy.notCalled).toBe(true);
  });

  test('doCPUWork method', () => {
    const process = new Process(0, 15);
    const processSpy = sinon.spy(process, 'executeProcess');
    const queueSpy1 = sinon.spy(queue, 'peek');
    const queueSpy2 = sinon.spy(queue, 'manageTimeSlice');

    queue.enqueue(process);
    queue.doCPUWork(10);

    expect(processSpy.calledWith(10)).toBe(true);
    expect(queueSpy1.calledOnce).toBe(true);
    expect(queueSpy2.calledWith(process, 10)).toBe(true);
  });

  test('doBlockingWork method', () => {
    const process = new Process(0, 15);
    const processSpy = sinon.spy(process, 'executeBlockingProcess');
    const queueSpy1 = sinon.spy(queue, 'peek');
    const queueSpy2 = sinon.spy(queue, 'manageTimeSlice');

    queue.enqueue(process);
    queue.doBlockingWork(10);

    expect(processSpy.calledWith(10)).toBe(true);
    expect(queueSpy1.calledOnce).toBe(true);
    expect(queueSpy2.calledWith(process, 10)).toBe(true);
  });

  it('should properly manage a child process that completed execution during the allotted time quantum', () => {
    const schedulerSpy = sinon.spy(scheduler, 'handleInterrupt');
    const queueSpy = sinon.spy(queue, 'manageTimeSlice');
    const process = new Process(0, 49);

    queue.enqueue(process);
    queue.doCPUWork(51);

    expect(queueSpy.calledWith(process, 51)).toBe(true);
    expect(schedulerSpy.getCalls().length).toBe(0);
  });

  test('emitInterrupt method removes the source process from the queue', () => {
    const process1 = new Process(0);
    const process2 = new Process(1);
    const process3 = new Process(2);

    queue.enqueue(process1);
    queue.enqueue(process2);
    queue.enqueue(process3);

    queue.emitInterrupt(process2, SchedulerInterrupt.PROCESS_BLOCKED);
    expect(queue.processes.length).toBe(2);
    expect(queue.processes[0]).toBe(process1);
    expect(queue.processes[1]).toBe(process3);
  });

  test('emitInterrupt method notifies the scheduler appropriately when the queue emits a PROCESS_BLOCKED interrupt', () => {
    const schedulerSpy = sinon.spy(scheduler, 'handleInterrupt');
    const process = new Process(0);

    queue.enqueue(process);
    queue.emitInterrupt(process, SchedulerInterrupt.PROCESS_BLOCKED);

    expect(
      schedulerSpy.calledWith(
        queue,
        process,
        SchedulerInterrupt.PROCESS_BLOCKED
      )
    ).toBe(true);
  });

  test('emitInterrupt method notifies the scheduler appropriately when the queue emits a PROCESS_READY interrupt', () => {
    const schedulerSpy = sinon.spy(scheduler, 'handleInterrupt');
    const process = new Process(0);

    queue.enqueue(process);
    queue.emitInterrupt(process, SchedulerInterrupt.PROCESS_READY);

    expect(
      schedulerSpy.calledWith(queue, process, SchedulerInterrupt.PROCESS_READY)
    ).toBe(true);
  });
});
