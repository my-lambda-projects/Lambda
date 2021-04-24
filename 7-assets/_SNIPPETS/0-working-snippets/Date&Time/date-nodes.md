# Date

> JavaScript Date objects represent a single moment in time in a platform-independent format.


**Description**
The ECMAScript epoch and timestamps


A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the UNIX epoch (the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values.

Note: It's important to keep in mind that while the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

It should be noted that the maximum Date is not of the same value as the maximum safe integer (Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard Date object (equivalent to ±8,640,000,000,000,000 milliseconds).

Date format and time zone conversions
There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.

In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()), there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).


**Constructor**

**[Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)**

# Date() constructor

> Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.

Creates a JavaScript **`Date`** instance that represents a single moment in time in a platform-independent format. `Date` objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

Syntax
------

new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex \[, day \[, hours \[, minutes \[, seconds \[, milliseconds\]\]\]\]\])

**Note:** The only correct way to instantiate a new `Date` object is by using the `new` operator. If you simply call the `Date` object directly, such as `now = Date()`, the returned value is a string rather than a `Date` object.

### Parameters

There are four basic forms for the `Date()` constructor:

1.  #### No parameters
    
    When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation.
    
2.  #### Time value or timestamp number
    
    `value`
    
    An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored. Keep in mind that most [UNIX Timestamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) functions are only accurate to the nearest second.
    
