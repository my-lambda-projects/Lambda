# Serverless Functions: A Guide to Usage and Deployment - SitePoint

> How can you run code without servers? Learn all about serverless functions, their pros and cons, and situations where you might want to use them.

**Over the last few years, serverless functions (sometimes also referred to as “serverless” or “serverless computing”) have become a popular technology. However, there’s still a lot of confusion around the term. How can you run code without servers? What are the pros and cons of the technology? What are the situations where you might use it? In this article, I hope answer these questions and give you a good overview of the technology.**

What are Serverless Functions?
------------------------------

The term “serverless” is sure to provoke curiosity the first time you hear it. “How do you run code on the web without a server?” you might wonder. What it actually means is that you, as a developer, don’t have to worry about the servers your code runs on. Provisioning of hardware, configuring networking, installing software, and scaling are all abstracted away by the serverless provider.

From a development perspective, a serverless function is a bundle of code that you upload to a serverless provider (such as AWS or Google). This code can be configured to respond to requests via a URL, run on a schedule (that is, via a cron job), or called from other services or serverless functions.

Serverless functions are ideal for adding a dash of backend functionality to frontend applications without the complexity and cost of running a full server.

At the other end of the scale, you can also build whole applications with serverless functions. In conjunction with other cloud services providing file storage, database systems, and authentication, it’s possible to build large, robust and scalable applications without having to provision a single server.

Advantages of Serverless Functions
----------------------------------

Serverless functions are run in micro-containers that are started up on demand. They’re designed for fairly short-running processes, and so billing is set with this in mind. Unlike full server instances, which are often billed by the hour, serverless functions are typically billed by the GB-second. With minimum billing durations in the order of milliseconds, low-frequency or sporadic workloads are much cheaper to run as serverless functions than traditional server instances. Light workloads and prototyping can even fall within the free tier of some providers.

The on-demand invocation of serverless functions means they scale quickly and easily with no extra work on the part of the developer. This makes them ideal for situations where traffic may spike unpredictably, as more instances of the function will automatically be made available to handle the load. The function will be scaled back down afterward, meaning you won’t be paying for unused capacity.

A key advantage to the serverless model is not having to deal with servers. Running a web application requires a lot of time and expertise in server administration in order to keep the software up to date with the latest security patches, and ensure that the server is correctly configured in order to be secure and performant. For start-ups and small businesses, hiring someone to deal with server administration is a large additional overhead. With serverless, developers can focus on creating solutions.

Disadvantages of Serverless Functions
-------------------------------------

Of course, no technology is perfect, and serverless functions aren’t without their drawbacks. As I mentioned earlier, the serverless model is designed with short-lived processes in mind. With the maximum execution time measured in minutes (for example, 15 on AWS and 9 on Google), it’s not suitable for longer-running jobs like processing large batches of data.

