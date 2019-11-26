# **Functions for germane**

Germane is a minimalist date and time library.

## All functions

- [x] endOfDay()
- [x] endOfHour()
- [x] endOfMinute()
- [x] endOfWeek()
- [x] endOfMonth()
- [x] endOfQuarter()
- [x] endOfYear()
- [x] endOfDecade()
- [ ] endOfCentury()
- [ ] endOfMillenium()
- [ ] endOfISOWeekYear()
- [x] startOfDay ()
- [x] startOfHour()
- [x] startOfMinute()
- [x] startOfWeek()
- [x] startOfMonth()
- [x] startOfQuarter()
- [x] startOfYear()
- [ ] startOfDecade()
- [ ] startOfCentury()
- [ ] startOfMillenium()
- [x] isBusinessDay()
- [x] isWeekend()
- [x] isLastWeek()
- [x] isSameWeek()
- [x] isYesterday()
- [x] isNextDay()
- [x] isDST()
- [x] isValid()
- [x] isDate()
- [x] isSameDay()
- [x] isFuture()
- [x] isToday()
- [x] isMonday()
- [x] isTuesday()
- [x] isWednesday()
- [x] isThurdays()
- [x] isFridays()
- [x] isSaturdays()
- [x] isSundays()
- [x] isBefore()
- [x] isAfter()
- [ ] isSameOrAfter()
- [ ] isSameOrBefore()
- [ ] isLeapYear()
- [ ] isBetween()
- [ ] isLocal()
- [ ] hasWeeks()
- [ ] hasDays()
- [ ] hasMondays()
- [ ] hasTuesdays()
- [ ] hasWednesdays()
- [ ] hasThursdays()
- [ ] hasFridays()
- [ ] hasSaturdays()
- [ ] hasSundays()
- [ ] hasBusinessDays()
- [x] differenceInBusinessDays()
- [x] differenceInMilliseconds()
- [x] differenceInSeconds()
- [x] differenceInMinutes()
- [x] differenceInHours()
- [x] differenceInDays()
- [x] differenceInWeeks()
- [x] differenceInMonths()
- [x] differenceInYears()
- [x] differenceInWords()
- [x] add()
- [x] subtract()
- [x] inRange()
- [ ] toJSON
- [x] formatRelative()
- [x] relativeDistance()
- [x] strftime()
- [ ] strptime()
- [ ] fromFormat()
- [ ] UTCNow()
- [ ] now()
- [ ] toUTC()
- [ ] toISOString()
- [ ] setWeeks()
- [ ] setMilliseconds()
- [ ] setSeconds()
- [ ] setMinutes()
- [ ] setHours()
- [ ] setDays()
- [ ] setMonths()
- [ ] setYears()
- [ ] getWeeks()
- [ ] getMilliseconds()
- [ ] getSeconds()
- [ ] getMinutes()
- [ ] getHours()
- [ ] getDays()
- [ ] getMonths()
- [ ] getYears()
- [ ] getBusinessDays()
- [ ] getTimezoneOffset()
- [ ] getOrdinal()
- [ ] getQuarter()
- [x] toArray()
- [x] toObject()
- [ ] compareASC()
- [ ] compareDecs()
- [x] min()
- [x] max()
- [ ] average()
- [x] filterBy()
- [x] fromRange()
- [ ] ISOWeekYear()
- [ ] fromOrdinal()
- [ ] toOrdinal()
- [ ] toISOWeekYear()
- [ ] fromISOWeekYear()
- [ ] WeekOfYear()
- [ ] zoneName
- [ ] LocaleTimezone()
- [ ] valueOf()
- [ ] toString()
- [ ] createDuration(duration, unit)

```js
import { createDuration } from "germane";

const duration1 = createDuration(1000, "minute");
const duration2 = createDuration(
  [new Date("2019-09-01 23:11:09.900Z"), new Date("2019-09-02 04:48:50.099Z")],
  "second"
);
const duration3 = createDuration("23:09:11", "second");
const duration4 = createDuration("P3Y6M4DT12H30M5S");
```

