# Installation

Loggir is created to help fellow developers have a simple yet useful logging tool.

```
npm i --save loggir
```

# Usage

Simply create a new instance of Loggir and start logging!

```javascript
const Loggir = require("./index");

const logger = new Loggir({
  name: "api",
  path: "logs",
  fileName: "myLogs",
  format: "log",
  separate: true,
  timezone: "Europe/London",
  log: false
});

(async () => {
  await logger.error("Some error"); // [Europe/London 1/25/2020, 01:21:57] [api] [ERROR] "Some error"
  await logger.info("Some info"); // [Europe/London 1/25/2020, 01:21:57] [api] [INFO] "Some info"
  await logger.warn("Some warn"); // [Europe/London 1/25/2020, 01:21:57] [api] [WARN] "Some warn"
})();
```

# Methods

##### .error(text)

Logs an error with given `text`

##### .info(text)

Logs an info with given `text`

##### .warn(text)

Logs a warn with given `text`

# Options

##### name

This is for you to know which logger this is.

Example: `{ name: 'api' }`

##### path

Directory path to save logs in, prior to where loggir is launching from.

Example: `{ path: 'logs' }`

##### fileName

Provide this to save your logs inside a file with the given name, not providing will result in an auto-generated name with `month-day-year.format` file.

Example: `{ fileName: 'mylog' }`

##### format

Don't like to save your logs in .log? No problem, just provide the format (extension) and everything is set up!

Example: `{ format: 'txt' }` - defaults to `log`

##### separate

Tired of looking for errors in the same file as infos and warnings? We got you! just provide separate as `true` and loggir will log for you in separate files!

Example: `{separate: true}` - defaults to `false`

##### timezone

If you would like to get logs in a different timezone from your server's, just provide your desired timezone. (find yours: https://momentjs.com/timezone/)

Example: `{timezone: 'Europe/London'}` - defaults to `local`

##### log

You probably should set this to `false`, but if you are having troubles with loggir or simply want to get some fancy console.log 's set log to true.

Example: `{log: false}` - defaults to `true`

# License - MIT
