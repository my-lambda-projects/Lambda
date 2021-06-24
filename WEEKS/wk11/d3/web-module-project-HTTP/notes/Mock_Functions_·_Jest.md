Before a software is released to the market for commercial use, it undergoes rigorous testing. Software testing is classified into four different levels, namely Unit Testing, Integration Testing, System Testing and Acceptance Testing. These four levels of software testing are designed to detect errors, evaluate the correctness of behavior and performance of the software application. Through this “What is Integration Testing?” article, we will learn mainly about the second level of testing, Integration Testing. If you are new to software testing, be sure to also read the [Beginners’ Guide for Software Testing](https://www.edureka.co/blog/what-is-software-testing/).

Let’s take a look at topics covered in this article:

- [Levels of Software Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#SoftwareTestingLevels)
- [What is Integration Testing?](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTesting)
- [Advantages of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingAdvantages)
- [How is Integration Testing Done?](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingProcess)
- [Types of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingTypes)
- [Challenges of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingChallenges)

## **Levels of Software Testing**

[_Software Testing_](https://www.edureka.co/blog/software-testing-tutorial/) _is a phase within the software development cycle in which business-critical software is verified for correctness, quality, and performance._

There are four fundamental levels within software testing, each examining the software functionality from a unique vantage point within the development process. The four levels of software testing are as shown in the image below.

![Levels of Software Testing - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556012641/uploads/2019/04/Levels-of-Software-Testing-What-is-Unit-Testing-Edureka-1-300x245.png)

This article explains integration testing, the first level of software testing in detail.

## **What is Integration Testing?**

_**Integration Testing** is a level of software testing where individual units are combined and tested to verify if they are working as they intend to when integrated. The main aim here is to test the interface between the modules._

Just unit testing is not enough for multiple reasons like:

- A module/unit is usually designed by an individual software developer whose techniques and programming logic differs from that of other programmers
- Often at the time of module development, user requirements change and these new requirements may not be unit tested. This instigates issues
- Issues like data formatting, error trapping, hardware interfaces, and third-party service interfaces are sometimes missed during unit testing

So, no matter how efficiently each module/unit is running, if they aren’t properly integrated, it will affect the functionality of the software program. As a solution integration testing is implemented. This article ‘What is Integration Testing?’ further lists out the advantages of integration testing.

## **Advantages of Integration Testing**

Performing integration testing offers a lot of benefits. Some of them are listed below:

- It makes sure that integrated modules work properly as intended
- The tester can start testing once the modules to be tested are available
- It detects errors related to the interface between modules
- Helps modules interact with API’s and other third-party tools
- Typically covers a large volume of the system, so more efficient
- Increases the test coverage and improves the reliability of tests

Software engineers perform integration testing. Sometimes companies employ independent testers to do it for them. But, how is integration testing carried out in reality? Is it similar to other testing processes? Let’s check it out the next part of this ‘What is Integration Testing?’ article.

## **How is Integration Testing Done?**

The meaning of integration is quite straightforward – Combine the unit tested module one by one and test the functionality of the combined unit. Normally, integration testing is carried out after [unit testing](https://www.edureka.co/blog/what-is-unit-testing). Once all the individual units are created and tested, we start combining those tested modules and start performing the integrated testing. The main goal here is to test the interfaces between the units/modules. Here are a few simple steps that will get you started with integration testing:

[](https://www.edureka.co/selenium-certification-training)

- Prepare the test integration plan
- Decide on the type of integration testing approach
- Design [test cases](https://www.edureka.co/blog/test-case-in-software-testing/), test scenarios and test scripts accordingly
- Deploy the chosen modules together and get the integration tests running
- Track the defects and record the test results of tests
- Repeat the above steps until the complete system is tested

Remember that priority must be given to the integrated interface links between modules or units. As you can see, in the second step you need to decide on the type of integration testing approach. Moving ahead in this ‘What is Integration Testing?’ article, let us learn how these testing strategies are executed, their benefits, and drawbacks.

## **Types of Integration Testing**

Before we start discussing the types of integration testing available, we need to understand the concept of stubs and drivers. While testing, sometimes we face a situation where some of the modules are still under development. These modules for testing purpose are replaced with some dummy programs. These dummy programs are called stubs and drivers.

Imagine, we have an application with two modules i.e, **_Login Page(Module A)_** and **_Admin Page(Module B)_**.

**Case1:** You have to test the Login Page which is developed and sent to the testing team. Login Page is dependent on Admin Page. But the Admin Page is not ready yet. To overcome this situation developers write a dummy program which acts as an Admin Page. This dummy program is Stub. Stubs are ‘Called Programs’.

**Case2:** You have to test Admin Page but the Login Page is not ready yet. To overcome this situation developers write a dummy program which acts like the Login Page. This dummy program is Driver. Drivers are ‘Calling programs’.

![Stubs & Drivers - What is Integration Testing - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Stubs-Drivers-528x237.png)

Now that you are aware of these necessary concepts, let’s check out different types of integration tests. Integration testing types are categorized into different groups that are listed below:

![Types of Integration Testing - - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Types-of-Integration-Testing-528x262.png)

### **Big Bang Integration Testing**

In this testing approach, once all the modules are developed and tested individually, they are integrated once and tested together at once. The only advantage of this type of testing is that it is very much suitable for smaller systems.

![Big Bang Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Big-Bang-Approach-528x164.png)

**Disadvantages**

- Fault localization is tough
- A lot of delay before testing
- Critical issues are not resolved on priority
- Difficult to find the root cause of problems

### **Incremental Integration Testing**

Incremental Testing is performed by connecting two or more modules together that are logically related. Later more modules are added and tested for proper functionality. This is done until all the modules are integrated and tested successfully. It’s further divided into Top-Down Approach, Bottom-Up Approach, and Sandwich Approach.

### Software Testing Training

### **Top-Down Integration Testing**

The top-down approach starts by testing the top-most modules and gradually moving down to the lowest set of modules one-by-one. Testing takes place from top to down following the control flow of the software system. As there is a possibility that the lower level modules might not have been developed while top modules are tested, we use stubs instead of those not ready modules. For simple applications, stubs would simply return the control to their superior modules. For complex applications, they would simulate the full range of responses.

![Top-Down Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Top-Down-Approach-300x122.png)

**Advantages:**

- Fault localization is easier
- The test product is extremely consistent
- The stubs can be written in lesser time compared to drivers
- Critical modules are tested on priority
- Major design flaws are detected as early as possible

**Disadvantages**

- Requires several stubs
- Poor support for early release
- Basic functionality is tested at the end of the cycle

### **Bottom-Up Integration Testing**

The bottom-up approach starts with testing the lowest units of the application and gradually moving up one-by-one. Here testing takes place from the bottom of the control flow to upwards. Again it’s possible that the higher level modules might not have been developed by the time lower modules are tested. In such cases, we simulate the functionality of missing modules by using drivers. These drivers perform a range of tasks such as invoking module under test, pass test data or receive output data.

![Bottom Up Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Bottom-Up-Approach-300x116.png)

**Advantages**

- Here development & testing can be done together so the product will be efficient
- Test conditions are much easy to create

**Disadvantages**

- Requires several drivers
- Data flow is tested very late
- Need for drivers complicates test data management
- Poor support for early release
- Key interfaces defects are detected late

### **Sandwich Integration Testing**

To overcome the limitations and to exploit the advantages of top-down and bottom-up approaches, a hybrid approach of integration testing is used. This approach is known as sandwich integration testing or mixed integration testing. Here, the system is viewed as three layers. Main target layer in the middle, another layer above the target layer, and the last layer below the target layer. The top-down approach is used on the layer from the top to the middle layer. The bottom-up approach is used on the layer from the bottom to middle. Big bang approach is used for modules in the middle.

![Sandwich Approach - - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Sandwich-Approach-300x160.png)

**Advantages**

- Top-Down and Bottom-Up testing techniques can be performed in parallel or one after the other
- Very useful for large enterprises and huge projects that further have several subprojects

**Disadvantages**

[](https://www.edureka.co/selenium-certification-training)

- The cost requirement is very high
- Cannot be used for smaller systems with huge interdependence between the modules
- Different skill sets are required for testers at different levels

These are the different approaches that you can use to perform integration testing based on your testing requirements. You should check which testing strategy can be adopted and prepare the test data and test plan accordingly. As useful as integration testing can be, it is not without its negative points. You need to understand the challenges that you might face when implementing it.

## **Challenges of Integration Testing**

- Managing integration testing is difficult sometimes because of various factors like database, platforms, environment, etc
- Integrating a new system to a legacy system or integrating two legacy system needs a lot of testing efforts and changes
- Less compatibility between the two systems developed by two different companies is a challenge for programmers
- There are way too many different paths and permutations to apply for testing the integrated systems

Despite these challenges, integration testing is very useful in the software testing process. It is an important part of the testing cycle that makes it easy finding defects when two or more units are integrated. With this, we have reached the end of the ‘What is Integration Testing?’ article. Hope the things that you have learned here today will help you as you head out on your software testing journey.

_If you found this ‘What is Integration Testing?’_ _article relevant,_ _check out the _live-online **[Selenium Certification Training](https://www.edureka.co/selenium-certification-training)**\_\_ \_by Edureka, a trusted online learning company with a network of more than 250,000 satisfied learners spread across the globe._

_Got a question for us? Please mention it in the comments section of this ‘\_What is Integration Testing?_’ article and we will get back to you.\_
