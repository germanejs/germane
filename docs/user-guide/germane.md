# Germane

germane module enables the manipulation of date and time object, parsing it to a timezone if specified by location or using the localtime if location is unspecified.

## Usage

```javascript
import { germane } from "germane";
// Without timezones

germane(); //=> returns an object of functions using the local time.

germane("2019-09-10T21:11:11");

// ISO basic format
germane("20190413T00:56:12Z");

// ASP.net JSON format
germane("/Date(1561290910000)/");

// RFC5822
germane("Thu, 21 Nov 2019 11:15:00 -01:00");

// With timezones

germane("2019-11-12T12:11:11.123Z", "Europe/London"); // => parses the date to the timezone of given location.

germane(1568943620254, "Africa/Lagos"); // => parse the date to the timezone of given location.

// With format functions

format(
  germane("2019-11-12T12:11:11.125Z", "Africa/Lagos"),
  "Today is dddd, do MMMM, YYYY HH:mm:ss"
); //=> "Today is Tuesday, 12th November, 2019 13:11:11"

useCFormat(
  germane("2019-11-12T12:11:11.125Z", "Africa/Lagos"),
  "Today is %A, %B %do, %Y  %I:%M:%S %p in %Z"
); //=> "Today is Tuesday, November 12th, 2019 01:11:11 PM in WAST"
// timezone offset for Africa/Lagos is +01:00
```

## Params

germane function accepts 2 arguments

- both parameters are optional (in which case it defaults to the local time).
- first parameter should be an correct ISO string or timestamp.
- second parameter should be a valid location string in format (continent/city).

## Behaviour

- germane handles every date passed to it as a UTC time (except ISO strings not suffix with Z)
- germane treats timestamps(numbers) as a UTC time. hence when passed as an argument with a location/timezone, the timezone offset gets added to the total time.
- When an ISO string is passed without a timezone, germane defaults to the local timezone for its calculations.
- When a timestamp/number is passed it assumes the timestamp is a UTC time
- when an ISO string is passed with the suffix Z/z, it is assumed to be in UTC.
- germane accepts every ISO 8601 specified formats.
- ISO formats with a suffix of Z is assumed to be UTC.
- ISO formats without the suffix Z is assumed to be a local time.
- ISO formats with date only is assumed to be UTC.
- All timestamp are assumed to be in UTC.
- Returns all RFC5822 and RFC2822 strings as a local time.
