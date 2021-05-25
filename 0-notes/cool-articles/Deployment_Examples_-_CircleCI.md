# Deployment Examples - CircleCI

> The documentation site for CircleCI, the fastest testing platform on the Internet.

This document presents example config for a variety of popular deployment targets. Many of the examples use orbs. CircleCI and partners have developed a catalogue of orbs that enable you to quickly deploy applications with minimal config. Details of all orbs can be found in the [CircleCI Orbs Registry](https://circleci.com/developer/orbs).

- [AWS](#aws)
- [Azure container registry](#azure-container-registry)
- [Capistrano](#capistrano)
- [Cloud Foundry](#cloud-foundry)
- [Firebase](#firebase)
- [Google Cloud Platform](#google-cloud-platform)
- [Heroku](#heroku)
- [NPM](#npm)
- [SSH](#ssh)

#### Notes on examples[](#notes-on-examples)

- In order to use orbs you must use `version 2.1` config.
- We have indicated where you need to specify a [docker image for your job](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/optimizations/#docker-image-choice) with `<docker-image-name-tag>`.
- If you wish to remain using `version 2.0` config, or are using a self-hosted installation of CircleCI Server, the examples shown here are still relevant because you can view the expanded orb source within the [Orbs Registry](https://circleci.com/developer/orbs) to see how the jobs are built.
- In the examples on this page that use orbs, you will notice that the orbs are versioned with tags, for example, `aws-s3: circleci/aws-s3@x.y.z`. If you copy paste any examples you will need to edit `x.y.z` to specify a version. You can find the available versions listed on the individual orb pages in the [CircleCI Orbs Registry](https://circleci.com/developer/orbs).
- Any items in these examples that appear within `< >` should be replaced with your own parameters.

## AWS[](#aws)

This section covers deployment to S3, ECR/ECS (Elastic Container Registry/Elastic Container Service), as well as application deployment using AWS Code Deploy.

For more detailed information about the AWS S3, ECS, ECR, and CodeDeploy orbs, refer to the following Orb registry pages:

- [AWS S3](https://circleci.com/developer/orbs/orb/circleci/aws-s3)
- [AWS ECR](https://circleci.com/developer/orbs/orb/circleci/aws-ecr)
- [AWS ECS](https://circleci.com/developer/orbs/orb/circleci/aws-ecs)
- [AWS CodeDeploy](https://circleci.com/developer/orbs/orb/circleci/aws-code-deploy)

### Deploy to S3[](#deploy-to-s3)

#### Using the AWS S3 Orb[](#using-the-aws-s3-orb)

For detailed information about the AWS S3 orb, refer to the [CircleCI AWS S3 Orb Reference](https://circleci.com/developer/orbs/orb/circleci/aws-s3) page. This section details the use of the AWS S3 orb and `version: 2.1` config for simple deployment, below we will look at the same example without orbs and using using `version: 2` config.

1.  For security best practice, create a new [IAM user](https://aws.amazon.com/iam/details/manage-users/) specifically for CircleCI.
2.  Add your [AWS access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) to CircleCI – store your Access Key ID in a variable called `AWS_ACCESS_KEY_ID` and your Secret Access Key in a variable called `AWS_SECRET_ACCESS_KEY`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).
3.  Use the orb’s `sync` command to deploy. Note the use of workflows to deploy only if the `build` job passes and the current branch is `master`.

         version: 2.1

         orbs:
           aws-s3: circleci/aws-s3@x.y.z

         workflows:
           version: 2
           build-deploy:
             jobs:
               - build
               - deploy:
                   requires:
                     - build
                   filters:
                     branches:
                       only: master

         jobs:
           build:
             docker:
               - image: <image-name-and-tag>
                 auth:
                   username: mydockerhub-user
                   password: $DOCKERHUB_PASSWORD
           ...
           deploy:
             docker:
               - image: <image-name-and-tag>
                 auth:
                   username: mydockerhub-user
                   password: $DOCKERHUB_PASSWORD
           steps:
               - checkout
               - aws-s3/sync:
                   from: bucket
                   to: 's3://my-s3-bucket-name/prefix'
                   arguments: |
                     --acl public-read \
                     --cache-control "max-age=86400"
                   overwrite: true

#### Deploy to AWS S3 with 2.0 config[](#deploy-to-aws-s3-with-20-config)

1.  For security best practice, create a new [IAM user](https://aws.amazon.com/iam/details/manage-users/) specifically for CircleCI.
2.  Add your [AWS access keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) to CircleCI – store your Access Key ID in a variable called `AWS_ACCESS_KEY_ID` and your Secret Access Key in a variable called `AWS_SECRET_ACCESS_KEY`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).
3.  In your `.circleci/config.yml` file, create a new `deploy` job. In the `deploy` job, add a step to install `awscli` in your primary container.
4.  Install `awscli` in your primary container by following the [AWS CLI documentation](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).
5.  [Use the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-using.html) to deploy your application to S3 or perform other AWS operations. Note the use of workflows to deploy only if the build job passes and the current branch is `master`.

         version: 2

         workflows:
           version: 2
           build-deploy:
             jobs:
               - build
               - deploy:
                   requires:
                     - build
                   filters:
                     branches:
                       only: master

         jobs:
           build:
             docker:
               - image: <docker-image-name-tag>
                 auth:
                   username: mydockerhub-user
                   password: $DOCKERHUB_PASSWORD
           ...
           deploy:
             docker:
               - image: <docker-image-name-tag>
                 auth:
                   username: mydockerhub-user
                   password: $DOCKERHUB_PASSWORD
             steps:
               - run:
                   name: Install awscli
                   command: sudo pip install awscli
               - run:
                   name: Deploy to S3
                   command: aws s3 sync <path/to/bucket> <s3://location/in/S3-to-deploy-to>

For a complete list of AWS CLI commands and options, see the [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/).

### Deploy Docker image to AWS ECR[](#deploy-docker-image-to-aws-ecr)

The AWS ECR orb enables you to log into AWS, build, and then push a Docker image to AWS Elastic Container Registry with minimal config. See the [orb registry page](https://circleci.com/developer/orbs/orb/circleci/aws-ecr) for a full list of parameters, jobs, commands and options.

Using the `build-and-push-image` job, as shown below requires the following env vars to be set: `AWS_ECR_ACCOUNT_URL`, `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `AWS_DEFAULT_REGION`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).

    version: 2.1

    orbs:
      aws-ecr: circleci/aws-ecr@x.y.z

    workflows:
      build_and_push_image:
        jobs:
          - aws-ecr/build-and-push-image:
              dockerfile: <my-Docker-file>
              path: <path-to-my-Docker-file>
              profile-name: <my-profile-name>
              repo: <my-ECR-repo>
              tag: <my-ECR-repo-tag>

### Update an AWS ECS instance[](#update-an-aws-ecs-instance)

Use the [AWS ECR](https://circleci.com/developer/orbs/orb/circleci/aws-ecr) and [ECS](https://circleci.com/developer/orbs/orb/circleci/aws-ecs) orbs to easily update an existing AWS ECS instance.

Using the `build-and-push-image` job, as shown below requires the following env vars to be set: `AWS_ECR_ACCOUNT_URL`, `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `AWS_DEFAULT_REGION`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).

    version: 2.1

    orbs:
      aws-ecr: circleci/aws-ecr@x.y.z
      aws-ecs: circleci/aws-ecs@x.y.z

    workflows:
      build-and-deploy:
        jobs:
          - aws-ecr/build-and-push-image:
              dockerfile: <my-Docker-file>
              path: <path-to-my-Docker-file>
              profile-name: <my-profile-name>
              repo: ${MY_APP_PREFIX}
              tag: '${CIRCLE_SHA1}'
          - aws-ecs/deploy-service-update:
              requires:
                - aws-ecr/build-and-push-image
              family: '${MY_APP_PREFIX}-service'
              cluster-name: '${MY_APP_PREFIX}-cluster'
              container-image-name-updates: 'container=${MY_APP_PREFIX}-service,tag=${CIRCLE_SHA1}'

### AWS CodeDeploy[](#aws-codedeploy)

The [AWS CodeDeploy](https://circleci.com/developer/orbs/orb/circleci/aws-code-deploy) orb enables you to run deployments through AWS CodeDeploy.

    version: 2.1 # use 2.1 to make use of orbs and pipelines

    orbs:
      aws-code-deploy: circleci/aws-code-deploy@x.y.z

    workflows:
      deploy_application:
        jobs:
          - aws-code-deploy/deploy:
              application-name: <my-application>
              deployment-group: <my-deployment-group>
              service-role-arn: <my-deployment-group-role-ARN>
              bundle-bucket: <my-application-S3-bucket>
              bundle-key: <my-S3-bucket-key>

## Azure container registry[](#azure-container-registry)

This section describes a simple deployment to the Azure container registry (ACR) using the CircleCI ACR orb and `version 2.1` configuration.

For detailed information about the Azure ACR orb, including all options, refer to the [CircleCI ACR Orb Reference](https://circleci.com/developer/orbs/orb/circleci/azure-acr) page.

1.  Whether your require a user or service principal login, you will need to provide environment variables for username, password and tennent to CircleCI. For user logins use env var names as follows: `AZURE_USERNAME`, `AZURE_PASSWORD` and `AZURE_TENANT`. For service principal logins use: `AZURE_SP`, `AZURE_SP_PASSWORD` and `AZURE_SP_TENANT`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).
2.  Use the orb’s `build-and-push-image` job to build your image and deploy it to ACR. Note the use of workflows to deploy only if the current branch is `master`.

         version: 2.1 # Use version 2.1 config to get access to orbs, pipelines

         orbs:
           azure-acr: circleci/azure-acr@x.y.z

         workflows:
           build-deploy:
             jobs:
               - azure/build-and-push-image:
                   dockerfile: <name-of-your-dockerfile>
                   path: <path-to-your-dockerfile>
                   login-server-name: <your-login-server-name>
                   registry-name: <your-ACR-registry-name>
                   repo: <URI-to-your-login-server-name>
                   filters:
                     branches:
                       only: master

If pushing to your repo is required, see the [Adding Read/Write Deployment Keys to GitHub or Bitbucket](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/gh-bb-integration/) section of the GitHub and Bitbucket Integration document for instructions. Then, configure the Azure Web App to use your production branch.

## Capistrano[](#capistrano)

Once your project is set up to use Capistrano, you can run [deployment commands](https://github.com/capistrano/capistrano/blob/master/README.md#command-line-usage) within your CircleCI job steps as required.

    version: 2

    workflows:
      version: 2
      build-deploy:
        jobs:
          - build-job
          - deploy-job:
              requires:
                - build-job
              filters:
                branches:
                  only: master

    jobs:

      deploy-job:
        docker:
          - image: <docker-image-name-tag>
            auth:
              username: mydockerhub-user
              password: $DOCKERHUB_PASSWORD
        working_directory: ~/repo
        steps:
          - checkout
          - run:
              name: Bundle Install
              command: bundle check || bundle install
          - run:
              name: Deploy if tests pass and branch is Master
              command: bundle exec cap production deploy

## Cloud Foundry[](#cloud-foundry)

CircleCI has developed a CloudFoundry Orb that you can use to simplify your configuration workflows. The Cloud Foundry page in the [Orbs Registry](https://circleci.com/developer/orbs/orb/circleci/cloudfoundry) contains several different examples of how you can perform tasks with CloudFoundry, including the example below that shows how you can build and run blue green deployment in a single job - in this example `domain` will automatically be prefixed with `dark` and `live` for two subdomains to be specified. Validation steps would also need to be provided to allow the live deployment to go ahead.

    version: 2.1

    orbs:
      cloudfoundry: circleci/cloudfoundry@x.y.z

    workflows:
      build_deploy:
        jobs:
          - cloudfoundry/blue_green:
              appname: <your-app-name>
              build_steps:
                - run: echo 'your build steps'
                - run: echo 'you can have more, too'
                - run: echo 'or provide a workspace'
              context: your-context
              domain: your-domain
              manifest: null
              org: your-org
              package: null
              space: your-space
              validate_steps:

If you would like more detailed information about various CloudFoundry orb elements that you can use in your configuration workflows, refer to the [CloudFoundry Orb](https://circleci.com/developer/orbs/orb/circleci/cloudfoundry) page in the [CircleCI Orbs Registry](https://circleci.com/developer/orbs).

### Deploy to Cloud Foundry with 2.0 config[](#deploy-to-cloud-foundry-with-20-config)

Cloud Foundry deployments require the Cloud Foundry CLI. Be sure to match the architecture to your Docker image (the commands below assume you are using a Debian-based image). This example pattern implements “Blue-Green” deployments using Cloud Foundry’s map-route/unmap-route commands, which is an optional feature above and beyond a basic `cf push`.

#### Install the CLI[](#install-the-cli)

          - run:
              name: Setup CF CLI
              command: |
                curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&source=github'
                sudo dpkg -i cf-cli_amd64.deb
                cf -v
                cf api https://api.run.pivotal.io
                cf auth "$CF_USER" "$CF_PASSWORD"
                cf target -o "$CF_ORG" -s "$CF_SPACE"

#### Dark deployment[](#dark-deployment)

This is the first step in a [Blue-Green](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html) deployment, pushing the application to non-production routes.

          - run:
              name: CF Deploy
              command: |

                cf push --no-start <app-name-dark> -f manifest.yml -p application.jar -n dark -d <example.com>

                cf set-env <app-name-dark> circle_build_num ${CIRCLE_BUILD_NUM}
                cf set-env <app-name-dark> circle_commit ${CIRCLE_SHA1}
                cf set-env <app-name-dark> circle_workflow_guid ${CIRCLE_WORKFLOW_ID}
                cf set-env <app-name-dark> circle_user ${CIRCLE_PROJECT_USERNAME}
                cf set-env <app-name-dark> circle_repo ${CIRCLE_PROJECT_REPONAME}

                cf start <app-name-dark>

                cf unmap-route <app-name> <example.com> -n dark || echo "Dark Route Already exclusive"

#### Live deployment[](#live-deployment)

Until now, the previously pushed “app-name” has not changed. The final step is to route the production URL to our dark application, stop traffic to the previous version, and rename the applications.

          - run:
              name: Re-route live Domain to latest
              command: |
                # Send "real" url to new version
                cf map-route app-name-dark example.com -n www
                # Stop sending traffic to previous version
                cf unmap-route app-name example.com -n www
                # stop previous version
                cf stop app-name
                # delete previous version
                cf delete app-name -f
                # Switch name of "dark" version to claim correct name
                cf rename app-name-dark app-name

#### Manual approval[](#manual-approval)

For additional control or validation, you can add a manual “hold” step between the dark and live steps as shown in the sample workflow below.

    workflows:
      version: 2

      build-deploy:
        jobs:
          - test
          - dark-deploy:
              requires:
                - test
              filters:
                branches:
                  only: master
          - hold:
              type: approval
              requires:
                - dark-deploy
              filters:
                branches:
                  only: master
          - live-deploy:
              requires:
                - hold
              filters:
                branches:
                  only: master

## Firebase[](#firebase)

In order to deploy to Firebase you will need to add `firebase-tools` to your project’s devDependencies since attempting to install firebase-tools globally in CircleCI will not work.

Generate a Firebase CLI token using the following command:

Add the generated token to the CircleCI project’s environment variables as `$FIREBASE_DEPLOY_TOKEN`. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).

The following example shows how you can add a deploy to Firebase job to your project’s `config.yml` file. This snippet assumes you already have a job to build your application, called `build-job`, and introduces a deployment workflow that only runs the deployment job once the build job has completed **and** you’re on the master branch.

      deploy-job:
        docker:
          - image: <docker-image-name-tag>
            auth:
              username: mydockerhub-user
              password: $DOCKERHUB_PASSWORD
        working_directory: /tmp/my-project
        steps:
          - run:
              name: Deploy Master to Firebase
              command: ./node_modules/.bin/firebase deploy --token=$FIREBASE_DEPLOY_TOKEN

    workflows:
      version: 2
      deploy:
        jobs:
          - build-job
          - deploy-job:
              requires:
                - build-job
              filters:
                branches:
                  only: master

If using Google Cloud Functions with Firebase, instruct CircleCI to navigate to the folder where the Google Cloud Functions are held (in this case ‘functions’) and run `npm install` by adding the below to `config.yml`:

          - run: cd functions && npm install

## Google Cloud Platform[](#google-cloud-platform)

Before deploying to Google Cloud Platform, you will need to authorize the Google Cloud SDK and set default configuration settings. Refer to the [Authorizing the Google Cloud SDK](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/google-auth/) document for full details.

### Using Google Cloud orbs[](#using-google-cloud-orbs)

There are several Google Cloud orbs available in the [CircleCI Orbs Registry](https://circleci.com/developer/orbs) that you can use to simplify your deployments. For example, the [Google Kubernetes Engine (GKE) orb](https://circleci.com/developer/orbs/orb/circleci/gcp-gke#usage-publish-and-rollout-image) has a pre-built job to build and publish a Docker image, and roll the image out to a GKE cluster, as follows:

    version: 2.1

    orbs:
      gke: circleci/gcp-gke@x.y.z

    workflows:
      main:
        jobs:
          - gke/publish-and-rollout-image:
              cluster: <your-GKE-cluster>
              container: <your-K8-container-name>
              deployment: <your-K8-deployment-name>
              image: <your-image>
              tag: $CIRCLE_SHA1

### Deployment to GKE with 2.0 config[](#deployment-to-gke-with-20-config)

In the following example, if the `build-job` passes and the current branch is `master`, CircleCI runs the deployment job.

    version: 2

    jobs:

      deploy-job:
        docker:
          - image: <docker-image-name-tag>
            auth:
              username: mydockerhub-user
              password: $DOCKERHUB_PASSWORD
        working_directory: /tmp/my-project
        steps:
          - run:
              name: Deploy Master to GKE
              command: |
              # Push Docker image to registry, update K8s deployment to use new image - `gcloud` command handles authentication and push all at once
              sudo /opt/google-cloud-sdk/bin/gcloud docker push us.gcr.io/${PROJECT_NAME}/hello
              # The new image is now available in GCR for the GCP infrastructure to access, next, change permissions:
              sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
              # Use `kubectl` to find the line that specifies the image to use for our container, replace with image tag of the new image.
              # The K8s deployment intelligently upgrades the cluster by shutting down old containers and starting up-to-date ones.
              kubectl patch deployment docker-hello-google -p '{"spec":{"template":{"spec":{"containers":[{"name":"docker-hello-google","image":"us.gcr.io/circle-ctl-test/hello:'"$CIRCLE_SHA1"'"}]}}}}'

    workflows:
      version: 2
      build-deploy:
        jobs:
          - build-job
          - deploy-job:
              requires:
                - build-job
              filters:
                branches:
                  only: master

For another example, see our [CircleCI Google Cloud deployment example project](https://github.com/CircleCI-Public/circleci-demo-k8s-gcp-hello-app).

## Heroku[](#heroku)

[Heroku](https://www.heroku.com/) is a popular platform for hosting applications in the cloud. To configure CircleCI to deploy your application to Heroku, follow the steps below.

### Deploy with the Heroku orb[](#deploy-with-the-heroku-orb)

1.  Create a Heroku account and follow the [Getting Started on Heroku](https://devcenter.heroku.com/start) documentation to set up a project in your chosen language.
2.  Add the name of your Heroku application and your Heroku API key as environment variables as `HEROKU_APP_NAME` and `HEROKU_API_KEY`, respectively. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).
3.  Use the [Heroku orb](https://circleci.com/developer/orbs/orb/circleci/heroku) to keep your config simple. The `deploy-via-git` installs the Heroku CLI in the primary container, runs any pre deployment steps you define, deploys your application, then runs any post-deployment steps you define. See the Heroku orb page in the [orbs registry](https://circleci.com/developer/orbs/orb/circleci/heroku) for full details of parameters and options:

         version: 2.1

         orbs:
           heroku: circleci/heroku@x.y

         workflows:
           heroku_deploy:
             jobs:
               - build
               - heroku/deploy-via-git:
                   requires:
                     - build
                   filters:
                     branches:
                       only: master

For more detailed information about these Heroku orbs, refer to the [CircleCI Heroku Orb](https://circleci.com/developer/orbs/orb/circleci/heroku).

### Heroku deployment with 2.0 config[](#heroku-deployment-with-20-config)

1.  Create a Heroku account and follow the [Getting Started on Heroku](https://devcenter.heroku.com/start) documentation to set up a project in your chosen language.
2.  Add the name of your Heroku application and your Heroku API key as environment variables as `HEROKU_APP_NAME` and `HEROKU_API_KEY`, respectively. To take advantage of [secrets masking](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/contexts/#secrets-masking), it is best practice to set environment variables at the [project level](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) or within a [context](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-context).
3.  In your `.circleci/config.yml`, create a deployment job and add an [executor type](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/executor-types/).
4.  Add steps to your deployment job to checkout and deploy your code. You can specify which branch you would like to deploy, in this example we specify the master branch and deploy using a `git push` command.

         version: 2

         jobs:
           build:
             ...
           deploy:
             docker:
               - image: <docker-image-name-tag>
                 auth:
                   username: mydockerhub-user
                   password: $DOCKERHUB_PASSWORD
             steps:
               - checkout
               - run:
                   name: Deploy Master to Heroku
                   command: |
                     git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master

         workflows:
           version: 2
           build-deploy:
             jobs:
               - build
               - deploy:
                   requires:
                     - build
                   filters:
                     branches:
                       only: master

**Note:** Heroku provides the option “Wait for CI to pass before deploy” under deploy / automatic deploys. See the [Heroku documentation](https://devcenter.heroku.com/articles/github-integration#automatic-deploys) for details.

## NPM[](#npm)

Setting up CircleCI to publish packages to the npm registry makes it easy for project collaborators to release new package versions in a consistent and predictable way.

1.  Obtain the npm authToken for the account that you wish to use to publish the package.

    You can do that by logging in to npm (`npm login`). This will save the authToken to the `~/.npmrc` file. Look for the following line:

        //registry.npmjs.org/:_authToken=00000000-0000-0000-0000-000000000000

    In this case, the authToken is `00000000-0000-0000-0000-000000000000`.

2.  Go to your [project settings](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/1.0/environment-variables/#setting-environment-variables-for-all-commands-without-adding-them-to-git), and set the `NPM_TOKEN` variable to the obtained authToken.
3.  Configure CircleCI to add the authToken to `~/.npmrc`, run `npm publish` and only for versioned tags:

        version: 2

        jobs:
          publish:
            docker:
              - image: <docker-image-name-tag>
                auth:
                  username: mydockerhub-user
                  password: $DOCKERHUB_PASSWORD
            steps:
              - checkout
              - run:
                  name: Publish to NPM
                  command: |
                    npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
                    npm publish

        workflows:
          version: 2
          tagged-build:
            jobs:
              - publish:
                  filters:
                    tags:
                      only: /v[0-9]+(\.[0-9]+)*/

4.  When you want to publish a new version to npm, run `npm version` to create a new version:

    This will update the `package.json` file and creates a tagged Git commit. Next, push the commit with tags:

5.  If tests passed, CircleCI will publish the package to npm automatically.

## SSH[](#ssh)

To configure CircleCI to deploy your application over SSH, follow the steps below.

1.  Add the SSH key for the server to which you’re deploying. For instructions, see the [Adding an SSH Key to CircleCI](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/add-ssh-key/) document.
2.  Add the SSH username and SSH hostname of your build VM as environment variables. For instructions, see the [Adding Project Environment Variables](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) document. In this example, these variables are defined as `SSH_USER` and `SSH_HOST`, respectively.
3.  In your `.circleci/config.yml`, create a `deploy` job and add a command to deploy the master branch.

         version: 2

         jobs:
           build:

           deploy:
             machine:
               enabled: true
             steps:
               - run:
                   name: Deploy Over SSH
                   command: |
                     ssh $SSH_USER@$SSH_HOST "<remote deploy command>"

         workflows:
           version: 2
           build-and-deploy:
             jobs:
               - build
               - deploy:
                   requires:
                     - build
                   filters:
                     branches:
                       only: master

[Source](https://circleci.com/docs/2.0/deployment-examples/index.html)
