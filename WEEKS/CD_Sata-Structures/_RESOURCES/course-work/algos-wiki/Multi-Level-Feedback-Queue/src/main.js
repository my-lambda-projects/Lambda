import Scheduler from './Scheduler';
import Process from './Process';

// An example of a `main` function that adds a bunch of processes
// to the scheduler, randomly determining if they a running or
// blocking process, and then runs the scheduler.
// Feel free to edit this file to execute your scheduler implemetation
// in a different way.
const main = () => {
  const scheduler = new Scheduler();

  for (let i = 1; i < 101; i++) {
    let rollForBlockingProcess = Math.random() < 0.25;
    scheduler.addNewProcess(
      new Process(i + 1000, null, rollForBlockingProcess)
    );
  }

  scheduler.run();
};

main();
