# The Process of Booting the Computer

## Basic Input/Output System (BIOS)

When your computer first boots, it provides power to various electronics components according to the design of the hardware. As each component powers up it executes a Power On Self Test (_POST_). If POST succeeds, a very small operating system is activated with low level drivers to read and write memory, hard disks, simple display output, and potentially network cards.

The BIOS attempts to read the first sector of the boot disc. In the first sector is the Boot Loader, which shows the BIOS which hard disk sector to execute first in order to activate the real operating system.

In Windows, the Boot Loader is called the Master Boot Record. In Linux, it is GRUB or LILO. OS Xs Boot Loader is entirely proprietary.

## Boot-loader

The first-stage boot loader is stored in the BIOS and generally reads the first sector from the boot disk which contains a small program for continuing to load. The small program (usually just a few hundred bytes of machine code) loads and executes the second-state boot loader.

The second-stage, more-complicated boot loader (e.g. GRUB) then does the heavy lifting of loading the rest of the OS. Once the kernel is loaded, the boot loader transfer control to it to continue the boot process.

## Kernel Boot Process

Once the kernel has been loaded, it sets up the execution environment for future processes, initializes hardware drivers, and then switches to _multiuser_ mode.

At this point, it is free to initialize other services that the owner has configured, e.g. MongoDB, sshd, etc.

And finally a login prompt is presented.

## Exercises

Explain the following to someone in class, or in your house, or on the phone. If no one is available, any house plant will do.

(The answers to the below questions aren't necessarily in the above text.)

- Why is a first-stage boot loaded necessary? Why not just load the entire secondary bootloader from the start?

- Why is a boot loader necessary at all? Why not just load the kernel directly?
