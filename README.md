# Intro

Loggir is created to help fellow developers have a simple yet useful logging tool.

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
  log: true
});

logger.error("Some error"); // [Europe/London 1/20/2020, 23:00:45] [ERROR] Some error
logger.info("Some info"); // [Europe/London 1/20/2020, 23:00:45] [INFO] Some info
logger.warn("Some warn"); // [Europe/London 1/20/2020, 23:00:45] [WARN] Some warn
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

Directory path to save logs in, which will save logs inside provided path inside of the root of project.

Example: `{ path: 'logs' }`

##### fileName

Provide this to save your logs inside a file with give name, not providing will result a generate name with month-day-year.format file.

Example: `{ path: 'mylog' }`

##### format

Don't like to save your logs in .log? No problem, just provide the format (extension) and everything is set up!

Example: `{ format: 'txt' }` - defaults to `log`

##### separate

Tired of looking for errors in the same file as infos and warnings? We got you! just provide separate as `true` and loggir will log for you in different files!

Example: `{separate: true}` - defaults to `false`

##### timezone

If you would like to get logs in a different timezone from your server's, just provide your desired timezone. (find yours: https://momentjs.com/timezone/)

Example: `{timezone: 'Europe/London'}` - defaults to `local`

##### log

You probably should set this to `false`, but if you are having troubles with loggir or simply want to get some fancy console.log 's set log to true.

Example: `{log: false}` - defaults to `true`

# License - MIT
