# We Put Hundreds of Our Client Sites Behind a CDN, and It Worked Out Really Well | CSS-Tricks

> At the agency I work for, we recently put all ~1,100 of our sites behind a CDN. It seems to be working. Unfortunately, I have no idea why or how we did

Take the pain out of building site search with the Algolia hosted API. **[Start free now!](https://srv.buysellads.com/ads/long/x/T6A3N7DTTTTTTT66YJJCTTTTTTTVXPSDKTTTTTTTL4MCVYTTTTTTTR7M5VBNBBPUCMZDVIPYC73H6KZZP3ACOW44VQPE)**

At [the agency I work for](http://lexblog.com/), we recently put all ~1,100 of our sites behind a CDN. It seems to be working. Unfortunately, I have no idea why or how we did this. Therefore, in the first part of this article, I force our CTO, Joshua Lynch, to explain the process to me. This has the unintended consequence of Josh suggesting I try this on my own website, a process I’ll narrate for the second half of the article.

I learned three surprising things:

1.  In our case, the biggest benefit to being behind a CDN is actually not performance or security, but rather the “DNS abstraction layer”, a concept I’ll explain below.
2.  Moving to a CDN was a difficult process for us, but only because we have a high domain-to-staff ratio. For a single site, it would be a breeze.
3.  There are no worries about media files 404’ing; no urls need to change. In other words, the common concern about missing post-content images and such is not an issue for us.

Surprised? I was. Without further ado, Josh explains it all.

### The Interview

**What was the “point A to point B”? In other words, what were we doing, and what are we doing now?**

Point A was private hosting with a technology company and no CDN. Point B is hosting with WP Engine, behind CloudFlare’s CDN.

**Was the problem with point A our hosting, or the lack of a CDN?**

Both, sort of. Our top cause of downtime was malicious traffic that our hosting environment was not positioned to handle. Also, our server response times consistently hovered at around two seconds. Response times should be under half a second, and two seconds should be nearing a complete page load!

This, combined with other business factors, forced us to switch hosts, but the lack of a CDN made this process far more difficult than it would be now that we’re on one. If we ever need to migrate again, it will be much easier.

**Wait, why? What does a CDN have to do with migrating hosts?**

Migrating to new servers requires DNS changes. Because of our high domain-to-staff ratio, this makes for a lot of manual work. It’s made even more difficult in situations where our clients manage their own DNS settings.

By getting all our site onto a CDN’s name servers, we gained an abstraction layer between our domains and our hosting — a very good abstraction layer. Unlike GoDaddy, where most of our domains are registered, CloudFlare has an API for managing DNS as well as an easy interface to use browser automation. If we ever need to switch hosts again, it will be very easy to change our DNS settings through CloudFlare. It will be completely automated, and completely transparent to our clients, even the ones who manage their own domains.

**I always thought the point of using a CDN was to serve files faster.**

For some websites that are more media-heavy, that’s true, but not for us. Most of our content is pretty light on media files. For us, the real value in having a CDN is the DNS abstraction layer.

That’s not to say there is no performance benefit for us. We’re far less susceptible to DDOS attacks, because far fewer requests even make it to our host! That’s a combination of CloudFlare’s caching, and their reputation-based DDoS protection.

**Why CloudFlare over other CDN’s?**

There are many CDNs, but there are few products that compete with CloudFlare directly and none that I’m aware of are as affordable. Since we weren’t looking for just a CDN, but the benefits above as well, CloudFlare was the obvious choice.

Personally my own WordPress multisite has been running with CloudFlare in front for years, so I had the experience to be confident in using them at work. They also have an excellent reputation among the technology companies that we work with.

**So, did it work? Any data to help illustrate?**

When CloudFlare redesigned their app earlier this year, we lost the ability to see combined analytics from our domains, but you can view the analytics for individual sites in a CloudFlare account at \`https://www.cloudflare.com/a/analytics/example.com\`. The results are most pronounced on our busiest sites.

![Stats for one of our busiest domains, demonstrating that only a fraction of requests even make it to our host.  Most are served via CloudFlare's page caching.](https://css-tricks.com/wp-content/uploads/2016/03/7d5MYEK.jpg)

_Stats for one of our busiest domains, demonstrating that only a fraction of requests even make it to our host. Most are served via CloudFlare’s cache._

**How did we get this done exactly? We had to go into our Godaddy account and change the DNS settings on all our domains to point to CloudFlare, with no API access, and probably a 300:1 domain-to-staff ratio? That sounds terrible. How did I miss this?**

You’re right, it was a pretty big project we started in October 2014 as we prepared to migrate hosting. Fortunately with some browser automation and manual labor, changing all of the nameservers to CloudFlare for the domains we controlled was the easy part.

**What did we do with browser automation, and what did we do with manual labor?**

[Fake](http://fakeapp.com/), an easy to use browser automation tool, added domains to CloudFlare and collected the nameserver assignments (if I remember correctly you can’t programmatically add new domains to CloudFlare). For our domains in GoDaddy, our labor crew changed the nameservers to the ones assigned by CloudFlare from when Fake added and recorded the domain names.

**And you’re saying that was the easy part?**

Yes! In cases where clients control their nameservers, it was the usual challenge of coordinating any DNS record change, but with the upside that future DNS record changes could then be managed by us.

**What is the challenge associated with that, exactly?**

People have a hard time understanding the domain name system and records. And domain registrars complicate things with difficult user interfaces and using different (but accurate) terms for the same things. If you are busy like our clients and don’t understand something, you’ll have a hard time prioritizing and completing it.

A big challenge was that after you add a domain to CloudFlare, you have 14 days to change your nameservers, otherwise you have to re-add the domain to your CloudFlare account (and you may not get the same nameserver assignment again). Which brings me to the next challenge: CloudFlare tries to give domains within an account the same nameservers, but it’s not guaranteed. So we had to carefully craft our email campaigns to list the correct domain(s) a client needed to update as well as the matching nameservers they should switch to as well as emphasize the importance of changing within the 14 day window! I believe it took three rounds of nameserver assignments, each with two or three email campaigns to remind clients to change, in order to get the majority switched.

**Who were you emailing, and how? Do we have a list to the tech/marketing rep for each client or something? Or is this a CRM thing or what?**

We exported contacts from our CRM and also from Whois lookups!

**Man. How long did all this take?**

My memory is already sadly fuzzy and we were not time tracking back then, so I could only estimate the man hours as dozens, possibly over 100. We did get almost all of the client-controlled domains switched in addition to all the domains we already managed through GoDaddy.

**So, once we had all of our domains pointing to CloudFlare, what happened next? CloudFlare was still pointing to our old host, correct?**

Correct, so we pointed all of our domains in CloudFlare to WP Engine. We were able to programmatically change the A record IP addresses in minutes when we needed to with CloudFlare’s API.

**So, wait, what? We did a large API call to CloudFlare to change A record IP addresses? When? How? Who wrote the API client? Or was this a task somehow handled by the Fake engine?**

We made thousands of requests to the API with some basic desktop scripts I made over Christmas break that year. This enabled us to make thousands of record deletions, edits and additions in minutes rather than hours of manual changes or Fake automation.

**I’m still surprised that, for us, a CDN was more about DNS abstraction than performance. It makes sense, but by that same logic, aren’t we now tightly coupled with CloudFlare? It would be another giant undertaking to migrate away from them if we need to.**

That’s true, but it seems far less likely for the presence of a CDN to be a problem, compared to the myriad things that can go wrong with hosting. Also, CloudFlare is a very stable partner. By this time next year, [they’ll probably have an IPO](https://www.bloomberg.com/news/articles/2015-03-17/website-services-provider-cloudflare-plans-ipo-in-2017-ceo-says).

**Whenever I hear about CDN migrations, I always hear about headaches with media file urls needing to change, or images in the post content 404’ing. We didn’t have that problem, and I notice that our images don’t point to CloudFlare. What’s going on?**

With CloudFlare, You don’t have to serve media files from other domains like you do with traditional CDNs because you change your domain’s nameservers to CloudFlare’s. Then CloudFlare uses Anycast to point your domain to their nearest data center to serve the files they’ve automatically cached. In their own words:

> CloudFlare operates out of 76 data centers around the world. Our CDN automatically caches your static files at our edge nodes so these files are stored closer to your visitors while delivering your dynamic content directly from your web server. CloudFlare then uses a technology called Anycast to route your visitors to the nearest data center. The result is that your website, on average, loads twice as fast for your visitors regardless of where they are located. [https://www.cloudflare.com/features-cdn/](https://www.cloudflare.com/features-cdn/)

**To what degree was this move difficult, simply due to our insanely low staff to client/domain ratio, compared to most agencies? Is it fair to say that this would have been really freaking easy if, say, for example, we literally just managed one high-traffic website?**

Correct, the majority of the complexity was due to the logistics of managing hundreds of domains and helping hundreds of clients update the nameservers on domains they registered. Switching to CloudFlare is very easy with a single domain, though you do need to be careful with settings to prevent issues.

**I’m going to attempt to re-state the process in my own words.**

\*\*\* We have lots of websites. For some of them, we control their DNS settings via GoDaddy. For others, the client retains control, via their domain name registrar of choice.

- We used Fake, humans, and API calls to manage the domain pointing and setting. For domains out of our control, we had to wrangle our clients via several rounds of email, sent to a list gathered via CRM and Whois.
- No worries about media file urls or anything because of the simple fact that with CloudFlare, you change your nameservers to point to them.
- The difficulty for a single site would be trivial. Any appreciable hardship on this move came as a result of our high domain:staff ratio.\*\*

**Is that accurate? Anything to add or take away?**

Correct! You should switch your domains over to CloudFlare too to check out the process.

### Let’s See if I can Figure This Out Myself.

Challenge accepted. I generally understand the process that Josh explained, and I’m going to try it on my own WordPress multisite, which has two domain names, scottfennell.org and scottfennell.com.

I open an account with CloudFlare and also log into my BlueHost account, which is my domain registrar. Well, this is pretty easy. CloudFlare prompts me to enter my domain names, and then treats to a video explaining, more or less, what Josh explained above.

![](https://css-tricks.com/wp-content/uploads/2016/03/w5DfZ74.jpg)

screenshot from CloudFlare intro video.

They claim in the video, which is about a minute long, that the video takes longer than the migration process. They were right. All I had to do was note the nameservers that CloudFlare assigned me, and update them in BlueHost. I’m done. I’m on CloudFlare now (or, I will be once the changes propagate).

I suppose the more interesting topic, is _so what_? Is my site any faster? Unlike most of our sites at work, my site has tons of large images. It’s basically a high-res photo gallery. Pre CloudFlare, this page took about 3.1 seconds to load, uncached: [http://scottfennell.com/turkey/suphan-dagi/](http://scottfennell.com/turkey/suphan-dagi/). With CloudFlare active, it’s taking about 2.2. Pages with more media are even more accelerated, and where I’ve enabled page-caching, I’m getting to DOM ready in about 300ms. If you’re curious to inspect the network panel yourself:

- Has page-caching: [http://scottfennell.com/turkey/](http://scottfennell.com/turkey/)
- Does not have page-caching: [http://scottfennell.com/japan/](http://scottfennell.com/japan/)

Check out these analytics, after just a few days behind CloudFlare:

![](https://css-tricks.com/wp-content/uploads/2016/03/KPrywQs.jpg)

CloudFlare analytics, demonstrating massive proportion of cached requests.

One interesting side-efftect: Some of the image galleries on my website display the images in random order. Behind CloudFlare’s page-caching, I’m getting the same order on each page load, since it caches the output the first time a given url loads. Similarly, at work, it would create a lot of confusion with our clients if they expected to see our updated work but instead were stuck with the version that CloudFlare had cached.

I’m actually delighted by this problem, because it’s provided me with some job security: I got to write a plugin!

### A WordPress Plugin to dump your CloudFlare Cache.

Here’s what it looks like:

![](https://css-tricks.com/wp-content/uploads/2016/03/Q3y0e8W.jpg)

Screenshot of our CloudFlare plugin.

You get two buttons. One to dump your cache, and another to enter dev mode, where caching is temporarily suspended for up to three hours. If you’re interested in using CloudFlare at an enterprise level on more than just a couple of sites, I’d highly recommend taking a look at their [API](https://api.cloudflare.com/) and building a similar tool for your platform of choice. [Sunny](https://wordpress.org/plugins/sunny/) looks to be a very robust option for dot org, though I haven’t used it personally.

If you do roll your own, note the admirable job that CloudFlare does with integrating API docs into their web UI. Check this out, it’s sitting there begging for you to make a call:

![](https://css-tricks.com/wp-content/uploads/2016/03/koRCRpk.png)

Screenshot demonstraing API docs nicley woven into wep app UI.

### Alternatives and Next Steps

I’ve gone from being vaguely aware and happy that we moved to CloudFlare, to being pretty damn stoked about CloudFlare. My apologies: I really had no intention of making this a CloudFlare love-fest, so allow me to point out that there are probably some alternatives, in particular one from [Sucuri](http://wptavern.com/sucuri-is-building-a-comprehensive-alternative-to-cloudflare).

Aside from the business case for CDN’s, there’s also an opportunity for skill development. If you’re like me, you spend a lot of time off on an island in your text-editor, and it’s easy to become divorced from the process of actually serving that code in production. Spending some time learning my DNS vocab words has been a refreshing chance of pace. If that sounds like you, and you don’t have your sites behind a CDN, take a break from code for a while, and audit CloudFlare.

---

_[Scott Fennell](http://scottfennell.org/) is a WordPress theme and plugin developer in Anchorage, Alaska._

[Source](https://css-tricks.com/moving-to-a-cdn/)
