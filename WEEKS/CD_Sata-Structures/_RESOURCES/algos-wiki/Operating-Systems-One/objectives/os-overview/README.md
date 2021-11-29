# Operating Systems Overview

There are three operating systems that are primarily popular on general purpose computers - Windows, Mac OS X, and Linux.

There are two operating systems that are essential for popular handhelds--Android and iOS.

There are dozens of UNIX variants for simpler processors available. Typically when working with a small dedicated cpu (like an ARM CPU on an IoT device), the operating system supported for that device has been defined by the manufacturer of the device and is a subset of Linux.

## Windows

Original popular OS for consumers, no permissions enabled fast and easy development, high performance for games and other user applications. Became a difficult model to maintain with the rise of the internet, leading to many revisions.

Backwards compatibility is the hallmark of Windows, which causes endless headaches for modern developers.

## Linux

Started by Linus Torvalds, who was at the time a student of Andrew Tanenbaum's, the Linux kernel is a copy of the MINIX kernel, which had been created by his instructor. MINIX is copy of the POSIX, an industry standardized system interface that was originally released in 1988. At the time there were many variants of UNIX, all limited to mainframe computers like VAX and PDP systems. The core of UNIX at this time is POSIX, which is the basis for essentially every successful operating system except Windows.

There are dozens of Linux forks at this time, called distros. Ubuntu is the most famous and successful of these, and unless you want to build up a career in system administration it is not necessary to learn any others. The basics of the Linux operating system depend on a few basic philosophies - processes that accept streams of text as input and produce streams of text as output (pipes), file descriptors as references to device drivers and other hardware (including individual files stored on a permanent storage medium), and security enforced by basic access controls applied to every component of the system.

Development paradigms:

- C and C++ native development.

- Management of symbolic and dynamic links via /usr/lib and /usr/local/lib and /usr/include and many more. Dependencies in linux are stored in files with specific paths, and can either be built natively using `gcc` or loaded using package management.

Technologies you should familiar with:

- Bash and shell scripting
- SSH
- System calls

Technologies to be secondarily familiar with

- Network programming

## macOS (previously Mac OS X)

macOS is another fork of UNIX, now called Darwin but previously FreeBSD, which was created in the 90s by Berkely (Berkeley Software Distribution). OS X features a kernel and basic system libraries that are nearly identical to Linux, with many small differences. OS X's graphics layer, Cocoa, differs substantially from Linux graphics layers, features much greater reliability and consistency, and uniquely supports development in Objective-C and Swift.

> Infographic: [Unix variant family tree](https://en.wikipedia.org/wiki/History_of_Unix#/media/File:Unix_history-simple.svg)

Technologies you need to be familiar with:

- XCode
- Objective-C
- Interface builder

## Exercises

Explain the following to someone in class, or in your house, or on the phone. If no one is available, any house plant will do.

(The answers to the below questions aren't necessarily in the above text.)

- Which of the Big Three is your favorite OS? Why?

- What did the Macintosh computer run as an OS before it ran macOS/OS X?

  - What were some of the drawbacks to this old OS?

- Why is C a popular language for writing operating systems?
