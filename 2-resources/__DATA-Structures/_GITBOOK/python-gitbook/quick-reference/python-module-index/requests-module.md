# Requests Module

**Requests** is an elegant and simple HTTP library for Python, built for human beings.

**Behold, the power of Requests**:

```text
>>> r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
>>> r.status_code
200
>>> r.headers['content-type']
'application/json; charset=utf8'
>>> r.encoding
'utf-8'
>>> r.text
'{"type":"User"...'
>>> r.json()
{'private_gists': 419, 'total_private_repos': 77, ...}
```

See [similar code, sans Requests](https://gist.github.com/973705).

**Requests** allows you to send HTTP/1.1 requests extremely easily. There’s no need to manually add query strings to your URLs, or to form-encode your POST data. Keep-alive and HTTP connection pooling are 100% automatic, thanks to [urllib3](https://github.com/urllib3/urllib3).

### Beloved Features

Requests is ready for today’s web.

- Keep-Alive & Connection Pooling
- International Domains and URLs
- Sessions with Cookie Persistence
- Browser-style SSL Verification
- Automatic Content Decoding
- Basic/Digest Authentication
- Elegant Key/Value Cookies
- Automatic Decompression
- Unicode Response Bodies
- HTTP\(S\) Proxy Support
- Multipart File Uploads
- Streaming Downloads
- Connection Timeouts
- Chunked Requests
- `.netrc` Support

Requests officially supports Python 2.7 & 3.6+, and runs great on PyPy.

### The User Guide

This part of the documentation, which is mostly prose, begins with some background information about Requests, then focuses on step-by-step instructions for getting the most out of Requests.

- [Installation of Requests](https://docs.python-requests.org/en/master/user/install/)
  - [$ python -m pip install requests](https://docs.python-requests.org/en/master/user/install/#python-m-pip-install-requests)
  - [Get the Source Code](https://docs.python-requests.org/en/master/user/install/#get-the-source-code)
- [Quickstart](https://docs.python-requests.org/en/master/user/quickstart/)
  - [Make a Request](https://docs.python-requests.org/en/master/user/quickstart/#make-a-request)
  - [Passing Parameters In URLs](https://docs.python-requests.org/en/master/user/quickstart/#passing-parameters-in-urls)
  - [Response Content](https://docs.python-requests.org/en/master/user/quickstart/#response-content)
  - [Binary Response Content](https://docs.python-requests.org/en/master/user/quickstart/#binary-response-content)
  - [JSON Response Content](https://docs.python-requests.org/en/master/user/quickstart/#json-response-content)
  - [Raw Response Content](https://docs.python-requests.org/en/master/user/quickstart/#raw-response-content)
  - [Custom Headers](https://docs.python-requests.org/en/master/user/quickstart/#custom-headers)
  - [More complicated POST requests](https://docs.python-requests.org/en/master/user/quickstart/#more-complicated-post-requests)
  - [POST a Multipart-Encoded File](https://docs.python-requests.org/en/master/user/quickstart/#post-a-multipart-encoded-file)
  - [Response Status Codes](https://docs.python-requests.org/en/master/user/quickstart/#response-status-codes)
  - [Response Headers](https://docs.python-requests.org/en/master/user/quickstart/#response-headers)
  - [Cookies](https://docs.python-requests.org/en/master/user/quickstart/#cookies)
  - [Redirection and History](https://docs.python-requests.org/en/master/user/quickstart/#redirection-and-history)
  - [Timeouts](https://docs.python-requests.org/en/master/user/quickstart/#timeouts)
  - [Errors and Exceptions](https://docs.python-requests.org/en/master/user/quickstart/#errors-and-exceptions)
- [Advanced Usage](https://docs.python-requests.org/en/master/user/advanced/)
  - [Session Objects](https://docs.python-requests.org/en/master/user/advanced/#session-objects)
  - [Request and Response Objects](https://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects)
  - [Prepared Requests](https://docs.python-requests.org/en/master/user/advanced/#prepared-requests)
  - [SSL Cert Verification](https://docs.python-requests.org/en/master/user/advanced/#ssl-cert-verification)
  - [Client Side Certificates](https://docs.python-requests.org/en/master/user/advanced/#client-side-certificates)
  - [CA Certificates](https://docs.python-requests.org/en/master/user/advanced/#ca-certificates)
  - [Body Content Workflow](https://docs.python-requests.org/en/master/user/advanced/#body-content-workflow)
  - [Keep-Alive](https://docs.python-requests.org/en/master/user/advanced/#keep-alive)
  - [Streaming Uploads](https://docs.python-requests.org/en/master/user/advanced/#streaming-uploads)
  - [Chunk-Encoded Requests](https://docs.python-requests.org/en/master/user/advanced/#chunk-encoded-requests)
  - [POST Multiple Multipart-Encoded Files](https://docs.python-requests.org/en/master/user/advanced/#post-multiple-multipart-encoded-files)
  - [Event Hooks](https://docs.python-requests.org/en/master/user/advanced/#event-hooks)
  - [Custom Authentication](https://docs.python-requests.org/en/master/user/advanced/#custom-authentication)
  - [Streaming Requests](https://docs.python-requests.org/en/master/user/advanced/#streaming-requests)
  - [Proxies](https://docs.python-requests.org/en/master/user/advanced/#proxies)
  - [Compliance](https://docs.python-requests.org/en/master/user/advanced/#compliance)
  - [HTTP Verbs](https://docs.python-requests.org/en/master/user/advanced/#http-verbs)
  - [Custom Verbs](https://docs.python-requests.org/en/master/user/advanced/#custom-verbs)
  - [Link Headers](https://docs.python-requests.org/en/master/user/advanced/#link-headers)
  - [Transport Adapters](https://docs.python-requests.org/en/master/user/advanced/#transport-adapters)
  - [Blocking Or Non-Blocking?](https://docs.python-requests.org/en/master/user/advanced/#blocking-or-non-blocking)
  - [Header Ordering](https://docs.python-requests.org/en/master/user/advanced/#header-ordering)
  - [Timeouts](https://docs.python-requests.org/en/master/user/advanced/#timeouts)
- [Authentication](https://docs.python-requests.org/en/master/user/authentication/)
  - [Basic Authentication](https://docs.python-requests.org/en/master/user/authentication/#basic-authentication)
  - [Digest Authentication](https://docs.python-requests.org/en/master/user/authentication/#digest-authentication)
  - [OAuth 1 Authentication](https://docs.python-requests.org/en/master/user/authentication/#oauth-1-authentication)
  - [OAuth 2 and OpenID Connect Authentication](https://docs.python-requests.org/en/master/user/authentication/#oauth-2-and-openid-connect-authentication)
  - [Other Authentication](https://docs.python-requests.org/en/master/user/authentication/#other-authentication)
  - [New Forms of Authentication](https://docs.python-requests.org/en/master/user/authentication/#new-forms-of-authentication)

### The Community Guide

This part of the documentation, which is mostly prose, details the Requests ecosystem and community.

- [Recommended Packages and Extensions](https://docs.python-requests.org/en/master/community/recommended/)
  - [Certifi CA Bundle](https://docs.python-requests.org/en/master/community/recommended/#certifi-ca-bundle)
  - [CacheControl](https://docs.python-requests.org/en/master/community/recommended/#cachecontrol)
  - [Requests-Toolbelt](https://docs.python-requests.org/en/master/community/recommended/#requests-toolbelt)
  - [Requests-Threads](https://docs.python-requests.org/en/master/community/recommended/#requests-threads)
  - [Requests-OAuthlib](https://docs.python-requests.org/en/master/community/recommended/#requests-oauthlib)
  - [Betamax](https://docs.python-requests.org/en/master/community/recommended/#betamax)
- [Frequently Asked Questions](https://docs.python-requests.org/en/master/community/faq/)
  - [Encoded Data?](https://docs.python-requests.org/en/master/community/faq/#encoded-data)
  - [Custom User-Agents?](https://docs.python-requests.org/en/master/community/faq/#custom-user-agents)
  - [Why not Httplib2?](https://docs.python-requests.org/en/master/community/faq/#why-not-httplib2)
  - [Python 3 Support?](https://docs.python-requests.org/en/master/community/faq/#python-3-support)
  - [Python 2 Support?](https://docs.python-requests.org/en/master/community/faq/#python-2-support)
  - [What are “hostname doesn’t match” errors?](https://docs.python-requests.org/en/master/community/faq/#what-are-hostname-doesn-t-match-errors)
- [Integrations](https://docs.python-requests.org/en/master/community/out-there/)
  - [Python for iOS](https://docs.python-requests.org/en/master/community/out-there/#python-for-ios)
- [Articles & Talks](https://docs.python-requests.org/en/master/community/out-there/#articles-talks)
- [Support](https://docs.python-requests.org/en/master/community/support/)
  - [Stack Overflow](https://docs.python-requests.org/en/master/community/support/#stack-overflow)
  - [File an Issue](https://docs.python-requests.org/en/master/community/support/#file-an-issue)
  - [Send a Tweet](https://docs.python-requests.org/en/master/community/support/#send-a-tweet)
- [Vulnerability Disclosure](https://docs.python-requests.org/en/master/community/vulnerabilities/)
  - [Process](https://docs.python-requests.org/en/master/community/vulnerabilities/#process)
  - [Previous CVEs](https://docs.python-requests.org/en/master/community/vulnerabilities/#previous-cves)
- [Release Process and Rules](https://docs.python-requests.org/en/master/community/release-process/)
  - [Major Releases](https://docs.python-requests.org/en/master/community/release-process/#major-releases)
  - [Minor Releases](https://docs.python-requests.org/en/master/community/release-process/#minor-releases)
  - [Hotfix Releases](https://docs.python-requests.org/en/master/community/release-process/#hotfix-releases)
  - [Reasoning](https://docs.python-requests.org/en/master/community/release-process/#reasoning)
- [Community Updates](https://docs.python-requests.org/en/master/community/updates/)
- [Release History](https://docs.python-requests.org/en/master/community/updates/#release-history)

### The API Documentation / Guide

If you are looking for information on a specific function, class, or method, this part of the documentation is for you.

- [Developer Interface](https://docs.python-requests.org/en/master/api/)
  - [Main Interface](https://docs.python-requests.org/en/master/api/#main-interface)
  - [Exceptions](https://docs.python-requests.org/en/master/api/#exceptions)
  - [Request Sessions](https://docs.python-requests.org/en/master/api/#request-sessions)
  - [Lower-Level Classes](https://docs.python-requests.org/en/master/api/#lower-level-classes)
  - [Lower-Lower-Level Classes](https://docs.python-requests.org/en/master/api/#lower-lower-level-classes)
  - [Authentication](https://docs.python-requests.org/en/master/api/#authentication)
  - [Encodings](https://docs.python-requests.org/en/master/api/#encodings)
  - [Cookies](https://docs.python-requests.org/en/master/api/#cookies)
  - [Status Code Lookup](https://docs.python-requests.org/en/master/api/#status-code-lookup)
  - [Migrating to 1.x](https://docs.python-requests.org/en/master/api/#migrating-to-1-x)
  - [Migrating to 2.x](https://docs.python-requests.org/en/master/api/#migrating-to-2-x)
