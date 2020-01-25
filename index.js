const nodeFs = require("fs");
const nodePath = require("path");
const makeDir = require("make-dir");

const prefix = "\x1b[34m [LOGGIR] \x1b[0m";

class Logger {
  constructor({
    name = "anonymous",
    path = __dirname,
    format = "log",
    fileName = "",
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
    separate = false,
    log = false
  }) {
    this.log = log;
    this.name = name;
    this.path = nodePath.join(path);
    this.fileName = fileName;
    this.timezone = timezone;
    this.format = format;
    this.separate = separate;

    if (!this.fileName || this.fileName === "") this.fileName = undefined;

    // Logging
    if (this.log) {
      if (this.fileName) {
        cLog(`Logs will be saved in file: '${this.fileName}'`);
      }
      if (this.perDay) {
        cLog(`Logs will be saved in different file each day.`);
      }
      cLog(`Directory to save logs to: '${this.path}'`);
    }
  }

  async error(text = "You need to enter text in order to log it") {
    await checkDir(this.path);
    return new Promise((resolve, reject) => {
      const type = "error";
      const { fileName, date } = getName(
        this.fileName,
        this.timezone,
        this.format,
        this.separate,
        type
      );
      const info = `\n[${this.timezone} ${date}] [${
        this.name
      }] [ERROR] ${JSON.stringify(text)}`;
      nodeFs.appendFile(nodePath.join(this.path, fileName), info, err => {
        if (err) {
          reject(err);
          return;
        }
        if (this.log) cLog(`new log saved to ${fileName}`);
        resolve();
      });
    });
  }

  async info(text = "You need to enter text in order to log it") {
    await checkDir(this.path);
    return new Promise((resolve, reject) => {
      const type = "info";
      const { fileName, date } = getName(
        this.fileName,
        this.timezone,
        this.format,
        this.separate,
        type
      );
      const info = `\n[${this.timezone} ${date}] [${
        this.name
      }] [INFO] ${JSON.stringify(text)}`;
      nodeFs.appendFile(nodePath.join(this.path, fileName), info, err => {
        if (err) {
          reject(err);
          return;
        }
        if (this.log) cLog(`new log saved to ${fileName}`);
        resolve();
      });
    });
  }

  async warn(text = "You need to enter text in order to log it") {
    await checkDir(this.path);
    return new Promise((resolve, reject) => {
      const type = "warn";
      const { fileName, date } = getName(
        this.fileName,
        this.timezone,
        this.format,
        this.separate,
        type
      );
      const info = `\n[${this.timezone} ${date}] [${
        this.name
      }] [WARN] ${JSON.stringify(text)}`;
      nodeFs.appendFile(nodePath.join(this.path, fileName), info, err => {
        if (err) {
          reject(err);
          return;
        }
        if (this.log) cLog(`new log saved to ${fileName}`);
        resolve();
      });
    });
  }
}

function getName(fileName, timezone, format, separate, type) {
  const date = new Date().toLocaleString("en", {
    timeZone: timezone,
    hour12: false
  });
  if (fileName && fileName !== "") {
    if (!separate) return { fileName: `${fileName}.${format}`, date };
    return { fileName: `${fileName}-${type}.${format}`, date };
  }
  const [day, month, year] = date.replace(",", "/").split("/");
  if (!separate) return { fileName: `${month}-${day}-${year}.${format}`, date };
  return { fileName: `${month}-${day}-${year}-${type}.${format}`, date };
}

function cLog(...args) {
  return console.log(prefix, ...args);
}

async function checkDir(path) {
  await makeDir(path);
}

module.exports = Logger;
