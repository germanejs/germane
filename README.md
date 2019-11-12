[![Coverage Status](https://coveralls.io/repos/github/germanejs/germane/badge.svg?branch=master)](https://coveralls.io/github/germanejs/germane?branch=master)

[![GitHub license](https://img.shields.io/github/license/germanejs/geramane)](https://github.com/germanejs/germane/blob/master/LICENSE)

[![Known Vulnerabilities](https://snyk.io/test/github/germanejs/germane/badge.svg)](https://snyk.io/test/github/germanejs/germane)

[![Github repo size](https://img.shields.io/github/repo-size/germanejs/germane)](https://img.shields.io/github/repo-size/germanejs/germane)

# Germane ⏲
**A modern/minimalistic Javascript date library for formatting, parsing, validating and manipulating dates.**
[Documentation](https://germanejs.com)

## Community

Germane is open source software released under an
[MIT license](https://github.com/germanejs/germane/blob/master/germane/LICENSE).

You are welcome to
[report bugs](https://github.com/germanejs/germane/issues) or create pull
requests on [github](https://github.com/germanejs/germane)

## Installation

The easiest way to install germane is from [`npm`](https://www.npmjs.com/):

```sh
npm i germane
```

or [`yarn`](https://yarnpkg.com/):

```sh
yarn add germane
```

# Usage

```javascript
import germane, { format, useCFormat, differenceInWords } from "germane";

germane("2019-11-11T15:00:00.000Z", "Asia/Bangkok").toString(); //=> 'Mon Nov 11 2019 22:00:00 UTC+0700 (Indochina Time)'

germane("1934W195", "Africa/Lagos").toString(); //=> 'Fri May 11 1934 01:00:00 UTC+0100 (West Africa Standard Time)'

germane("/Date(1033112130000)/").toISOString(); // => '2002-09-27T07:35:30.000Z'

germane("Mon, 11 Nov 2019 22:00:00 +0700").getTime(); //=> 1573484400000

format(new Date("2019 09 08 12:34:12"), "dddd, Do of MMMM YYYY, HH:ss:ss"); //=> Sunday, 8th of September 2019, 12:34:12

format(
  germane("2019-09-08 12:34:12Z", "Asia/Seoul"),
  "dddd, Do of MMMM YYYY, HH:ss:ss zz"
); //=> Sunday, 8th of September 2019, 21:12:12 KST

useCFormat(new Date("2019 09 07 23:12:59"), "%A, %B %d, %Y  %I:%M:%S %p"); //=> Saturday, September 07, 2019  23:12:59 PM

differenceInWords(new Date("2019 09 08"), new Date("2022 12 31")); //=> 3 years, 3 months, 3 weeks, 2 days

add(germane("2000-01-11T19:00:12.230Z"), {
  years: 30,
  months: 5,
  days: 400,
  hours: 30,
  minutes: 12,
  seconds: 459,
  ms: 410
}); //=> 2031-07-18T01:19:51.640Z
```

## Interface

There are lots of method/helpers in the germane. for a full list please visit [Germane](https://germanejs.com).

**germane** is the library's main date manipulation function, it is recommended that you use the germane date function, as its parses date and time completely independent of the Date constructor function, it is also timezone independent and allows you to include a timezone of your choice.

**format** and **useCFormat** allows for date formatting, useCFormat uses formatting tokens use by the native C strptime function and Pythons's strftime function.

**add**, **subtract** and **replace** allows for date manipulating and calculations, replace allows for the replacing of date units and returns an ISO string of the replaced value.

for more please refer to docs section of these README

# Docs

See [germanejs.com](https://germanejs.com) for more details, API and other documentions.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT ©️ Simeon Akpanudo](https://github.com/germanejs/germane/blob/master/germane/LICENSE)
