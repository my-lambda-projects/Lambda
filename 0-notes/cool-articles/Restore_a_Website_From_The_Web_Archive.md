This tutorial explains how you can recover a website from the Waybackmachine.

## Download your files

First find your website's address on [https://archive.org/web/](https://archive.org/web/). For example: https://web.archive.org/web/20150309210900/http://example.com/

Our software only works with a specific date. On archive.org you can find a specific date by going to the calendar and clicking on a blue circle:

![](https://www.waybackmachinedownloader.com/en/img/image-how-to-install-page.png "Unzip web archive files")

Once you picked a URL, you can use it either with the free demo or the paid service:

- [Free demo (4 page limit)](https://www.waybackmachinedownloader.com/en/free-archive.org-download/)
- [Paid version (virtually unlimited pages)](https://www.waybackmachinedownloader.com/en/buy-wayback-machine-downloader-recover/)

The files are sent to your email address, after which you can continue with the installation process below.

## Hosting

- For most users, we recommend shared hosting from [Namecheap ($35/year).](https://www.waybackmachinedownloader.com/go-to/?page=hosting)
- Make sure that you use an Apache server. Almost all cheap hosting services ([Hostgator](https://www.waybackmachinedownloader.com/go-to/?page=hostgator), Godaddy etc) use Apache. Also note that “Managed WordPress” hosting services do not work.
- If you want to host a PBN network of 10+ WordPress sites, then [we recommend EBN](https://www.waybackmachinedownloader.com/go-to/?page=ebn). ![](https://www.waybackmachinedownloader.com/en//img/mouse-over-help.png)

## Installation Method 1: The Easy Method

- **1.** Register the domain with your hosting company. If you have registered the domain elsewhere, then create an add-on domain in the cPanel of your hosting company. [Here](https://www.godaddy.com/help/add-addon-domains-to-host-multiple-websites-8877) is a tutorial from GoDaddy, that explains how to create an add-on domain.
- **2.** Login to cPanel and go to "File Manager", as shown in the picture below:

  ![](https://www.waybackmachinedownloader.com/en/img/File-manager.jpg "Unzip web archive files")

- **3.** Browse to the root folder of your domain. Normally this is /public_html/example.com, as shown below. For this tutorial, we used the domain buy-searchengine.com. Then click on "Upload":

  ![](https://www.waybackmachinedownloader.com/en/img/upload-archive-files-root-folder.png "Unzip web archive files")

- **4.** Then upload the ZIP file, as shown in the picture below. This assumes that you have already downloaded the ZIP file from waybackmachinedownloader.com.

  ![](https://www.waybackmachinedownloader.com/en/img/select-downloaded-zip-file.JPG "Unzip web archive files")

- **5.** Extract the ZIP file:

  ![](https://www.waybackmachinedownloader.com/en/img/Extract-zip-file-manager.png "Unzip web archive files")

- **6.** That's it! If you purchased the domain and the hosting from different companies, then you still have to change the name servers at your domain registrar, and change them with the name servers from your hosting company.
- **7.** If you want to edit the front page, then go to the File Manager and edit the index.html file, using a text editor. You might find it easier to copy part of that file and edit it with an [online HTML editor](https://html-online.com/editor/).

### WordPress installation instructions

If you also ordered the WordPress conversion, then wait until one of our developers sends you a ZIP file with WordPress files. This might take up to 48 hours after the scraping has finished.

It might sound strange, but you can not use a "Managed WordPress" hosting package. It doesn’t provide enough rights to edit the database. However, any cheap shared hosting package works, as long as it uses Apache. You can get this from providers such as Godaddy or [Hostgator](https://www.waybackmachinedownloader.com/go-to/?page=hostgator). We recommend [Namecheap](https://www.waybackmachinedownloader.com/go-to/?page=hosting) because it’s good enough and costs only $35/year.

- **8.** Upload and extract this ZIP file as described above in step 2-6, in the same way as you would do with a zip file with HTML files. In the ZIP file there is also a folder called "database". If you want to save some time, you can remove this folder from the ZIP file, because you do not need to upload it. You will need the folder later though.
- **9.** Go to your cPanel and open "MySQL Databases". Create a new database. You can name it anything, but in our example we use the name of our domain. You will need this name later, so pick something easy.

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-1.png)

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-2.png)

- **10.** Create a new user and password. The name can be anything, but you'll need it later.

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-3.png)

- **11.** Add this user to the database. Give your new user access to all privileges.

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-4.png)

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-5.png)

- **12.** On your own computer, unzip the folder called "database". For example, unzip this to your desktop.
- **13.** Go to your cPanel and open "phpMyAdmin".

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-6.png)

- **14.** First select your database on the left panel, by clicking on it. Then click "import" and import the database. This is the .sql file in the folder called "database".

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-7.png)

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-import-database-phpmyadmin-step-8.png)

- **15.** Go to File Manager and find the file called "wp-config.php". Open this file in a text editor.
- **16.** In wp-config.php, edit the database name, database user name and database password. Use the values that you created in step 9 and 10.  
  With some hosts you also have to change the hostname, but with 95%+ of hosting companies, you can leave this as "localhost". For example with iPage it is "UsernameOfYourAccount.ipagemysql.com"

  ![](https://www.waybackmachinedownloader.com/en/img/wordpress-installation-step-9.png)

- **17.** That's it! Your WordPress website should now work.

## WordPress Installation: Troubleshooting

- **[Incorrect server or DNS configuration](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#incorrect_server_or_dns_configuration)**
- **[Redirect loop error](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#redirect_loop_error)**
- **[Installation service](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#installation_service)**

## Method 2: using FTP

**This Tutorial explains how you can recover a website from the Waybackmachine. It also explains exactly how you can upload the files with Cpanel and FTP.**

- **1.** Download the .zip file with all the HTML files. Extract the files (unzip) to a folder of your choice.

  ![](https://www.waybackmachinedownloader.com/en/img/Unzip-web-archive-files.png "Unzip web archive files")

- **2.** You need to transfer the files to the server using FTP software. If you don't have an FTP client already, then we recommend FileZilla: [https://filezilla-project.org/](https://filezilla-project.org/)
- **3.** If you don't already have an FTP account at your hosting provider, then create one. If your host uses cPanel, then find the icon that says "FTP Accounts" (most hosting providers use cPanel: [Hostgator](https://www.waybackmachinedownloader.com/go-to/?page=hostgator), Godaddy, BlueHost : all of them use cPanel)  
  cPanel example:

  ![](https://www.waybackmachinedownloader.com/en/img/download-site-from-wayback-machine-FTP.png "download site from wayback machine FTP")

  It's usually easier to create an FTP account when adding a domain to your hosting:

  ![](https://www.waybackmachinedownloader.com/en/img/wayback-downloader-FTP-2.png "wayback downloader FTP")

- **4.** Find the IP address of your server. In GoDaddy you can find your IP address on the hosting dashboard:

  ![](https://www.waybackmachinedownloader.com/en/img/Godaddy-find-ip-for-way-back-machine-download.png "Godaddy find ip for wayback machine download")

- **5.** We use FileZilla for Windows in this guide, but you can also download it for Apple computers.  
  You should now have an FTP account and know your IP address. Open an FTP client. We use FileZilla in this guide.  
  \- Fill in your username and password.  
  \- The username should be yourname@yourdomain.com  
  \- Host should be the IP address of your server, that will host the Wayback files.  
  \- Port can be blank.  
  \- Press Quickconnect to connect.

  ![](https://www.waybackmachinedownloader.com/en/img/download-site-from-web-archive.png "download site from web archive")

- **6.** Now select all the files and move them to the remote site:

  ![](https://www.waybackmachinedownloader.com/en/img/How-to-recover-internet-website-archive.png "How to recover internet website archive")

- **7.** Your site should work now.

### Troubleshooting

- **[Incorrect server or DNS configuration](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#incorrect_server_or_dns_configuration)**
- **[Make sure you use the correct (Apache) server for hosting](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#hosting)**
- **[Redirect loop error](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#redirect_loop_error)**
- **[Installation service](https://www.waybackmachinedownloader.com/en/how-to-download-site-from-wayback-machine/#installation_service)**
- **[FAQ](https://www.waybackmachinedownloader.com/en/faq/)**

#### Incorrect server or DNS configuration

If you managed to do all the steps above and your site still doesn't work, then make sure that the HTML files are located in the folder public_html/yourdomain.com/. You can check this with an FTP account with admin rights, or go to cPanel > File Manager. Check if the files are indeed located in public_html/yourdomain.com/.

If you are trying to install the WordPress version, then place a simple index.html in this folder. Then browse to the domain and see if the index file is portrayed correctly. If it doesn't show, then there is probably something wrong with your server configuration (for example, you didn't create an addon domain) or with your DNS settings (check your name server configuration).

#### Redirect loop error

![](https://www.waybackmachinedownloader.com/en/img/domain-redirect-loop-error.png "Redirect loop error")

When you have an unexpected redirect loop error (“domain.com redirected you too many times”):

1\. For WordPress users, this is usually caused by incorrect file/folder permissions. This should be 755 for all folders and sub-folders. It should be 644 for all files. For information on how to set permissions see [this guide](https://www.wpbeginner.com/beginners-guide/how-to-fix-file-and-folder-permissions-error-in-wordpress/)

2\. The redirect loop can also be caused by corrupted files after using cPanel to unzip the files. Try to extract (unzip) the files locally and then transfer them via FTP software in an uncompressed form.

#### Installation service

If it still doesn't work, we can also do it for you. Just send $10 to our Pay Pal account and an email to our support address with your hosting account details. For WordPress installations, this charge is a fixed $20. You can pay via [this form](https://www.waybackmachinedownloader.com/en/web-development/)
