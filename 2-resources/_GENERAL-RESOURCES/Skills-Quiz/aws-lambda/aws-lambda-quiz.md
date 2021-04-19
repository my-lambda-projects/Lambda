## AWS Lambda

#### Q1. How can you increase the CPU resources for your Lambda?
- [ ] `Increase the configured CPU value`
- [ ] `Increase the configured timeout value`
- [✅] `Increase the configured memory value`
- [ ] `Increase the configured concurrency value`

#### Q2. How can additional code or content can be provided for Lambda?
- [ ] `blocks`
- [✅] `layers`
- [ ] `aliases`
- [ ] `handlers`

#### Q3. How can Step Functions call Lambdas?
- [ ] `in sequence`
- [✅] `both of these answers`
- [ ] `neither of these answers`
- [ ] `in parallel`

#### Q4. Which AWS CLI command invokes a function?
- [ ] `aws lambda invoke --function ReturnBucketName outputfile.txt`
- [ ] `aws lambda execute --function-name ReturnBucketName outputfile.txt`
- [✅] `aws lambda invoke --function-name ReturnBucketName outputfile.txt`
- [ ] `aws lambda execute --function ReturnBucketName outputfile.txt`

#### Q5. What adds tracing capabilities to a Lambda?
- [ ] `AWS Trace`
- [ ] `CloudStack`
- [ ] `CloudTrail`
- [✅] `AWS X-Ray`

#### Q6. You need to build a continuous integration/deployment pipeline for a set of Lambdas. What should you do?
- [ ] `Create configuration files and deploy them using AWS CodePipeline.`
- [ ] `Create CloudFormation templates and deploy them using AWS CodeBuild`
- [ ] `Create configuration file and deploy using AWS CodeBuild`
- [✅] `Create CloudFormation templates and deploy them using AWS CodePipeline.`

#### Q7. What can you use to monitor function invocations?
- [ ] `API Gateway`
- [ ] `S3`
- [ ] `SAS`
- [✅] `CLoudTrail`

#### Q8. It is AWS best practice to enable Lambda logging by which of these methods.
- [ ] `Use S3 metrics and CloudWatch alarms`
- [ ] `Create custom metrics within your Lambda code.`
- [ ] `Create custom metrics within your CloudWatch code.`
- [✅] `Use Lambda metrics and CloudWatch alarms.`

#### Q9. What may be provided for environment variables?
- [ ] `an SSL certificate`
- [ ] `a bitmask`
- [✅] `an AWS KMS key`
- [ ] `an HTTP protocol `

#### Q10. Lambda allows for running of what other things?
- [ ] `binaries.`
- [✅] `all of these answers`
- [ ] `executables`
- [ ] `Shell scripts`

#### Q11. In what style must you write Lambda code?
- [ ] `MVC`
- [ ] `virtual`
- [✅] `stateless`
- [ ] `protocol`

#### Q12. How can a developer provide Lambda code?
- [ ] `by uploading a .zip file`
- [✅] `all of these answers`
- [ ] `by editing inline`
- [ ] `from an S3 bucket`

#### Q13. You are performance-testing your Lambda to verify that you set the memory size adequately. Where do you verify the exectuon overhead?
- [ ] `CLoudWatch logs`
- [ ] `DynamoDB logs`
- [ ] `S3 logs`
- [✅] `Lambda logs.`

#### Q14. What facilitates continuous delivery of Lambdas?
- [ ] `CodeStack`
- [ ] `ElasticStack`
- [ ] `Mobile Hub`
- [✅] `CodeDeploy`

#### Q15. How are computing resources allocated to Lambdas?
- [✅] `proportionally`
- [ ] `equally`
- [ ] `periodically`
- [ ] `daily`

#### Q16. You can restrict the scope of a user's permissions by specifying which two items in an IAM policy?
- [ ] `resources and users`
- [✅] `resources and conditions`
- [ ] `events and users`
- [ ] `events and conditions`

#### Q17. What does Lambda logging include?
- [✅] `logging streams`
- [ ] `rotating streams`
- [ ] `logging events`
- [ ] `advancing log groups`

#### Q18. What can AWS Amplify NOT do for a Lambda?
- [ ] `create a Lambda`
- [✅] `be an event source`
- [ ] `assign an IAM role`
- [ ] `delete a Lambda`

#### Q19. How do you author a Lambda in a programming language that AWS does not support?
- [ ] `Create a Lambda function with a custom runtime and reference the function in your Lambda`
- [✅] `Create a Lambda layer with a custom runtime and reference the layer in your lambda`
- [ ] `You cannot use Lambda in this situation`
- [ ] `Create a Lambda function with a custom runtime`

#### Q20. What are listed downstream resources based on?
- [ ] `the execution policy`
- [✅] `the Lambda configuration`
- [ ] `the Lambda nodes`
- [ ] `the IAM user`

#### Q21. Which is an equivalent and valid tag for a pair of Lambdas?
- [ ] `department:Sales,department:Sales`
- [✅] `department:Sales,department:sales`
- [ ] `aws:demo;aws:demo`
- [ ] `aws:demo;aws:DEMO`

