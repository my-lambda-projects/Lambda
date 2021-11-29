import sinon from 'sinon';
import Queue from '../src/Queue';
import Process from '../src/Process';
import Scheduler from '../src/Scheduler';
import {
  SchedulerInterrupt,
  QueueType,
  PRIORITY_LEVELS,
} from '../src/constants/index';

let queue, scheduler;

describe('Scheduler', () => {
  beforeEach(() => {
    scheduler = new Scheduler();
    queue = new Queue(scheduler, 50, 0, QueueType.CPU_QUEUE);
  });

  it('should have the methods "run", "allQueuesEmpty", "addNewProcess", and "handleInterrupt"', () => {
    expect(Object.getPrototypeOf(scheduler).hasOwnProperty('run')).toBe(true);
    expect(
      Object.getPrototypeOf(scheduler).hasOwnProperty('allQueuesEmpty')
    ).toBe(true);
    expect(
      Object.getPrototypeOf(scheduler).hasOwnProperty('addNewProcess')
    ).toBe(true);
    expect(
      Object.getPrototypeOf(scheduler).hasOwnProperty('handleInterrupt')
    ).toBe(true);
  });

  test('addNewProcess and allQueuesEmpty methods', () => {
    expect(scheduler.allQueuesEmpty()).toBe(true);

    const process = new Process(0);
    scheduler.addNewProcess(process);
    const topPriorityRunningQueue = scheduler._getCPUQueue(0);
    const lowerPriorityRunningQueue = scheduler._getCPUQueue(1);

    expect(topPriorityRunningQueue.peek()).toBe(process);
    expect(lowerPriorityRunningQueue.peek()).toBeUndefined();
    expect(scheduler.allQueuesEmpty()).toBe(false);

    lowerPriorityRunningQueue.enqueue(topPriorityRunningQueue.dequeue());

    expect(scheduler.allQueuesEmpty()).toBe(false);

    lowerPriorityRunningQueue.dequeue();

    expect(scheduler.allQueuesEmpty()).toBe(true);
  });

  test('handleInterrupt method moves a process to blocking queue upon receiving a PROCESS_BLOCKED interrupt', () => {
    const process = new Process(0);
    const blockingQueue = scheduler._getBlockingQueue();
    const queueSpy = sinon.spy(blockingQueue, 'enqueue');
    scheduler.handleInterrupt(
      blockingQueue,
      process,
      SchedulerInterrupt.PROCESS_BLOCKED
    );

    expect(queueSpy.calledWith(process)).toBe(true);
    expect(blockingQueue.peek()).toBe(process);
  });

  test('handleInterrupt method moves a process to the top level priority queue upon receiving a PROCESS_READY interrupt', () => {
    const process = new Process(0);
    const queue = scheduler._getCPUQueue(0);
    const schedulerSpy = sinon.spy(scheduler, 'addNewProcess');
    scheduler.handleInterrupt(queue, process, SchedulerInterrupt.PROCESS_READY);

    expect(schedulerSpy.calledWith(process)).toBe(true);
    expect(queue.peek()).toBe(process);
  });

  test('handleInterrupt method moves a non-blocking process to a lower priority queue upon receiving a LOWER_PRIORITY interrupt', () => {
    const process = new Process(0);
    const topLevelQueue = scheduler._getCPUQueue(0);
    const nextLevelQueue = scheduler._getCPUQueue(1);
    scheduler.handleInterrupt(
      topLevelQueue,
      process,
      SchedulerInterrupt.LOWER_PRIORITY
    );

    expect(nextLevelQueue.peek()).toBe(process);
  });

  test('handleInterrupt method moves a blocking process to the end of the blocking queue upon receiving a LOWER_PRIORITY interrupt', () => {
    const process = new Process(0, 0, true);
    const blockingQueue = scheduler._getBlockingQueue();
    scheduler.handleInterrupt(
      blockingQueue,
      process,
      SchedulerInterrupt.LOWER_PRIORITY
    );

    expect(blockingQueue.peek()).toBe(process);
  });

  test('handleInterrupt method adds a process back to the lowest priority queue if it was already in the lowest priority queue upon receiving a LOWER_PRIORITY interrupt', () => {
    const process = new Process(0);
    const lowestLevelQueue = scheduler._getCPUQueue(PRIORITY_LEVELS - 1);
    scheduler.handleInterrupt(
      lowestLevelQueue,
      process,
      SchedulerInterrupt.LOWER_PRIORITY
    );

    expect(lowestLevelQueue.peek()).toBe(process);
  });

  test('run method runs until all processes have completed execution', () => {
    const process1 = new Process(0);
    const process2 = new Process(1, 0, true);
    const process3 = new Process(2, 500);

    const blockingQueue = scheduler._getBlockingQueue();
    const queue1 = scheduler._getCPUQueue(0);
    const queue2 = scheduler._getCPUQueue(1);
    const queue3 = scheduler._getCPUQueue(2);

    const schedulerSpy = sinon.spy(scheduler, 'allQueuesEmpty');
    const blockingQueueSpy = sinon.spy(blockingQueue, 'doBlockingWork');
    const queue1Spy = sinon.spy(queue1, 'doCPUWork');

    scheduler.addNewProcess(process1);
    scheduler.addNewProcess(process2);
    scheduler.addNewProcess(process3);
    scheduler.run();

    expect(blockingQueueSpy.called).toBe(true);
    expect(queue1Spy.called).toBe(true);
    expect(blockingQueue.isEmpty()).toBe(true);
    expect(schedulerSpy.called).toBe(true);
    expect(queue1.isEmpty()).toBe(true);
    expect(queue2.isEmpty()).toBe(true);
    expect(queue3.isEmpty()).toBe(true);
  });
});
