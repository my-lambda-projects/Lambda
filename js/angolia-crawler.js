new Crawler( {
  appId: "YOUR_APP_ID",
  apiKey: "YOUR_API_KEY",
  indexPrefix: "crawler_",
  rateLimit: 8,
  maxUrls: 500,
  startUrls: [ "https://blog.algolia.com/" ],
  ignoreQueryParams: [ "utm_medium", "utm_source", "utm_campaign", "utm_term" ],
  actions: [
    {
      indexName: "default_index_name",
      pathsToMatch: [ "https://blog.algolia.com/**" ],
      recordExtractor: ( { url, $, contentLength, fileType } ) => {
        console.log( `Crawling "${ url.href }"` );

        return [
          {
            // URL
            url: url.href,
            hostname: url.hostname,
            path: url.pathname,
            depth: url.pathname.split( "/" ).length - 1,

            // Metadata
            contentLength,
            fileType,
            title: $( "head > title" ).text(),
            keywords: $( "meta[name=keywords]" ).attr( "content" ),
            description: $( "meta[name=description]" ).attr( "content" ),
            type: $( 'meta[property="og:type"]' ).attr( "content" ),
            image: $( 'meta[property="og:image"]' ).attr( "content" ),

            // Content
            headers: $( "h1,h2" )
              .map( ( i, e ) => $( e ).text() )
              .get()
          }
        ]
      }
    }
  ],
  initialIndexSettings: {
    default_index_name: {
      searchableAttributes: [
        "unordered(keywords)",
        "unordered(title)",
        "unordered(description)",
        "unordered(headers)",
        "url"
      ],
      customRanking: [ "asc(depth)" ],
      attributesForFaceting: [ "fileType", "type" ]
    }
  }
} );
