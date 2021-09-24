import sinon from 'sinon';
import Queue from '../src/Queue';
import Process from '../src/Process';
import Scheduler from '../src/Scheduler';
import { SchedulerInterrupt, QueueType } from '../src/constants/index';

let queue, scheduler;

describe('Process', () => {
  beforeEach(() => {
    scheduler = new Scheduler();
    queue = new Queue(scheduler, 50, 0, QueueType.CPU_QUEUE);
  });

  it('should have the methods "setParentQueue", "isFinished", "executeProcess", "executeBlockingProcess", "isStateChanged", and "get pid"', () => {
    const process = new Process(0);
    expect(
      Object.getPrototypeOf(process).hasOwnProperty('setParentQueue')
    ).toBe(true);
    expect(Object.getPrototypeOf(process).hasOwnProperty('isFinished')).toBe(
      true
    );
    expect(
      Object.getPrototypeOf(process).hasOwnProperty('executeProcess')
    ).toBe(true);
    expect(
      Object.getPrototypeOf(process).hasOwnProperty('executeBlockingProcess')
    ).toBe(true);
    expect(
      Object.getPrototypeOf(process).hasOwnProperty('isStateChanged')
    ).toBe(true);
    expect(Object.getPrototypeOf(process).hasOwnProperty('pid')).toBe(true);
  });

  test('processes pid getter', () => {
    const pid = Math.round(Math.random() * 10000);
    const process = new Process(pid);
    expect(process.pid).toBe(pid);
  });

  test('setParentQueue function', () => {
    const process = new Process(0);
    process.setParentQueue(queue);
    expect(process._getParentQueue()).toBe(queue);
  });

  test('isStateChanged function', () => {
    const process = new Process(0, 10);
    expect(process.isStateChanged()).toEqual(false);
    process.stateChanged = true;
    expect(process.isStateChanged()).toEqual(true);
  });

  test('isFinished function', () => {
    let process = new Process(0, 0, true);
    process.blockingTimeNeeded = 10;
    expect(process.isFinished()).toEqual(false);

    process = new Process(0, 10);
    process.blockingTimeNeeded = 0;
    expect(process.isFinished()).toEqual(false);

    process = new Process(0, 0);
    process.blockingTimeNeeded = 0;
    expect(process.isFinished()).toEqual(true);
  });

  test('executeProcess function running to completion', () => {
    const process1 = new Process(0, 30);
    process1.executeProcess(30);
    expect(process1.isFinished()).toBe(true);
    expect(process1.cpuTimeNeeded).toEqual(0);
    expect(process1.isStateChanged()).toEqual(false);

    const process2 = new Process(0, 30);
    process2.executeProcess(32);
    expect(process2.isFinished()).toBe(true);
    expect(process2.cpuTimeNeeded).toEqual(0);
    expect(process2.isStateChanged()).toEqual(false);
  });

  test('executeProcess function not running to completion', () => {
    const process = new Process(0, 30);
    process.executeProcess(25);
    expect(process.isFinished()).toBe(false);
    expect(process.cpuTimeNeeded).toEqual(5);
    expect(process.isStateChanged()).toEqual(false);
  });

  test('executeProcess function on blocking process', () => {
    const process = new Process(0, 10, true);
    process.blockingTimeNeeded = 15;
    process.setParentQueue(queue);

    const queueSpy = sinon.spy(queue, 'emitInterrupt');
    process.executeProcess(15);
    expect(
      queueSpy.calledWith(process, SchedulerInterrupt.PROCESS_BLOCKED)
    ).toEqual(true);
    expect(process.isStateChanged()).toEqual(true);
  });

  test('executeBlockingProcess function running to completion', () => {
    const process1 = new Process(0, 10, true);
    process1.setParentQueue(queue);
    process1.blockingTimeNeeded = 10;
    const process2 = new Process(0, 5, true);
    process2.setParentQueue(queue);
    process2.blockingTimeNeeded = 10;

    const queueSpy = sinon.spy(queue, 'emitInterrupt');
    process1.executeBlockingProcess(10);
    expect(process1.blockingTimeNeeded).toEqual(0);
    expect(
      queueSpy.calledWith(process1, SchedulerInterrupt.PROCESS_READY)
    ).toEqual(true);
    expect(process1.isStateChanged()).toEqual(true);

    process2.executeBlockingProcess(11);
    expect(process2.blockingTimeNeeded).toEqual(0);
    expect(
      queueSpy.calledWith(process2, SchedulerInterrupt.PROCESS_READY)
    ).toEqual(true);
    expect(process2.isStateChanged()).toEqual(true);
  });

  test('executeBlockingProcess function not running to completion', () => {
    const process = new Process(0, 20, true);
    process.blockingTimeNeeded = 20;

    const queueSpy = sinon.spy(queue, 'emitInterrupt');
    process.executeBlockingProcess(15);
    expect(process.blockingTimeNeeded).toEqual(5);
    expect(
      queueSpy.calledWith(process, SchedulerInterrupt.PROCESS_READY)
    ).toEqual(false);
    expect(process.isStateChanged()).toEqual(false);
  });
});
