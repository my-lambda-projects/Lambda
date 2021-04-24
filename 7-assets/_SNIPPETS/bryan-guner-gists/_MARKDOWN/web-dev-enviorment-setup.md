## Windows Subsytem for Linux (WSL) and Ubuntu

Test if you have Ubuntu installed by typing "Ubuntu" in the search box in the bottom app bar that reads "Type here to search". If you see a search result that reads **"Ubuntu 18.04 LTS"** with "App" under it, then you have it installed.

1.  In the application search box in the bottom bar, type "PowerShell" to find the application named "Windows PowerShell"
2.

---

---

3.  Right-click on "Windows PowerShell" and choose "Run as administrator" from the popup menu

---

---

4.  In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`

---

---

5.  Restart your computer

---

---

6.  In the application search box in the bottom bar, type "Store" to find the application named "Microsoft Store"

---

---

7.  Click "Microsoft Store"

---

---

8.  Click the "Search" button in the upper-right corner of the window

---

---

9.  Type in "Ubuntu"

---

---

10. Click "Run Linux on Windows (Get the apps)"

---

---

11. Click the orange tile labeled **"Ubuntu 18.04 LTS"** UBUNTU VERSION MUST BE 18.04 OR GREATER

---

---

12. Click "Install"

---

---

13. After it downloads, click "Launch"

---

---

14. If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose "Pin to taskbar"

---

---

15. Wait for it to install the local files

---

---

16. When prompted to "Enter new UNIX username", type your first name with no spaces

---

---

17. When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)

---

---

18. Confirm your installation by typing the command `whoami` followed by Enter at the prompt (it should print your first name)

---

---

19. You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)

---

---

20. You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)

---

---

## Git

Git comes with Ubuntu, so there's nothing to install. However, you should configure it using the following instructions.

1.  Open an Ubuntu terminal if you don't have one open already.
2.  You need to configure Git, so type `git config --global user.name "Your Name"` with replacing "Your Name" with your real name.
3.  You need to configure Git, so type `git config --global user.email your@email.com` with replacing "your@email.com" with your real email.

## Google Chrome

Test if you have Chrome installed by typing "Chrome" in the search box in the bottom app bar that reads "Type here to search". If you see a search result that reads "Chrome" with "App" under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

1.  Open Microsoft Edge, the blue "e" in the task bar, and type in [http://chrome.google.com](http://chrome.google.com/). Click the "Download Chrome" button. Click the "Accept and Install" button after reading the terms of service. Click "Save" in the "What do you want to do with ChromeSetup.exe" dialog at the bottom of the window. When you have the option to "Run" it, do so. Answer the questions as you'd like. Set it as the default browser.
2.  Right-click on the Chrome icon in the task bar and choose "Pin to taskbar".

## Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports "Command 'node' not found", then you need to follow these directions.

1.  In the Ubuntu terminal, type `sudo apt update` and press Enter
2.  In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter
3.  In the Ubuntu terminal, type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and press Enter
4.  In the Ubuntu terminal, type `. ./.bashrc` and press Enter
5.  In the Ubuntu terminal, type `nvm install --lts` and press Enter
6.  Confirm that **node** is installed by typing `node --version` and seeing it print something that is not "Command not found"!

## Unzip

For your projects you will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

## Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you're good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

## Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

## _Note about WSL_

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

## Preparing your machine

The commands you need to enter are listed below. Here we will install basic developer tools, such as [homebrew](https://brew.sh/) (a 3rd party package manager for MacOS), [Xcode](https://itunes.apple.com/us/app/xcode/id497799835) (a library of developer tools provided by Apple), VS Code (a full-featured text-editor), and Node (a JavaScript runtime environment).

### Chrome

Here at App Academy, our browser of choice is Google Chrome. This isn't super important at the beginning of the course, but once we get into frontend development (writing code that runs in a web browser) the Chrome DevTools will be crucial for debugging every manner of issue.

To install Google Chrome, download the necessary files and follow the instructions on the [Google Chrome website](https://www.google.com/chrome/browser/desktop/index.html).

### Xcode

Let's start with Xcode. The Xcode command line tools are a requirement for installing the homebrew package manager in the next step.

**NOTE: If you are using a Linux machine you will not be able to install Xcode or homebrew.**

Install the Xcode command line tools by running the following from the console.

    $ xcode-select --install

To conclude the installation you will need to agree to the Xcode license. Start the Xcode app, click "Agree", and allow the installation to finish. Then you can go ahead and quit the Xcode app.

### Homebrew

Homebrew is kind of like a low-tech App Store. It allows us access to and the ability to install a wide variety of software and command line tools from the console. These are distinct from those hosted on the App Store and will need to be managed by Homebrew.

Enter the following in your terminal to download and install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

You will be given a list of dependencies that will be installed and prompted to continue or abort. Press `RETURN` to continue.

Let's break this command down a bit. `curl`, a command-line tool commonly used for downloading files from the internet, is used to download the Homebrew installation file. The `"$(...)"` transforms the file content into a string. Finally, the string is passed to a Ruby language executable (`/usr/bin/ruby` is where the system Ruby executable file is stored on our machine) with the `-e` flag to tell Ruby to run the argument as code.

Check out the [Homebrew website](https://brew.sh/) to learn the basic commands.

### Node.js & NPM

[Node.js](https://nodejs.org/en/) is a very powerful runtime environment built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive applications like video streaming sites, robots, and other general purpose applications. For our purposes Node provides a way for us to run JavaScript outside of the browser.

We want to use a version manager with Node to help us manage potential conflicts between versions and dependencies. In this case we will be using [NVM](https://github.com/creationix/nvm) (Node Version Manager) to install/manage Node.js.

Open up your console (the Terminal application on Mac) and run the following:

    # download and run the official install script
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

    # update your terminal config (you will now have access to the nvm command)
    source ~/.bashrc

    # install a stable version of node
    nvm install 10.16

    # set version 10.16.0 as default version
    nvm use 10.16

    # verify install/config
    which node # => /Users/username/.nvm/versions/node/v10.16.0/bin/node

Node comes with a package manager called [NPM](https://docs.npmjs.com/), which provides access to a whole ecosystem of libraries and tools we can use. NPM comes pre-bundled with Node, so there is no additional work for us to do. By default we don't need any additional libraries, and any additional packages we do need to use will be installed on a project-by-project basis.

### VS Code

This one is pretty easy. Go to website for [Visual Studio Code](https://code.visualstudio.com/), then download and install VS Code.

To verify that the shell commands were installed correctly, run `which code` in your terminal. If `code` is not a recognized command, open the VS Code editor, open the Command Palette (`Cmd+Shift+P` on macOS ,`Ctrl+Shift+P` on Linux) and type `shell command` to find the `Shell Command: Install 'code' command in PATH` command. Then restart the terminal. This will now allow you to easily open files in VS Code from the terminal using the `code` command followed by a file or directory.

Next, we'll want to install a few useful VS Code extensions and configure VS Code to play nice with these extensions. Download [this zip file](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/setup-vs-code.zip), which contains a script that will do the work for you. Unzip the file and navigate into the directory where the file is located in the terminal (drag and drop the folder over to the terminal icon on macOS or right click in the directory and select `Open in Terminal` on most Linux distributions).

To run the script, run the command:

    ./setup-vs-code.sh

The script will do the rest. Now restart VS Code and you'll be good to go.

### Mocha testing framework

The last thing we'll be installing will be Mocha. Mocha is a JavaScript testing framework that we will be using to test our work in the future. Here are the instructions of how to install `mocha`!

#### Installing Mocha

1.  Open Terminal
2.  Enter this command: `npm install -g mocha`
3.  To test your installation, run the command: `mocha --version`. If it returns a version number, you've successfully installed mocha! Otherwise, let your instructor know and they'll help you fix things.

### Installing Python3

You can just use _homebrew_ for this install, too.

    brew install python
