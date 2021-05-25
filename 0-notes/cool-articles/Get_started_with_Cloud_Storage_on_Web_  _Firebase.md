# Get started with Cloud Storage on Web  |  Firebase

Cloud Storage for Firebase lets you upload and share user generated content, such as images and video, which allows you to build rich media content into your apps. Your data is stored in a [Google Cloud Storage](chrome-extension://cloud.google.com/storage) bucket — an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage for Firebase lets you securely upload these files directly from mobile devices and web browsers, handling spotty networks with ease.

## Prerequisites

[Add and configure the Firebase SDK](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/web/setup) into your app.

## Create a default Cloud Storage bucket

1.  From the navigation pane of the [Firebase console](chrome-extension://console.firebase.google.com/), select **Storage**, then click **Get started**.
2.  Review the messaging about securing your Cloud Storage data using security rules. During development, consider [setting up your rules for public access](#set_up_public_access).
3.  Select a [location](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/projects/locations#types) for your default Cloud Storage bucket.

    - This location setting is your project's [_default Google Cloud Platform (GCP) resource location_](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/firestore/locations#default-cloud-location). Note that this location will be used for GCP services in your project that require a location setting, specifically, your [Cloud Firestore](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/firestore) database and your [App Engine](chrome-extension://cloud.google.com/appengine/docs/) app (which is required if you use Cloud Scheduler).
    - If you aren't able to select a location, then your project already has a default GCP resource location. It was set either during project creation or when setting up another service that requires a location setting.

    If you're on the Blaze plan, you can [create multiple buckets](#use_multiple_storage_buckets), each with its own [location](chrome-extension://cloud.google.com/storage/docs/bucket-locations).

4.  Click **Done**.

## Set up public access

Cloud Storage for Firebase provides a declarative rules language that allows you to define how your data should be structured, how it should be indexed, and when your data can be read from and written to. By default, read and write access to Cloud Storage is restricted so only authenticated users can read or write data. To get started without setting up [Authentication](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/auth), you can [configure your rules for public access](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/storage/security/rules-conditions#public).

This does make Cloud Storage open to anyone, even people not using your app, so be sure to restrict your Cloud Storage again when you set up authentication.

## Add your bucket URL to your app

If it's not included already, you need to add your Cloud Storage bucket URL to your [Firebase app's configuration object](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/projects/learn-more#config-files-objects).

1.  Go to your Storage dashboard in the [Firebase console](chrome-extension://console.firebase.google.com/).
2.  Click the **Files** tab, then look in the header of the file viewer.
3.  Copy the URL to your clipboard. It's usually in the form `project-id.appspot.com`.
4.  To your `firebaseConfig` object in your app, add the `storageBucket` attribute with your bucket URL:

    // Set the configuration for your app  
    // TODO: Replace with your app's config object  
    var firebaseConfig \= { apiKey: '<your-api-key>', authDomain: '<your-auth-domain>', databaseURL: '<your-database-url>', storageBucket: '<your-storage-bucket-url>'  
    };  
    firebase.initializeApp(firebaseConfig);// Get a reference to the storage service, which is used to create references in your storage bucket  
    var storage \= firebase.storage();

You're ready to start using Cloud Storage!

Next step? Learn how to [create a Cloud Storage reference](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/storage/web/create-reference).

## Advanced setup

There are a few use cases that require additional setup:

- Using Cloud Storage buckets in [multiple geographic regions](chrome-extension://cloud.google.com/storage/docs/bucket-locations)
- Using Cloud Storage buckets in [different storage classes](chrome-extension://cloud.google.com/storage/docs/storage-classes)
- Using Cloud Storage buckets with multiple authenticated users in the same app

The first use case is perfect if you have users across the world, and want to store their data near them. For instance, you can create buckets in the US, Europe, and Asia to store data for users in those regions to reduce latency.

The second use case is helpful if you have data with different access patterns. For instance: you can set up a multi-regional or regional bucket that stores pictures or other frequently accessed content, and a nearline or coldline bucket that stores user backups or other infrequently accessed content.

In either of these use cases, you'll want to [use multiple Cloud Storage buckets](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/storage/web/start#use_multiple_storage_buckets).

The third use case is useful if you're building an app, like Google Drive, which lets users have multiple logged in accounts (for instance, a personal account and a work account). You can [use a custom Firebase App](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/storage/web/start#use_a_custom_firebaseapp) instance to authenticate each additional account.

### Use multiple Cloud Storage buckets

If you want to use a Cloud Storage bucket other than the default provided above, or use multiple Cloud Storage buckets in a single app, you can create an instance of `firebase.storage` that references your custom bucket:

// Get a non-default Storage bucket  
var storage \= firebase.app().storage("gs://my-custom-bucket");

### Working with imported buckets

When importing an existing Cloud Storage bucket into Firebase, you'll have to grant Firebase the ability to access these files using the `gsutil` tool, included in the [Google Cloud SDK](chrome-extension://cloud.google.com/sdk/docs/):

gsutil \-m acl ch \-r \-u service\-<project number\>@gcp\-sa\-firebasestorage.iam.gserviceaccount.com gs://<your-cloud-storage-bucket>

You can find your project number as described in the [introduction to Firebase projects](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/projects/learn-more#project-number).

This does not affect newly created buckets, as those have the default access control set to allow Firebase. This is a temporary measure, and will be performed automatically in the future.

### Use a custom Firebase App

If you're building a more complicated app using a custom `firebase.app.App`, you can create an instance of `firebase.storage.Storage` initialized with that app:

// Get the default bucket from a custom firebase.app.App  
var storage \= customApp.storage();// Get a non-default bucket from a custom firebase.app.App  
var storage \= customApp.storage("gs://my-custom-bucket");

## Next steps

- Prepare to launch your app:

  - Set up [budget alerts](chrome-extension://cloud.google.com/billing/docs/how-to/budgets) for your project in the Google Cloud Console.
  - Monitor the [_Usage and billing_ dashboard](chrome-extension://console.firebase.google.com/project/_/usage) in the Firebase console to get an overall picture of your project's usage across multiple Firebase services. You can also visit the [Cloud Storage _Usage_ dashboard](chrome-extension://console.firebase.google.com/project/_/storage/usage) for more detailed usage information.
  - Review the [Firebase launch checklist](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/support/guides/launch-checklist).

[Source](https://firebase.google.com/docs/storage/web/start)
