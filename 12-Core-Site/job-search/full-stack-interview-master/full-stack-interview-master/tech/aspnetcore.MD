<h1 align="center">
ASP.NET Core Interview Questions & Answers
</h1>
<p align="center">
    <img src="https://github.com/monkey3310/full-stack-interview/blob/master/assets/aspnetcore.png" alt="ASP.NET Core Interview Questions & Answers" height="200"/>
</p>

_Note: Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would._

### 1. What is .NET Core :star:

<details>
    <summary>
        Answer
    </summary>

A cross-platform version of .NET, that supports almost all things that .NET supported (except things like WPF, Windows Forms, Web Forms and Active Directory). It is leaner, faster and improved version of .NET

.NET Core and ASP.NET Core are FREE and Open Source but also they are supported by Microsoft.

</details>

### 2. What is ASP.NET Core :star:

<details>
    <summary>
        Answer
    </summary>

ASP.NET Core is a brand new cross-platform web framework built with .NET Core framework. Its not an update to ASP.NET framework, but a complete rewrite from scratch. Its more modular, scalable, and faster compared to ASP.NET, + cross platform and easily extendable.

It works with both .NET Core and .NET Framework.

It comes with some build in features, line simple DI, logging, strongly typed configuration, new fully async pipeline.

</details>

### 3. What is Kestrel? :star:

<details>
    <summary> 
        Answer
    </summary>

Kestrel is a cross-platform web server built for ASP.NET Core based on libuv – a cross-platform asynchronous I/O library.

</details>

### 4. Dependency Injection in ASP.NET Core? :star:

<details>
    <summary>
        Answer
    </summary>

Dependency Injection comes as a part of ASP.NET Core Framework and everything is built around it. You can extend the current DI with a container of your choice (AutoFac, StructureMap, CastleWindsor etc).

</details>

### 5. Explain Middleware in ASP.NET Core? :star:

<details>
    <summary>
        Answer
    </summary>

In ASP.NET we had modules and web handlers to handle request pipeline. Middleware in ASP.NET Core is software that application injects into request / response pipeline to execute certain actions before next part of the application is invoked. Request delegates usage is to build the request pipeline. Middleware participates in forming both HTTP Request and HTTP Response of the ASP.NET Core Web Server.

For example we can have Logging middleware, Authentication middleware, MVC middleware

</details>

### 6. Logging in ASP.NET Core? :star:

<details>
    <summary>
        Answer
    </summary>

Logging is built-in and you get access to structured logs from the ASP.NET Core host itself to your application. With tools like `Serilog`, you can extend your logging easily and save your logs to file, Azure, Amazon or any other output provider. You can configure verbosity and log levels via configuration (`appsettings.json` by default), and you can configure log levels by different categories.

</details>

### 7. Talk About New .csproj File? :star:

<details>
    <summary>
        Answer
    </summary>

`.csproj` file is now used as a place where we manage the NuGet packages for your application.

File explorer and project explorer are now in sync. For .NET Core projects, you can easily drop a file from file explorer into a project or delete it from the file system and it will be gone from the project. No more source files in a `.csproj` file.

You can now edit the `.csproj` file directly without unloading the project.

</details>

### 8. What is Startup.cs in ASP.NET Core? :star:

<details>
    <summary>
        Answer
    </summary>

In ASP.NET, `Global.asax` acts as the entry point for your application.
In ASP.NET Core, `startup.cs` is the entry point for your application.

</details>

### 9. Explain two types of deployment for .NET Core applications :start::star:

<details>
    <summary>
        Answer
    </summary>

You can deploy a .NET Core application either as a framework-dependent deployment, which includes your application binaries but depends on the presence of .NET Core on the target system, or as a self-contained deployment, which includes both your application and the .NET Core binaries.

- Framework-dependent deployment
  > Deploying a framework-dependent deployment with no third-party dependencies simply involves building, testing, and publishing the app. A simple example written in C# illustrates the process
- Framework-dependent deployment with third-party dependencies
  > Deploying a framework-dependent deployment with one or more third-party dependencies requires that those dependencies be available to your project
- Self-contained deployment without third-party dependencies
  > Deploying a self-contained deployment without third-party dependencies involves creating the project, modifying the csproj file, building, testing, and publishing the app.

</details>
