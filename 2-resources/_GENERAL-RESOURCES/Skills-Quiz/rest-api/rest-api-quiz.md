## REST APIs

#### Q1. What type of relationship is defined as one resource existing only if another parent resource exist-for example, pages in a book?
- [✅] `Partial`
- [ ] `dependent`
- [ ] `associative`
- [ ] `linked`

#### Q2. Which URL pattern s recommended when working with one resource and a collection of resources?
- [ ] `/companies/{id} and/company`
- [ ] `/company/{id} and/companies`
- [✅] `/companies/{id} and/companies`
- [ ] `/company/{id} and/company`

#### Q3. When dealing with JSON web Tokens (JWTs), what is a claim?
- [✅] `data in the token`
- [ ] `Ownership`
- [ ] `a permission`
- [ ] `and integer`

#### Q4. Which REST contraint specifies that knowledge and understanding obtained from one component of the API should be generally applicable elsewhere in the API?
- [✅] `Uniform Interface`
- [ ] `Client-Server`
- [ ] `Stateless`
- [ ] `Chacheable`

#### Q5. What would you enable to allow a browser on another site to make an AJAX request to your API?
- [ ] `HTTP`
- [ ] `REST`
- [ ] `OPTIONS`
- [✅] `CORS`

#### Q6. APIs commonly use webhooks to `**\*\*\*\***\_\_\_\_**\*\*\*\***`.
- [✅] `notify other systems of an event`
- [ ] `catch error faster`
- [ ] `improve error logging`
- [ ] `log additional data`

#### Q7. What is the underlying goal of all APIs?
- [ ] `to add new technologies to an organization's infrastructure.`
- [✅] `to share features and functionality with other system.`
- [ ] `to move infrastructure to the cloud.`
- [ ] `to appease the latest digital transformation effort.`

#### Q8. Which is a common command-line tool for using or exploring an API?
- [ ] `bash`
- [✅] `curl`
- [ ] `ssh`
- [ ] `powerShell`

#### Q9. What is the modern specification for describing an API?
- [✅] `OpenAPI (Swagger)`
- [ ] `WADL`
- [ ] `WSDL`
- [ ] `OAuth`

#### Q10. Which HTTP verb is normally used to update or create a resource in an API?
- [ ] `SUBMIT`
- [ ] `WRITE`
- [✅] `POST`
- [ ] `CREATE`

#### Q11. What is one benefit of server-side caching in APIs?
- [ ] `Mobile app work better.`
- [ ] `It improves uptime.`
- [ ] `It offers better security.`
- [✅] `It reduce load on servers.`

#### Q12. Your API resource does no allow deletion, and a client application attempted to delete the resource. What HTTP respose code should you return?
- [ ] `409 Conflict`
- [ ] `400 Bad Request`
- [ ] `406 Not Acceptable`
- [✅] `405 Method Not Allowed`

#### Q13. What is OpenID Connect?
- [✅] `an identify layer on top of OAuth 2.0`
- [ ] `the new name for SAML 3.0`
- [ ] `a modern replacement for API keys`
- [ ] `an SSO competitor for OAuth 2.0`

#### Q14. What is one benefit of GraphQl over REST approaches?
- [✅] `flexible querying/responses`
- [ ] `more stable APIs`
- [ ] `compatible with more gateways`
- [ ] `more secure by default`

#### Q15. Which REST constraint specifies that there should be no shared context?
- [✅] `Stateless`
- [ ] `Client-Server`
- [ ] `Uniform Interface`
- [ ] `Cacheable`

#### Q16. What purpose does a User-Agent serve?
- [ ] `It identifies the user ID.`
- [✅] `It identifies the client application or SDK.`
- [ ] `It identifies if the API should expect a user authentication.`
- [ ] `It identifies if the API should accept microservice traffic.`

#### Q17. If you were to add versioning by using the Accept and Content-Type header, what would be the correct format of the header value?
- [ ] `application/json`
- [ ] `application/json_version2`
- [✅] `text/html`
- [ ] `application/vnd.myapp.v2+json`

#### Q18. What is one benefit that OAuth provides over an API key approach?
- [ ] `A token is encrypted.`
- [ ] `A token is encoded.`
- [✅] `A token is scoped to the use case.`
- [ ] `A token can be shared between systems.`

#### Q19. The ability to execute the same API request over and over again without changing the resource's state is an example of **\_**.
- [ ] `stateless architecture`
- [✅] `idempotency`
- [ ] `a uniform interface`
- [ ] `cacheability`

#### Q20. What component can you use to wrap legacy architectures or protocols into a REST interface for easier consumption and integration?
- [✅] `API proxy`
- [ ] `API gateway`
- [ ] `OpenAPI`
- [ ] `OAuth authorization server`

#### Q21. What protection does a JSON Web Token (JWT) offer to mitigate tampering with its contents?
- [ ] `transport over SSL`
- [ ] `encrypted payload`
- [✅] `a signature`
- [ ] `encoded payload`

#### Q22. What OAuth term is used to represent permissions?
- [ ] `token`
- [✅] `scope`
- [ ] `claim`
- [ ] `back channel`