Another widely discussed issue is that of the cold-start time. This is the time taken for the provider to provision and initialize a container for your serverless function before it’s ready to start running. Once a function has finished running, the container is kept around for a short time to be reused if the code is executed again. This “cold-start” delay could add [between half a second to a second’s delay](https://mikhail.io/serverless/coldstarts/aws) to your function’s response time. There are work-arounds for this, including the Serverless framework’s [WarmUp plugin](https://www.serverless.com/blog/keep-your-lambdas-warm), which pings your function on a schedule to keep the container alive.

Although serverless functions free you up from having to worry about server provisioning and maintenance, that’s not to say there isn’t a learning curve. Building applications with serverless requires a different mindset to working with traditional monolithic codebases. You have to structure your code in a different way, breaking down the functionality into smaller, discrete services that fit within the constraints of the serverless functions. Deployment is also more complex, as each function is independently versioned and updated.

There’s also the issue of vendor lock-in that’s sometimes mentioned as a downside to serverless tech. As it currently stands, the major providers in this space (AWS, Google, Azure) have their own different implementations and management tools. This can make it difficult to move a serverless application from one cloud provider to another. Projects such as the [Serverless Framework](https://www.serverless.com/) have attempted to abstract away the underlying services in order to make applications portable between providers.

Serverless Function Use Cases
-----------------------------

Although serverless functions can be used to build entire applications, let’s take a look at some less ambitious use cases where serverless can benefit the average developer.

### Form mailer

It’s not uncommon to have websites that are completely static, apart from a contact form that the client wants to be emailed to them when the user hits send. The site’s hosting provider may or may not support server-side scripting, and even then it may not be in a language you’re familiar with. Setting up a serverless function as a form mailer allows you to add the functionality to sites that are on static hosting.

### Cron job

Sometimes you may need a scheduled task to be run in the background. Normally, you’d have to pay for a server in order to set up a cron job, and this server would sit idle in between jobs. With a serverless function, you’ll only pay for the time the job spends running (and perhaps not at all, if it falls within the free tier).

### Thumbnail generator

Imagine that your React application allows the user to upload a photo to be used as an avatar throughout the app. You want to resize the uploaded image so you’re not wasting bandwidth by serving images that are far larger than needed. A serverless function could be used process the upload request, resizing the image to the required sizes and saving to a service such as S3 or Google Storage.

A Practical Example of a Serverless Function
--------------------------------------------

In order to get a more hands-on understanding of working with serverless functions, let’s walk through a real-world example. We’ll create a static page with a newsletter signup form, that uses a serverless function to save the user’s name and email address to a Google spreadsheet.

Depending on the provider, serverless functions can be written in a variety of languages, but we’re going to use JavaScript, as Netlify supports Node.js functions. I’m going to assume you’ve got a recent version of Node/npm installed on your local machine in order to follow along.

![](https://cdn.sanity.io/images/708bnrs8/production/ae4da31c7000675da4d2091a4d0a1a41a79a7e4d-1402x1843.png?w=165&h=217&fit=crop)

### Learn PHP for free!

Make the leap into server-side programming with a comprehensive cover of PHP & MySQL.

Normally

~RRP $39.99~

**Yours absolutely free**

### 1\. Sign up for a Netlify account

We’re going to use Netlify as the host for this example, as they provide a free tier that includes serverless functions, and it’s very easy to get up and running. Firstly, pop over to their site and [sign up for a free account](https://app.netlify.com/signup).

### 2\. Install the Netlify CLI tool

In order to test our example site locally and deploy to Netlify, we’re going to make use of their CLI tool. This can be installed as a global npm module from the command line:

    npm install -g netlify-cli
    

Once the CLI is installed, running the following command will open a browser window to connect the CLI to your account:

    netlify login
    

### 3\. Create a project folder and install dependencies

Let’s create a folder for the project, and initialize a new npm project:

    mkdir serverless-mailinglist && cd serverless-mailinglist
    npm init -y
    

This will set us up with a `package.json` file for the project, ready to install dependencies. Speaking of which, we’re going to need a couple of packages for our serverless function:

    npm install dotenv google-spreadsheet
    

The first, [dotenv](https://www.npmjs.com/package/dotenv), is a package that will allow us to load values from a `.env` file in the root of our project and expose them to a Node script (our serverless function) as if they were environment variables. The other is [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet), a package that wraps the Google Sheets API and makes it easier to work with.

### 4\. Enable the Google Sheets API and create credentials

In order to use the Sheets API, we need to do a bit of prep work. First, you’ll need to enable the API for your Google account by heading over to [the API console](https://console.developers.google.com/apis/library/sheets.googleapis.com). Create a new project from the menu across the top, and then click the **Enable** button.

Once that’s done, you’ll need to create a Service Account. This account will give you a set of credentials with the necessary permissions to access the API. To do this, follow these steps:

1.  Make sure you’re on the [Sheets API management screen](https://console.cloud.google.com/apis/api/sheets.googleapis.com/overview).
2.  Click **Credentials** in the left sidebar, then click **\+ CREATE CREDENTIALS** and choose **Service account** from the drop-down.
3.  Fill out the form, choosing a name for the service account. The name you choose, plus the project name, will form part of the service account ID. For example, if you name the account “Mailing List” and the project name is “Sitepoint Serverless Demo”, the ID would be something like `mailing-list@sitepoint-serverless-demo.iam.gserviceaccount.com`. Click **CREATE**.
4.  You can skip the remaining two optional sections on the page. Click **CONTINUE** and then **DONE**.
5.  Next, click on the newly created service account. This should take you to a screen showing the account details. Click **KEYS** in the top menu, then **Add Key** and **Create new key**. Choose JSON as the key type.
6.  Click the **CREATE** button and a JSON key file will be downloaded to your computer. (Note: this is the **only** copy, so keep it safe!)

### 5\. Create the signup form page

Let’s go ahead and create a simple signup page that will allow users to submit their details to our mailing list. Create an `index.html` file in the project root, with the following content:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Sign Up For Beta Form</title>
        <link rel="stylesheet" href="style.css">
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
      </head>
      <body>
        <form action="/.netlify/functions/subscribe" method="post">
          <div class="header">
             <p>Get Great Content Every Week</p>
          </div>
          <div class="description">
            <p>I publish new articles every week. Be sure to subscribe to my newsletter to make sure you never miss a post!</p>
          </div>
          <div class="input">
            <input type="text" class="button" id="name" name="name" placeholder="YOUR NAME">
          </div>
          <div class="input">
            <input type="text" class="button" id="email" name="email" placeholder="NAME@EXAMPLE.COM">
            <input type="submit" class="button" id="submit" value="SIGN UP">
          </div>
        </form>
      </body>
    </html>
    

And a `style.css` file, with the following rules:

    body {
      background: #A6E9D7;
      font-family: 'Lato', sans-serif;
      color: #FDFCFB;
      text-align: center;
      background-image: url(https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
    }
    
    form {
      width: 450px;
      margin: 17% auto;
    }
    
    .header {
      font-size: 35px;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
    
    .description {
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 1.3em;
      margin: -2px 0 45px;
    }
    
    .input {
      display: flex;
      align-items: center;
    }
    
    .button {
      height: 44px;
      border: none;
    }
    
    #email {
      width: 75%;
      background: #FDFCFB;
      font-family: inherit;
      color: #737373;
      letter-spacing: 1px;
      text-indent: 5%;
      border-radius: 5px 0 0 5px;
    }
    
    #name {
      width: 100%;
      background: #FDFCFB;
      font-family: inherit;
      color: #737373;
      letter-spacing: 1px;
      text-indent: 5%;
      border-radius: 5px;
      margin-bottom: 1em;
    }
    
    #submit {
      width: 25%;
      height: 46px;
      background: #E86C8D;
      font-family: inherit;
      font-weight: bold;
      color: inherit;
      letter-spacing: 1px;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      transition: background .3s ease-in-out;
    }
    
    #submit:hover {
      background: #d45d7d;
    }
    
    input:focus {
      outline: none;
      outline: 2px solid #E86C8D;
      box-shadow: 0 0 2px #E86C8D;
    }
    

### 6\. Create a serverless function to handle the form

Now that we have our form, we need to create the code for the serverless function that will handle the POST request and save the data to a Google spreadsheet via the API. In order for Netlify to deploy our function, we have to follow their naming convention and create the folder path `netlify/functions/` within our project folder.

Inside that new functions folder, create a JavaScript file `subscribe.js`:

    if (!process.env.NETLIFY) {
      require('dotenv').config();
    }
    
    const { parse } = require('querystring');
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    
    exports.handler = async (event, context) => {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
    
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
      });
    
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0]; 
    
      try {
        if (event.httpMethod === 'POST') {
          
          const data = parse(event.body);
          await sheet.addRow(data);
    
          return {
            statusCode: 302,
            headers: {
              Location: '/success.html'
            }
          };
        } else {
          return {
            statusCode: 500,
            body: 'unrecognized HTTP Method, must be POST'
          };
        }
      } catch (err) {
        console.error('error ocurred in processing ', event);
        console.error(err);
        return {
          statusCode: 500,
          body: err.toString()
        };
      }
    };
    

_Note: the function code is adapted from the blog post [Google Sheets v4 API with Netlify Dev](https://www.swyx.io/netlify-google-sheets/)._

Netlify’s default configuration means that JavaScript files under the `netlify/functions` path can be invoked at the `/.netlify/functions/` URL (note the period before `netlify`) plus the filename minus the extension. The file `netlify/functions/subscribe.js` would be made available at the relative URL `/.netlify/functions/subscribe`.

The basic requirement for a Node-based serverless function is to export a handler function that will be invoked when the endpoint receives a request. The function is passed two parameters. The `event` parameter provides access to details of the request, such as the headers and the HTTP method. The `context` parameter gives access to information about the context in which the function was called, including details of the authenticated user, for example.

The function code itself connects to the Google Sheets API with the provided credentials. It then parses the request body and adds the submitted name and email address to the spreadsheet via the API. Once complete, the function returns a 302 response to redirect the user to a success page. (Creating this page is left for the reader to complete.)

In order to be able to test the function locally, we need to create a `.env` file in the project root, and add some variables:

    GOOGLE_SERVICE_ACCOUNT_EMAIL=mailing-list@sitepoint-serverless-demo.iam.gserviceaccount.com
    GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANB \\etc
    GOOGLE_SPREADSHEET_ID_FROM_URL=1N8afdqnJjBhwXsvplIgU-5JoAFr3RapIrAS9oUybFnU
    

The service account email is the one you created in step 4, and the private key comes from the JSON key file you downloaded. The last one, the spreadsheet ID, we’ll get in the next step.

### 7\. Create spreadsheet and share

Go to Google Sheets and create a new spreadsheet. It doesn’t matter what title you give it, but make a note of the ID from the URL and add it to the `.env` file you created in the last step.

In the first row of the spreadsheet, add two column headers: **name** and **email** (note that it’s important the case matches the input names from the HTML form). The entries created by the serverless function will be added below this as additional rows.

Now, you have to give the service account you created permission to access the spreadsheet. Click on the **Share** button, and enter the service account email address in the input box. Make sure to assign Editor permissions.

### 8\. Test locally with Netlify CLI

One of the nice features of the Netlify CLI tool is that it allows you to test your code locally before publishing to their service. To fire up the development server, run the following:

    netlify dev
    

A new browser tab will automatically open, with the site displayed. Filling in and submitting the form will run the serverless function (served locally) and then redirect your browser upon success. If you hop over to your spreadsheet on Google Sheets, you should see the details you entered in a new row.

### 9\. Deploy to Netlify

The CLI tool does a great job of simulating the Netlify service running locally on your machine, but if you want to see the project running on their servers you can also use the CLI to publish your project.

Run the following command:

    netlify deploy
    

Then follow the prompts. Your site, including the serverless function, will be published to the Web. Don’t forget that you’ll also need to set up environment variables to mirror those in your `.env` file. You can set these up from your Netlify site’s admin panel, or via the CLI tool:

    netlify env:set VAR_NAME value
    

Serverless: Just a Fad, or the Future of the Backend?
-----------------------------------------------------

Serverless has simultaneously been decried as a fad, and heralded as the future of backend applications. Amazon’s Lambda functions have been around since 2014, and are a key AWS product. Of course, there are still many situations where the flexibility and capabilities of actual servers, running 24/7 and with full shell access, are necessary.

But, as we’ve seen, for certain types of workload, severless’s cheap costs, scalability, and low maintenance benefits make it a good choice. With a growing number of books, courses, frameworks and services in the serverless ecosystem, it’s a safe bet that serverless functions are here for the long term.


[Source](https://www.sitepoint.com/serverless-functions/)