#### Q22. Outbound connections from Lambdas must be `**\_\_**`.
- [ ] `neither of these answers`
- [ ] `UDP/IP`
- [ ] `TCP/IP`
- [✅] `both of these answers`

#### Q23. How are CloudWatch actions configured?
- [ ] `automatically`
- [ ] `none of these answers`
- [✅] `manually`
- [ ] `ad hoc`

#### Q24. You are testing your stream-based application and the associated Lambda. AWS best practice advises you to test by varying what?
- [ ] `stream and record sizes`
- [ ] `stream and shard sizes`
- [✅] `batch and record sizes`
- [ ] `batch and shard sizes`

#### Q25. You need to make your Lambda available to services in multiple VPCs. What do you do?
- [ ] `Place each subnet in a VPC. Associate all subnets to your Lambda.`
- [ ] `Place all subnets in a VPC. Associate all subnets to your Lambda.`
- [ ] `Configure your Lambda to be available to multiple VPCs.`
- [✅] `Configure all application VPCs to be peered.`

#### Q26. How is the cost associated with Lambda function calculated?
- [ ] `number of function calls`
- [ ] `amount of code run`
- [✅] `compute time`
- [ ] `amount of infrastructure used`

#### Q27. What is the fastest way to get started with Lambda?
- [ ] `Author a Lambda from scratch.`
- [✅] `Use a blueprint.`
- [ ] `Use a .zip deployment package.`
- [ ] `Use the serverless app repository.`

#### Q28. Where is the disk space allocated for Lambda functions?
- [✅] `/tmp`
- [ ] `/default`
- [ ] `/temp`
- [ ] `/ds`

#### Q29. How do you stop a running Lambda that is stuck in a recursive loop?
- [ ] `Delete the function.`
- [✅] `Set the function concurrent execution limit to 0 while you update the code.`
- [ ] `Reset the function.`
- [ ] `Set the function concurrent execution limit to 100 while you update the code.`

#### Q30. What is AWS best practice for Lambda configuration?
- [✅] `Overprovision memory to run your functions faster and reduce your costs. Do not overprovision your function timeout settings.`
- [ ] `Overprovision memory and your function timeout settings to run your functions faster and reduce your costs.`
- [ ] `Do not overprovision memory. Overprovision your function timeout settings to run your functions faster and reduce costs.`
- [ ] `Do not overprovision memory. Do not overprovision your function timeout settings to run your functions faster and reduce costs.`

#### Q31. Basic Lambda permissions include permissions for what?
- [ ] `removing log groups`
- [ ] `none of these answers`
- [ ] `creating log groups`
- [✅] `updating log groups`

#### Q32. How are environment variables stored?
- [ ] `DynamoDB tables`
- [✅] `key-value pairs`
- [ ] `S3 buckets`
- [ ] `none of these answers`

#### Q33. You need to use a Lambda to provide backend logic to your website. Which service do you use to make your Lambda available to your website?
- [ ] `S3`
- [✅] `API Gateway`
- [ ] `X-Ray`
- [ ] `DynamoDB`

#### Q34. How can additional code or content be provided for your Lambda?
- [ ] `aliases`
- [ ] `blocks`
- [ ] `handlers`
- [✅] `layers`

#### Q35. Lambdas allow for running of what other things?
- [ ] `binaries`
- [ ] `executables`
- [✅] `all of these answers`
- [ ] `shell scripts`

#### Q37. You are creating a Lambda to trigger on change to files in an S3 bucket. Where should you put the bucket name?
- [ ] `in the Lambda function code`
- [✅] `in a Lambda environment variable`
- [ ] `in the Lambda tags`
- [ ] `in another S3 bucket`

#### Q38. What action is needed before you can test a Lambda?
- [ ] `Deploy the Lambda.`
- [ ] `Export the function`
- [ ] `none of these answers`
- [✅] `Configure a test event.`

#### Q39. What kind of packages can you use with Node.js for Lambdas?
- [ ] `Fleece`
- [✅] `NPM`
- [ ] `none of these answers`
- [ ] `Pod`

#### Q41. Lambdas are monitored by default using which service?
- [ ] `CloudTrail`
- [✅] `CloudWatch`
- [ ] `CloudFormation`
- [ ] `LogWatch`

#### Q42. What can trigger a Lambda function execution?
- [ ] `a table definition`
- [ ] `queue isolation`
- [ ] `STS Write`
- [✅] `an SNS topic`

#### Q43. You need to set an S3 event trigger on your Lambda to respond when data is added to your bucket from another S3 bucket. Which event type do you configure?
- [ ] `POST`
- [ ] `"All object create events"`
- [✅] `PUT`
- [ ] `COPY`

#### Q44. To make Lambdas more testable, it is AWS best practice to separate which of these?
- [ ] `Lambda configuration from logging code`
- [ ] `Lambda handler from logging code`
- [✅] `Lambda handler from core logic`
- [ ] `Lambda configuration from core logic`
