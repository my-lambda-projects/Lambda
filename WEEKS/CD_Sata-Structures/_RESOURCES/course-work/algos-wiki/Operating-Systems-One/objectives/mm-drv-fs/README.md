# Memory Management, Drivers, and File Systems, Oh my!

## Memory Management

The operating system is responsible for providing user programs access to memory. The operating system creates a stack frame at the beginning of a program's execution and allocates a section of available free memory for it to utilize. The program's memory space begins essentially at 0, and it has no knowledge of any memory outside of the memory that has been allocated to it by the operating system.

This is one of the fundamental attack vectors used in attempting to take malicious control of a computer. The operating system is responsible for perfectly isolating each process from one another - if a process is able to gain access to memory other than what has been assigned to it it will be able to hijack the system.

## Drivers

Drivers combine, assembly language, C code, and interrupt-driven programming to provide software control of physical devices. The drivers hide the dirty details of talking to the hardware from software developers. Then they present a consistent, easy-to-use programming interface. For example, a driver might know the details about how to talk specifically to an NVIDIA graphics card. Normal programmers don't need or want to know those details. They just want to be able to tell any 3D card from any manufacturer how to draw a scene. For that purpose, the driver exposes an OpenGL or Direct3D interface that the programmers can use.

On general purpose computers like Kaby Lake machines, all drivers are written to control hardware on the other side of the PCIx bus. Hardware is built with a PCIx bus controlller, and driver commands configure binary messages to be sent and retrieved from the hardware over that bus.

In smaller systems like IoT and firmware devices, the bus may be a true parallel bus that is shared between the CPU and the device. These buses are synchronized by the system clock. Drivers on these systems have to know how to take control of the hardware device at the hardware level and can be written to any degree of specificity.

How to write drivers on the PCIx bus or on a parallel bus is a lesson in Computer Engineering, not covered here at Lambda School.

## File System

[File systems at The Linux Documentation Project.org](http://www.tldp.org/LDP/sag/html/filesystems.html)

Files are read and written from internal storage using PCIx drivers dedicated to controlling hard disks. The operating system keeps a record of all of the files in the system, called the File Table.

You've probably heard of the FAT and vFAT filesystems. Linux users are more familiar with the _ext4_ filesystem.

### File table features:

- Contiguity
- Redundancy
- Small overhead

Dozens of specific file systems exist for specialized tasks, as well as dozens of general-purpose filesystems.

## Exercises

Explain the following to someone in class, or in your house, or on the phone. If no one is available, any house plant will do.

(The answers to the below questions aren't necessarily in the above text.)

- If a malicious process had access to the data of another process without permission, what are some bad things that could happen?

- If we didn't have drivers, what would programmers have to do if they wanted to communicate with different brands of USB cards?

- What are some of the book-keeping tasks you can imagine a filesystem needs to keep track of when it comes to storing files?