- [ ] averageDuration(duration[])
- [ ] maxDuration(duration[])
- [ ] minDuration(duration[])
- [ ] asDays(duration[])
- [ ] asWeeks(duration[])
- [ ] asSeconds(duration[])
- [ ] asMinutes(duration[])
- [ ] asHours(duration[])
- [ ] timer({start: typeof Date, end: typeof Date, loop: true, notify: 10})

```js
import { timer } from "germane";

const setTimer = timer({
  start: new Date("2019-11-11"),
  end: new Date("2019-12-31 23:11:00"),
  loop: true
});

setTimer.when();
setTimer.loop(
  1000,
  (
    { years, months, weeks, hours, days, minutes, ms },
    pause,
    stop,
    append,
    now,
    restart,
    ended
  ) => {
    console.log(years, months, weeks, hours, days, minutes, ms);
    if (year < 1) {
      stop();
    }
    if (ended()) {
      restart();
    }
  }
); //=>

stop();
restart();
now(); // returns the current date and time of the timer.
append(); // creates a new instance of the timer.
pause(); // calls the setTimer.now() gets the current value and stores it.
setTimer.loop(?duration, callBack(units, methods));
units = { years, months, weeks, hours, days, minutes, ms };
methods = { pause, stop, append, restart, now, ended };
// state issue.
/* function re-render itself at every loop */
/* calling setTimeout on it self */
/* or possibly the requestAnimationFrame */
```

- [x] germane(isoDate, timezone)
      **Architecture**

```js
import { germane } from "germane";

germane(ISO|DATE|RFC|ASP(JSON DATE)|TIMESTAMP, timezone, option={locale})

return:
locale // string(locale code)
timezone  // string(timezone name)
getLocalTime() // timestamp including timezone offset
getFullYear() // local year
getMonth() // local month
getDate() // local date
getHours() // local hour
getMinutes() // local minutes
getSeconds() // local seconds
getMilliseconds() // local ms
getDay() // local day
getWeek() // local week
getOrdinal() // local ordinal
getTimezoneOffset() // timezone offset
getTimezoneName() // timezone name
getUTCOffset() // utc offset as string
getMonthName() // locale month name
getWeekDay() // locale weekday
getTime() // utc timestamp
getUTCFullYear() // utc year
getUTCMonth() // utc month
getUTCDate() // utc date
getUTCHours() // utc hours
getUTCMinutes() // utc minutes
getUTCSeconds() // utc seconds
getUTCMilliseconds() // utc ms
getUTCDay() // utc day
isUTC() // boolean() if date is a utc or local (see docs)
toISOString() // isostring
toString() // converts date to string
valueOf() // timestamp

```

## Locale

- [x] af
- [x] en_US
- [x] en_GB
- [x] es
- [x] yo
- [x] de
- [x] fr

## Basic Usage

```javascript
import { germane, format, strftime, min, add, subtract } from "germane";

germane("2019-09-11 23:11:12.999Z");
germane("2019-W23-7");
germane(10e8);

format(
  new Date("2019-11-11 11:34:11.900Z", "EEEE, do MMMM, yyyy", { locale: fr })
);

format(
  germane("2019-11-11 11:34:11.900Z", "EEEE, do MMMM, yyyy", { locale: eo })
);

strftime(new Date("1900-11-09 17:00:12", "%A. %d %B %Y", { locale: enUS }));

min([
  new Date("2019-11-12"),
  new Date("1099-11-12 09:11"),
  germane("0200-11-11 12:11:00Z")
]);

add(new Date("1200-11-19"), {
  year: 250,
  month: 890,
  days: 45,
  hour: 33,
  minute: 467,
  second: 99,
  ms: 450
});

subtract(new Date("1936-12-04"), {
  year: 123,
  month: 67,
  days: 34,
  hour: 11,
  minute: 0,
  second: 12
});
```
