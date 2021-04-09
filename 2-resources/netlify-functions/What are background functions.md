# What are background functions?

> You might have heard about serverless functions, but have you heard about background functions? They're a new kind of serverless functions that can run up to 15 minutes!

> Background functions are available on Pro plans and above.

Introduction
------------

Serverless functions have helped to revolutionize how applications are built and architected. That said, one of the challenges that come with using serverless functions is that not all serverless functions are created equal. And when it comes to serverless functions, one of the key metrics that often play a role in how they should be handled boils down to one thing: time.

When do I need a background function?
-------------------------------------

While serverless functions empower us to build some incredible applications, one limitation that comes with traditional serverless functions is that they are unable to manage processes that take a long time. That’s where background functions come in.

Some common scenarios where background functions could be useful include:

*   Generating a report that is dynamically generated from the user’s query and requires stitching data from multiple sources
*   Scraping data from websites
*   Batch processing scripts to accomplish a user’s goal (e.g., creating a PDF based on a user’s submission that then gets emailed to the user)
*   And much more!

In other words, they are perfect for when you need something to run in the background while the user resumes their flow.

How do background functions work?
---------------------------------

Traditional serverless functions are deployed as synchronous functions that will return their response to the client after the function completed. On the other hand, background functions come in two parts since they are primarily asynchronous:

1.  Invoking the function and returning a response to the client to indicate whether or not the function was successfully invoked or not
2.  If the invocation is successful, it will run separately in the background asynchronously until it completes (up until a 15 minute limit)

How do I create a background function?
--------------------------------------

While background functions are a special type of serverless function, they’re actually not very different in terms of how you create them!

### Where do they live in the repo?

They live in the same directory as your other serverless functions so no need to follow a pre-defined convention!

As an example, let’s assume that you store your serverless functions in a `functions` folder, which would correspond to the following TOML configuration:

    [build]
      functions = "functions"
    

This means you would also create them in the `functions` folder.

### What do I need to configure?

Though one may think that you need to configure a lot of things to make background functions work, the only thing you need to do differently is append `-background` to the filename of your serverless function.

For example, if you had a standard send email serverless function, here is the difference between the two:

    // Standard serverless function
    send-email.js;
    
    // Background function
    send-email-background.js;
    

And believe it or not, just by adding `-background` to your filename, your background function is ready to be built!

### What is the structure of a background function?

Similar to a standard serverless function, background functions require you to export a handler function that you need to export in order for it to be successfully invoked.

    exports.handler = function (event, context) {
      
    };
    

How does it work?
-----------------

To invoke the background function, you would typically invoke a `POST` request to the endpoint so that you can also pass the background function parameters as needed.

Using the example from before, if you wanted to invoke the background function `send-email-background.js`, then you would make a call to `/.netlify/functions/send-email-background` and the function would be invoked!

    
    const callEmailBackgroundFunction = () => {
      fetch("/.netlify/functions/send-email-background", {
        method: "POST",
      });
    };
    

### How is it different from serverless functions?

Unlike serverless functions, rather than provide a response about whether or not the code within the function fails or passes, background functions only return a response as to whether the function was successfully added to the queue by returning a `202` response. In other words, since background functions can take up to 15 minutes, you would not receive an additional response as to whether the code within the background function itself was successful or not.

In the example of our send email background function, if the service to send an email was unsuccessful, that would need to be monitored elsewhere and would not be something we could track directly on the client side.

Next Steps
----------

In this next post, we will be looking at a working example using SendGrid! In the meantime, for additional resources, be sure to check out the [official docs for background functions](https://docs.netlify.com/functions/background-functions/).


[Source](https://www.netlify.com/blog/2021/01/07/what-are-background-functions/)