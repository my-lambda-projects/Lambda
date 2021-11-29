# The Kernel

The Kernel is a compiled program that runs the CPU and every piece of fundamental hardware and software in your computer. The Windows and OS X kernels are completely secret and proprietary, but the Linux kernel is available on github (btw, Linus Torvalds also built Git)!

[Linux Kernel](https://github.com/torvalds/linux)

This enables curious developers to build and install a new kernel to their own computer. This is the only opportunity for this outside of private employment with Microsoft or Apple.

## Processes

Every operating system provides the fundamental concept of a process. Processes are applications that run in user space.

An application might spawn many processes over the course of its run.

Processes in modern operating systems run in their own _address spaces_. That is, each process thinks it has its own copy of RAM all to itself. Variables declared in one process are not visible from other processes unless both processes explicitly agree to communicate. (Contrast to threads, below.)

### Process table

The operating system allocates a list of processes called the process table. The process table is an array data about each process, such as where in memory its stack is located, what local data is needed for the currently executing stack frame, the ID of the process (_pid_), and much more.

### Process Lifecycle

In Unix, a process is created with the `fork()` system call made by the _parent process_.

A process exits when it's `main()` returns, when it calls `exit()`, when it is killed, or when it crashes.

After the process exits normally, it exists in a _zombie_ state until the parent calls `wait()` to get exit status information from the child process.

## Threads

At the OS level, threads are processes that share an address space.

In a typical use case, a single process will spawn a number of threads to handle various tasks. Each thread has access to all the global data in the process.

Synchronizing access to shared data across multiple threads (so they don't step on each others toes) is a tricky problem.

## Scheduling

The kernel is responsible for sharing resources on a system between multiple processes. In the early days of large mainframes, operating systems did not support multi-tasking. Booting a computer might load the basic resources necessary to access registers, memory, and I/O. Once that boot process was complete, the system would load a single program which would run until completion.

Modern operating systems support mult-tasking, which means that the operating system runs multiple applications at the same time. Because a CPU in general can only perform one activity at a time, the operating system loads processes, their stack frames, and their stack resources in a round-robin fashion.

> If your computer has 4 cores, it can only actually run 4 programs at once. You might have hundreds of processes that need to run, though. The kernel decides which process gets some run time next. In any given second, a large number of processes might be switched into and out of a core.

Each time a process is paused, its entire execution state is saved into main memory. The next processes stack frame is loaded from main memory, and execution is resumed.

## Exercises

Write a program that spawns a child process with `fork()`. Have the parent print "I am the parent!". Have the child print "I am the child!". Then both processes should exit.

Hint: `man fork` or `man 2 fork`. Pay attention to the return value from `fork()`. It's a brain-bender.

Warning: don't run `fork()` in a loop unless you're careful. You can easily spawn so many processes the system is brought to its knees. For the above assignment, there's no need for a loop.
