# Module: Operating Systems One

## Objectives

- [Operating Systems Overview](objectives/os-overview)
- [Boot Process](objectives/boot-process)
- [Kernel, Processes, Threads](objectives/kernel-proc)
- [Memory Management, Drivers, File Systems](objectives/mm-drv-fs)

## Guided Demo

### File System

Outline in writing (no coding--unless you really want to) the parts you would have to code up to implement a simple filesystem. The filesystem is what keeps track of and organizes files on disk. When you want to read a file, the OS must go retrieve the blocks of the file until it has them all loaded.

The filesystem would need to store file names and the sizes of the file in bytes. Maybe a "created" date.

It would also need to store the data in blocks; a file might be made up of multiple blocks somehow chained together. The blocks might be spread all over the disk (fragmented).

When new files are written, they have to go in blocks that aren't currently in-use by other files. How are free blocks tracked?

(Assume no subdirectories in this filesystem, and that all files are in the same directory.)

How would you organize this data, both the information about the file (the _metadata_) and the data of the file itself?

There's no right answer to this problem; there are many kinds of filesystems that use many different techniques to get the work done.

This is a challenging problem. Mentally experiment with different approaches of keeping track of the data and figure what works and what breaks.

**Stretch challenge**: How would you support subdirectories?