3.  #### Timestamp string
    
    `dateString`
    
    A string value representing a date, specified in a format recognized by the [`Date.parse()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method. (These formats are [IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14), and also strings in a [version of ISO8601](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse).)
    
    **Note:** Parsing of date strings with the `Date` constructor (and `Date.parse()`, which works the same way) is _strongly discouraged_ due to browser differences and inconsistencies.
    
    *   Support for [RFC 2822](https://tools.ietf.org/html/rfc2822) format strings is by convention only.
    *   Support for ISO 8601 formats differs in that date-only strings (e.g. `"1970-01-01"`) are treated as UTC, not local.
    
4.  #### Individual date and time component values
    
    Given at least a year and month, this form of `Date()` returns a `Date` object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (`1` for `day` and `0` for every other component).
    
    `year`
    
    Integer value representing the year.
    
    Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year. See the [example below](#Two_digit_years_map_to_1900_-_1999).
    
    `monthIndex`
    
    Integer value representing the month, beginning with `0` for January to `11` for December.
    
    `day` Optional
    
    Integer value representing the day of the month. The default is `1`.
    
    `hours` Optional
    
    Integer value representing the hour of the day. The default is `0` (midnight).
    
    `minutes` Optional
    
    Integer value representing the minute segment of a time. The default is `0` minutes past the hour.
    
    `seconds` Optional
    
    Integer value representing the second segment of a time. The default is `0` seconds past the minute.
    
    `milliseconds` Optional
    
    Integer value representing the millisecond segment of a time. The default is `0` milliseconds past the second.
    

Examples
--------

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

**Note:** Parsing of date strings with the `Date` constructor (and `Date.parse`, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.

    let today = new Date()
    let birthday = new Date('December 17, 1995 03:24:00')
    let birthday = new Date('1995-12-17T03:24:00')
    let birthday = new Date(1995, 11, 17)            
    let birthday = new Date(1995, 11, 17, 3, 24, 0)


Creates a new Date object.

**Static methods**

1. **[Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)**
  1. Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
2. **[Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)**
  1. Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
  2. **Note:**  Parsing of strings with Date.parse is strongly discouraged due to browser differences and inconsistencies.
3. **[Date.UTC()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)**
  1. Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

**Instance methods**

1. **[Date.prototype.getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)**
  1. Returns the day of the month (1–31) for the specified date according to local time.
2. **[Date.prototype.getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)**
  1. Returns the day of the week (0–6) for the specified date according to local time.
3. **[Date.prototype.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)**
  1. Returns the year (4 digits for 4-digit years) of the specified date according to local time.
4. **[Date.prototype.getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)**
  1. Returns the hour (0–23) in the specified date according to local time.
5. **[Date.prototype.getMilliseconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)**
  1. Returns the milliseconds (0–999) in the specified date according to local time.
6. **[Date.prototype.getMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)**
  1. Returns the minutes (0–59) in the specified date according to local time.
7. **[Date.prototype.getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)**
  1. Returns the month (0–11) in the specified date according to local time.
8. **[Date.prototype.getSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)**
  1. Returns the seconds (0–59) in the specified date according to local time.
9. **[Date.prototype.getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)**
  1. Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
10. **[Date.prototype.getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)**
  1. Returns the time-zone offset in minutes for the current locale.
11. **[Date.prototype.getUTCDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)**
  1. Returns the day (date) of the month (1–31) in the specified date according to universal time.
12. **[Date.prototype.getUTCDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)**
  1. Returns the day of the week (0–6) in the specified date according to universal time.
13. **[Date.prototype.getUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)**
  1. Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
14. **[Date.prototype.getUTCHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)**
  1. Returns the hours (0–23) in the specified date according to universal time.
15. **[Date.prototype.getUTCMilliseconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)**
  1. Returns the milliseconds (0–999) in the specified date according to universal time.
16. **[Date.prototype.getUTCMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)**
  1. Returns the minutes (0–59) in the specified date according to universal time.
17. **[Date.prototype.getUTCMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)**
  1. Returns the month (0–11) in the specified date according to universal time.
18. **[Date.prototype.getUTCSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)**
  1. Returns the seconds (0–59) in the specified date according to universal time.
19. **[Date.prototype.getYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)**
  1. Returns the year (usually 2–3 digits) in the specified date according to local time. Use [getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) instead.
20. **[Date.prototype.setDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)**
  1. Sets the day of the month for a specified date according to local time.
21. **[Date.prototype.setFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)**
  1. Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
22. **[Date.prototype.setHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)**
  1. Sets the hours for a specified date according to local time.
23. **[Date.prototype.setMilliseconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)**
  1. Sets the milliseconds for a specified date according to local time.
24. **[Date.prototype.setMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)**
  1. Sets the minutes for a specified date according to local time.
25. **[Date.prototype.setMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)**
  1. Sets the month for a specified date according to local time.
26. **[Date.prototype.setSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)**
  1. Sets the seconds for a specified date according to local time.
27. **[Date.prototype.setTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)**
  1. Sets the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.
28. **[Date.prototype.setUTCDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate)**
  1. Sets the day of the month for a specified date according to universal time.
29. **[Date.prototype.setUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)**
  1. Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.
30. **[Date.prototype.setUTCHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours)**
  1. Sets the hour for a specified date according to universal time.
31. **[Date.prototype.setUTCMilliseconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds)**
  1. Sets the milliseconds for a specified date according to universal time.
32. **[Date.prototype.setUTCMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes)**
  1. Sets the minutes for a specified date according to universal time.
33. **[Date.prototype.setUTCMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth)**
  1. Sets the month for a specified date according to universal time.
34. **[Date.prototype.setUTCSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds)**
  1. Sets the seconds for a specified date according to universal time.
35. **[Date.prototype.setYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear)**
  1. Sets the year (usually 2–3 digits) for a specified date according to local time. Use [setFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) instead.
36. **[Date.prototype.toDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)**
  1. Returns the &quot;date&quot; portion of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) as a human-readable string like &#39;Thu Apr 12 2018&#39;.
37. **[Date.prototype.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)**
  1. Converts a date to a string following the ISO 8601 Extended Format.
38. **[Date.prototype.toJSON()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON)**
  1. Returns a string representing the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) using [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). Intended for use by [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
39. **[Date.prototype.toGMTString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString)**
  1. Returns a string representing the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) based on the GMT (UTC) time zone. Use [toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) instead.
40. **[Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)**
  1. Returns a string with a locality sensitive representation of the date portion of this date based on system settings.
41. **[Date.prototype.toLocaleFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat)**
  1. Converts a date to a string, using a format string.
42. **[Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)**
  1. Returns a string with a locality-sensitive representation of this date. Overrides the [Object.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) method.
43. **[Date.prototype.toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)**
  1. Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.
44. **[Date.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)**
  1. Returns a string representing the specified [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. Overrides the [Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method.
45. **[Date.prototype.toTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)**
  1. Returns the &quot;time&quot; portion of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) as a human-readable string.
46. **[Date.prototype.toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)**
  1. Converts a date to a string using the UTC timezone.
47. **[Date.prototype.valueOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf)**
  1. Returns the primitive value of a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. Overrides the [Object.prototype.valueOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method.

---
---
---
# Date.now()

> The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

The static **`Date.now()`** method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

Syntax
------

    var timeInMs = Date.now();

### Return value

A [`Number`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) representing the milliseconds elapsed since the UNIX epoch.


Examples
--------

### Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `Date.now()` might get rounded depending on browser settings.  
In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

    
    Date.now()
    
    
    
    
    
    
    
    Date.now();
    
    
    
    
    

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