#### Q23. What additional type of token would you see when using OpenID Connect?
- [✅] `ID token`
- [ ] `refresh token`
- [ ] `access token`
- [ ] `auth code token`

#### Q24. What should you add to a Cache-Control response header to specify that a response should not be stored in an intermediary cache?
- [ ] `no-proxy`
- [ ] `client-only`
- [ ] `restricted`
- [✅] `private` 
  [reference](https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies)

#### Q25. Which OAuth grant type can support a refresh token?
- [ ] `Authorization Code Grant`
- [✅] `Client Credentials Grant`
- [ ] `Implicit Grant`
- [ ] `Authentication Grant`

#### Q26. Using OAuth, what scope would you request for write access to the API?
- [ ] `It varies from API to API.`
- [✅] `admin`
- [ ] `write`
- [ ] `read-write`

#### Q27. Which property would you use to include subresources directly into a JSON document?
- [ ] `\_embedded`
- [ ] `resources`
- [✅] `subresources`
- [ ] `\_links`

#### Q28. What is the best way to track SDK and version usage?
- [✅] `tracking downloads`
- [ ] `Accept headers`
- [ ] `user agents`
- [ ] `polling users`

#### Q29. Which REST constraint allows for the presence of caching, routing, and other systems between the client and server?
- [ ] `Layered System`
- [ ] `Stateless`
- [✅] `Client-Server`
- [ ] `Cacheable`

#### Q30. Which content is best to include in your documentation?
- [ ] `your tech stack`
- [ ] `reasoning for your naming schema`
- [ ] `your mission statement`
- [✅] `sample code`

#### Q31. What metric tracks overall availability for your API?
- [ ] `Response Time`
- [ ] `Time to First Hello World`
- [ ] `TTL`
- [✅] `Uptime`

#### Q32. What is the recommended method and URL pattern for retrieving a specific user?
- [ ] `GET /user/{id}`
- [✅] `GET /users/{id}`
- [ ] `GET /user?id={id}`
- [ ] `GET /users?id={id}`

#### Q33. What is the purpose of a link relation?
- [ ] `to describe relationships between resources or actions`
- [ ] `to describe subresources related to the current one`
- [✅] `to link two resources together`
- [ ] `to describe a resource and its purpose`

#### Q34. When building SDKs, which languages should you support?
- [ ] Java, Javascript, and .NET
- [ ] and you can support
- [ ] PHP, Python, and Go
- [ ] the languages that your target users use

#### Q35. Which property would you use to include references to other resources in a JSON document?
- [✅] resources
- [ ] _embedded
- [ ] subresources
- [ ] _links

#### Q36. What is OAuth?
- [✅] an authorization framework for granted delegated access
- [ ] an approach to single sign-on for APIs
- [ ] a method for API authentication
- [ ] HTTP Basic Authentication 2.0

#### Q37. What should your API documentation describe?
- [ ] JSON
- [ ] HTTP
- [✅] common use cases
- [ ] your tech stack

#### Q38. What is the purpose of an OAuth refresh token?
- [ ] to share user profile information
- [ ] to update an API configuration
- [ ] to keep a web session active
- [✅] to retrieve an access token

#### Q39. What is Time to First Hello World?
- [✅] how long it takes for a developer to do something with your API
- [ ] how long it takes to start a new programming language
- [ ] how long it takes to install your SDK
- [ ] how long it takes to read your documentation

#### Q40. Which response header tells the client and intermediaries that the response is not to be cached anywhere?
- [ ] Cache-State: none
- [ ] Expires:-1
- [ ] Cache-Control: no-cache
- [✅] Cache-Control: no-store

 #### Q41. What component hides the distinctions or boundaries between various microservices from end-client applications? 

- [✅] `API gateway`
- [ ] `API logging `
- [ ] `a layered system `
- [ ] `API proxy`

#### Q42. The textbook approach to api versioning is to use _____.

- [ ] `common knowledge`
- [ ] `URLs`
- [ ] `no versioning`
- [✅] `the Accept header`

#### Q43. Which is the most secure method to transmit an API key? 

- [ ] `URL parameter`
- [✅] `Authorization header`
- [ ] `Base64 encoding`
- [ ] `Basic Auth`

#### Q44. Within Oauth, what component validates the user's identity?  

- [ ] `client`
- [ ] `not specified`
- [✅] `authorization server`
- [ ] `resource server`

#### Q45. API traffic  that is entirely internal to your organisation is normally called ____? 

- [ ] `inbound traffic`
- [ ] `north-south traffic `
- [✅] `internal traffic `
- [ ] `east-west traffic`

#### Q46. What is the best approach for requesting JSON instead of XML from an API? 

- [ ] `Add .json to the URL.`
- [ ] `APIs do not use XML.`
- [ ] `Use the Content-Type header.`
- [✅] `Use the Accept header.`

#### Q47. When a user attempts to access a record that is not their own, whitch HTTP response code is the most appropriate? 

- [ ] `403`
- [ ] `404`
- [✅] `401`
- [ ] `405`

#### Q48. Which is a benefit of using an API gateway? 

- [ ] `HTTP verbs`
- [ ] `JSON payloads`
- [ ] `HTTP response codes`
- [✅] `rate limiting/throttling`
