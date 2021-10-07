# OS Module

### Import OS Module

First, we need to import the **OS Module** in our project. So for using the OS Module, we need to add using the “**import**” statement. Along with that, we are gonna import a **time** module to make our program wait for some time using the sleep method.

```text
import os
import time
```

#### Create a Function for Create Folders

As we know that for creating the function in Python we have to use “**def**” keyword to define a function.

So let’s create a new function “**createFolders**\(address\)” which accepts one argument as the address where we need to create folders.

So for this example let’s create 10 directories or folders using OS built-in Module.

```text
def createFolders(HOME_FOLDER):
    for i in range(10):
            os.mkdir(HOME_FOLDER + str(i) + '-Dir')
```

#### Create a Function for Create Files

Since we have declared a function which creates 10 folders at address which we passed as an argument.

Now let’s create a new function for creating files named it as **“createFiles\(arg\)**” which accepts one argument as the address where we need to create files.

So for this example let’s create 10 files using OS Module.

```text
def createFiles(HOME_FOLDER):
    for i in range(10):
        f = open(HOME_FOLDER + str(i) + '-File.txt', 'w')
        f.close()
```

#### Create a Function for Rename Files

Now we have already defined the function for creating folders and files, so now let’s create a new function for rename the files and folders.

**Also Read =&gt;** [**Flask Python Basic Application Tutorial \[ Part-1 \]**](https://codezup.com/basic-flask-python-application-tutorial/)

As we already created the folders with **“-Dir”** at last so now what we want is to replace this “**Dir**” with Folder.

```text
def renameFiles(HOME_FOLDER):
    os.chdir(HOME_FOLDER)
    for i in os.listdir():
        fileName, fileExt = os.path.splitext(i)
        print(fileName, fileExt)
        os.rename(i, i.replace('Dir', 'Folder'))
```

**Create Main Function Code**

Now we have created all the basic functions of the built-in Module. Now what we want is to create a main function to call them to show their functionality.

And also we are gonna use the **time module** which has sleep\(seconds\) in this main function to make a pause while creating and renaming files or folders.

```text
if __name__ == '__main__':
    HOME_FOLDER = 'C:/CodezUp/Python/Scripts/Demo/'
    createFolders(HOME_FOLDER)
    createFiles(HOME_FOLDER)
    time.sleep(10)
    renameFiles(HOME_FOLDER)
```

**Output**

![How to create folders and manipulate them-Python OS Module](https://i0.wp.com/codezup.com/wp-content/uploads/2019/12/How-to-create-folders-and-manipulate-them-Python-output1.png?resize=665%2C253&ssl=1)

![How to create folders and manipulate them using OS Module in Python](https://i1.wp.com/codezup.com/wp-content/uploads/2019/12/How-to-create-folders-and-manipulate-them-Python-output2.png?resize=665%2C465&ssl=1)

**Source Code :**

```text
import os
import time

def createFolders(HOME_FOLDER):
    for i in range(10):
            os.mkdir(HOME_FOLDER + str(i) + '-Dir')

def createFiles(HOME_FOLDER):
    for i in range(10):
        f = open(HOME_FOLDER + str(i) + '-File.txt', 'w')
        f.close()

def renameFiles(HOME_FOLDER):
    os.chdir(HOME_FOLDER)
    for i in os.listdir():
        fileName, fileExt = os.path.splitext(i)
        print(fileName, fileExt)
        os.rename(i, i.replace('Dir', 'Folder'))

if __name__ == '__main__':
    HOME_FOLDER = 'C:/CodezUp/Python/Scripts/Demo/'
    createFolders(HOME_FOLDER)
    createFiles(HOME_FOLDER)
    time.sleep(10)
    renameFiles(HOME_FOLDER)
```
