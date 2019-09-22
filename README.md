[![Coverage Status](https://coveralls.io/repos/github/germanejs/germane/badge.svg?branch=master)](https://coveralls.io/github/germanejs/germane?branch=master)

# Germane

**A modern/minimalistic Javascript date library for formatting, parsing, validating and manipulating dates.**
[Documentation](https://germanejs.com)

## Community

Germane is open source software released under an
[MIT license](https://github.com/germanejs/germane/blob/master/germane/LICENSE).

You are welcome to
[report bugs](https://github.com/germanejs/germane/issues) or create pull
requests on [github](https://github.com/germanejs/germane)

## Installation

The easiest way to install acorn is from [`npm`](https://www.npmjs.com/):

```sh
npm i germane
```

or [`yarn`](https://yarnpkg.com/):

```sh
yarn add germane
```

# Usage

```javascript
import { format, useCFormat, differenceInWords } from "germane";

format(new Date("2019 09 08 12:34:12"), "dddd, Do of MMMM YYYY, HH:ss:ss"); //=> Sunday, 8th of September 2019, 12:34:12
useCFormat(new Date("2019 09 07 23:12:59"), "%A, %B %d, %Y  %I:%M:%S %p"); //=> Saturday, September 07, 2019  23:12:59 PM

differenceInWords(new Date("2019 09 08"), new Date("2022 12 31")); //=> 3 years, 3 months, 3 weeks, 2 days
```

## Interface

There are lots of method/helpers in the germane. for a full list please visit [Germane](https://germanejs.com)
**format | useCFormat**`(Date, formatString)` is the main formating interface to the library. The
`Date` parameter is a JavaScript Date Object or a timestamp, `formatString` can be undefined or an object
setting some of the options listed below. The return value will be a correctly formatted date string using the formatstring specified.
**differenceInWords**`(startDate, endDate)` returns the difference in human readable words the difference between two dates in word. both parameters can be a javascript date object or a timestamp.

# Docs

See [germanejs.com](https://germanejs.com) for more details, API and other documentions.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT ©️ Simeon Akpanudo](https://github.com/germanejs/germane/blob/master/germane/LICENSE)
