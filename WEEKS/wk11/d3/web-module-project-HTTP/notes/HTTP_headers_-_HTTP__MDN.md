**HTTP headers** let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (`:`), then by its value. [Whitespace](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace) before the value is ignored.

Custom proprietary headers have historically been used with an `X-` prefix, but this convention was deprecated in June 2012 because of the inconveniences it caused when nonstandard fields became standard in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648); others are listed in an [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html), whose original content was defined in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229). IANA also maintains a [registry of proposed new HTTP headers](https://www.iana.org/assignments/message-headers/prov-headers.html).

Headers can be grouped according to their contexts:

- [Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) contain more information about the resource to be fetched, or about the client requesting the resource.
- [Response headers](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) hold additional information about the response, like its location or about the server providing it.
- [Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) contain information about the body of the resource, like its [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), or encoding/compression applied.
- [Payload headers](https://developer.mozilla.org/en-US/docs/Glossary/Payload_header) contain representation-independent information about payload data, including content length and the encoding used for transport.

Headers can also be grouped according to how [proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server) handle them:

- [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
- [`Keep-Alive`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)
- [`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
- [`Proxy-Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)
- [`TE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE)
- [`Trailer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)
- [`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
- [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) (see also [Protocol upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)).

End-to-end headers

These headers _must_ be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.

Hop-by-hop headers

These headers are meaningful only for a single transport-level connection, and _must not_ be retransmitted by proxies or cached. Note that only hop-by-hop headers may be set using the [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection) header.

## [Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication "Permalink to Authentication")

[`WWW-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)

Defines the authentication method that should be used to access a resource.

[`Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)

Contains the credentials to authenticate a user-agent with a server.

[`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)

Defines the authentication method that should be used to access a resource behind a proxy server.

[`Proxy-Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)

Contains the credentials to authenticate a user agent with a proxy server.

## [Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#caching "Permalink to Caching")

[`Age`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age)

The time, in seconds, that the object has been in a proxy cache.

[`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

Directives for caching mechanisms in both requests and responses.

[`Clear-Site-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)

Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.

[`Expires`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)

The date/time after which the response is considered stale.

[`Pragma`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)

Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.

[`Warning`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning)

General warning information about possible problems.

## [Client hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints "Permalink to Client hints")

HTTP [Client hints](https://developer.mozilla.org/en-US/docs/Glossary/Client_hints) are a set of request headers that provide useful information about the client such as device type and network conditions, and allow the server to optimize what it serves for those conditions ([\[RFC8942\]](https://datatracker.ietf.org/doc/html/rfc8942)).

[`Accept-CH`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH)

Servers can advertise support for Client Hints using the `Accept-CH` header field or an equivalent HTML `<meta>` element with `http-equiv` attribute ([\[HTML\]](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv)).

[`Accept-CH-Lifetime`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime)

Servers can ask the client to remember the set of Client Hints that the server supports for a specified period of time, to enable delivery of Client Hints on subsequent requests to the server’s origin ([\[RFC6454\]](https://datatracker.ietf.org/doc/html/rfc6454)).

[`Device-Memory`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory)

Technically a part of Device Memory API, this header represents an approximate amount of RAM client has.

[`DPR`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR)

Client device pixel ratio (DPR), which is the number of physical device pixels corresponding to every CSS pixel.

[`Save-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)

A boolean that indicates the user agent's preference for reduced data usage.

[`Viewport-Width`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width "This is a link to an unwritten page")

A number that indicates the layout viewport width in CSS pixels. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

If `Viewport-Width` occurs in a message more than once, the last value overrides all previous occurrences.

[`Width`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width)

The `Width` request header field is a number that indicates the desired resource width in physical pixels (i.e. intrinsic size of an image). The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

If the desired resource width is not known at the time of the request or the resource does not have a display width, the `Width` header field can be omitted. If `Width` occurs in a message more than once, the last value overrides all previous occurrences

## [Conditionals](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#conditionals "Permalink to Conditionals")

[`Last-Modified`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified)

The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag), but easier to calculate in some environments. Conditional requests using [`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since) and [`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since) use this value to change the behavior of the request.

[`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)

A unique string identifying the version of the resource. Conditional requests using [`If-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match) and [`If-None-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) use this value to change the behavior of the request.

[`If-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)

Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.

[`If-None-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)

Makes the request conditional, and applies the method only if the stored resource _doesn't_ match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one already exists.

[`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)

Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.

[`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)

Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

[`Vary`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)

Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

## [Connection management](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#connection_management "Permalink to Connection management")

[`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)

Controls whether the network connection stays open after the current transaction finishes.

[`Keep-Alive`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)

Controls how long a persistent connection should stay open.

## [Content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#content_negotiation "Permalink to Content negotiation")

[Content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) headers.

[`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)

Informs the server about the [types](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of data that can be sent back.

[`Accept-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)

The encoding algorithm, usually a [compression algorithm](https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression), that can be used on the resource sent back.

[`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)

Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

## [Controls](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#controls "Permalink to Controls")

[`Expect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)

Indicates expectations that need to be fulfilled by the server to properly handle the request.

[`Max-Forwards`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards "This is a link to an unwritten page")

## [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#cookies "Permalink to Cookies")

## [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#cors "Permalink to CORS")

## [Downloads](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#downloads "Permalink to Downloads")

[`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a “Save As” dialog.

## [Message body information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#message_body_information "Permalink to Message body information")

[`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)

The size of the resource, in decimal number of bytes.

[`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)

Indicates the media type of the resource.

[`Content-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)

Used to specify the compression algorithm.

[`Content-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language)

Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.

[`Content-Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location)

Indicates an alternate location for the returned data.

## [Proxies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#proxies "Permalink to Proxies")

[`Forwarded`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded)

Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

[`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.

[`X-Forwarded-Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host)

Identifies the original host requested that a client used to connect to your proxy or load balancer.

[`X-Forwarded-Proto`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto)

Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

[`Via`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via)

Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## [Redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#redirects "Permalink to Redirects")

[`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)

Indicates the URL to redirect a page to.

## [Request context](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#request_context "Permalink to Request context")

[`From`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From)

Contains an Internet email address for a human user who controls the requesting user agent.

[`Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)

Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.

[`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)

The address of the previous web page from which a link to the currently requested page was followed.

[`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

Governs which referrer information sent in the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header should be included with requests made.

[`User-Agent`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)

Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the [Firefox user agent string reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox).

## [Response context](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#response_context "Permalink to Response context")

[`Allow`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow)

Lists the set of HTTP request methods supported by a resource.

[`Server`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)

Contains information about the software used by the origin server to handle the request.

## [Range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#range_requests "Permalink to Range requests")

[`Accept-Ranges`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges)

Indicates if the server supports range requests, and if so in which unit the range can be expressed.

[`Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)

Indicates the part of a document that the server should return.

[`If-Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)

Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.

[`Content-Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)

Indicates where in a full body message a partial message belongs.

## [Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security "Permalink to Security")

[`Cross-Origin-Embedder-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) (COEP)

Allows a server to declare an embedder policy for a given document.

[`Cross-Origin-Opener-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) (COOP)

Prevents other domains from opening/controlling a window.

[`Cross-Origin-Resource-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) (CORP)

Prevents other domains from reading the response of the resources to which this header is applied.

[`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) ([CSP](https://developer.mozilla.org/en-US/docs/Glossary/CSP))

Controls resources the user agent is allowed to load for a given page.

[`Content-Security-Policy-Report-Only`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)

Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) documents sent via an HTTP `POST` request to the specified URI.

[`Expect-CT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)

Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.

[`Feature-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)

Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.

[`Origin-Isolation`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin-Isolation "This is a link to an unwritten page")

Provides a mechanism to allow web applications to isolate their origins.

[`Strict-Transport-Security`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) ([HSTS](https://developer.mozilla.org/en-US/docs/Glossary/HSTS))

Force communication using HTTPS instead of HTTP.

[`Upgrade-Insecure-Requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)

Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the [`upgrade-insecure-requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) directive.

[`X-Content-Type-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)

Disables MIME sniffing and forces browser to use the type given in [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type).

[`X-Download-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Download-Options "This is a link to an unwritten page")

The `[X-Download-Options](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj542450(v=vs.85)?#the-noopen-directive)` HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application. (Note: related [MS Edge bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18488178/)).

[`X-Frame-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) (XFO)

Indicates whether a browser should be allowed to render a page in a [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame), [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed) or [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object).

[`X-Permitted-Cross-Domain-Policies`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies "This is a link to an unwritten page")

Specifies if a cross-domain policy file (`crossdomain.xml`) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). See the [Cross-domain Policy File Specification](https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html) for more information.

[`X-Powered-By`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Powered-By "This is a link to an unwritten page")

May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.

[`X-XSS-Protection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

Enables cross-site scripting filtering.

### [HTTP Public Key Pinning (HPKP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#http_public_key_pinning_glossaryhpkp "Permalink to HTTP Public Key Pinning (HPKP)")

[HTTP Public Key Pinning](https://developer.mozilla.org/en-US/docs/Glossary/HPKP) has been deprecated and removed in favor of Certificate Transparency and [`Expect-CT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT).

[`Public-Key-Pins`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins)

Associates a specific cryptographic public key with a certain web server to decrease the risk of [MITM](https://developer.mozilla.org/en-US/docs/Glossary/MitM) attacks with forged certificates.

[`Public-Key-Pins-Report-Only`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins-Report-Only)

Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.

[Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header) provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

[`Sec-Fetch-Site`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)

It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values `cross-site`, `same-origin`, `same-site`, and `none`.

[`Sec-Fetch-Mode`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)

It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values `cors`, `navigate`, `no-cors`, `same-origin`, and `websocket`.

[`Sec-Fetch-User`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)

It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are `?0` for false and `?1` for true.

[`Sec-Fetch-Dest`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)

It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, and `xslt`.

## [Server-sent events](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#server-sent_events "Permalink to Server-sent events")

[`Last-Event-ID`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Event-ID "This is a link to an unwritten page")

...

[`NEL`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL)

Defines a mechanism that enables developers to declare a network error reporting policy.

[`Ping-From`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-From "This is a link to an unwritten page")

...

[`Ping-To`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-To "This is a link to an unwritten page")

...

[`Report-To`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Report-To "This is a link to an unwritten page")

Used to specify a server endpoint for the browser to send warning and error reports to.

## [Transfer coding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#transfer_coding "Permalink to Transfer coding")

[`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)

Specifies the form of encoding used to safely transfer the resource to the user.

[`TE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE)

Specifies the transfer encodings the user agent is willing to accept.

[`Trailer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)

Allows the sender to include additional fields at the end of chunked message.

## [WebSockets](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#websockets "Permalink to WebSockets")

## [Other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#other "Permalink to Other")

[`Accept-Push-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Push-Policy "This is a link to an unwritten page")

A client can express the desired push policy for a request by sending an `[Accept-Push-Policy](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1)` header field in the request.

[`Accept-Signature`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Signature "This is a link to an unwritten page")

A client can send the `[Accept-Signature](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7)` header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.

[`Alt-Svc`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc)

Used to list alternate ways to reach this service.

[`Date`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)

Contains the date and time at which the message was originated.

[`Early-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data)

Indicates that the request has been conveyed in TLS early data.

[`Large-Allocation`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation)

Tells the browser that the page being loaded is going to want to perform a large allocation.

[`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)

The `[Link](https://datatracker.ietf.org/doc/html/rfc5988#section-5)` entity-header field provides a means for serialising one or more links in HTTP headers. It is semantically equivalent to the HTML [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element.

[`Push-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Push-Policy "This is a link to an unwritten page")

A `[Push-Policy](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2)` defines the server behavior regarding push when processing a request.

[`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)

Indicates how long the user agent should wait before making a follow-up request.

[`Signature`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signature "This is a link to an unwritten page")

The `[Signature](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1)` header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.

[`Signed-Headers`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signed-Headers "This is a link to an unwritten page")

The `[Signed-Headers](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2)` header field identifies an ordered list of response header fields to include in a signature.

[`Server-Timing`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)

Communicates one or more metrics and descriptions for the given request-response cycle.

[`Service-Worker-Allowed`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Allowed "This is a link to an unwritten page")

Used to remove the [path restriction](https://w3c.github.io/ServiceWorker/#path-restriction) by including this header [in the response of the Service Worker script](https://w3c.github.io/ServiceWorker/#service-worker-script-response).

[`SourceMap`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap)

Links generated code to a [source map](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map).

[`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)

The relevant RFC document for the [Upgrade header field is RFC 7230, section 6.7](https://datatracker.ietf.org/doc/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field [please see section 6.1 of the aforementioned RFC](https://datatracker.ietf.org/doc/html/rfc7230#section-6.1).

[`X-DNS-Prefetch-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)

Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

[`X-Firefox-Spdy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Firefox-Spdy "This is a link to an unwritten page")

...

[`X-Pingback`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Pingback "This is a link to an unwritten page")

...

[`X-Requested-With`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Requested-With "This is a link to an unwritten page")

...

[`X-Robots-Tag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Robots-Tag "This is a link to an unwritten page")

The `[X-Robots-Tag](https://developers.google.com/search/reference/robots_meta_tag#xrobotstag)` HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to `<meta name="robots" content="...">`.

[`X-UA-Compatible`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-UA-Compatible "This is a link to an unwritten page")

Used by Internet Explorer to signal which document mode to use.

## [Contributing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#contributing "Permalink to Contributing")

## [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#see_also "Permalink to See also")
