# Data Logging Service in Google Sheets (Node.js)

![CI](https://github.com/arghyadeep-k/google-sheets-logger/workflows/CI/badge.svg?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arghyadeep-k_google-sheets-logger&metric=alert_status)](https://sonarcloud.io/dashboard?id=arghyadeep-k_google-sheets-logger)
[![npm version](https://badge.fury.io/js/google-sheets-logger.svg)](https://badge.fury.io/js/google-sheets-logger) 
![npm bundle size](https://img.shields.io/bundlephobia/min/google-sheets-logger)
![Libraries.io SourceRank](https://img.shields.io/librariesio/sourcerank/npm/google-sheets-logger)
![Depfu](https://img.shields.io/depfu/arghyadeep-k/google-sheets-logger)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/google-sheets-logger)
![npm](https://img.shields.io/npm/dt/google-sheets-logger)
![NPM](https://img.shields.io/npm/l/google-sheets-logger?color=blue)


A simple Node.js module for logging in Google Sheets.

## Installation

[![NPM](https://nodei.co/npm/google-sheets-logger.png)](https://nodei.co/npm/google-sheets-logger/)

**Install from command line:**

`npm install --save google-sheets-logger`

Or

**Install via package.json:**

Add the following to your *package.json* file under dependencies

`"google-sheets-logger": "1.0.2"`

## Basic Usage

- Create a Google Sheets File and give access to the Service Account as described in the Authentcation secion.
- Add the following headers (case-sensitive) to your sheet:

  - Log Id
  - Log Message
  - Log Time

- Import the module and use as shown below.

```javascript
var GoogleSheetLogger = require("google-sheets-logger");
var creds = require("./google-generated-creds.json");

// Spreadsheet key is the long id in the sheets URL
var Logger = new GoogleSheetLogger("<Spreadsheet Key>", creds);

Logger.log("1", "Sample Log Message", "2019-10-08 12:49:44");

// When Timestamp is not passed, it adds the current time as the Timestamp of the Log Message by default.
Logger.log("1", "Sample Log Message with no Timestamp");

// To add logs in sheets other than the first one of your workbook, pass the sheet index as the 4th argument.
// Index starts at 1.
Logger.log("1", "Sample Log Message", "2019-10-08 12:49:44", 3);
```

## Authentication

IMPORTANT: Google recently deprecated their ClientLogin (username+password)
access, so things are slightly more complicated now. Older versions of this
module supported it, so just be aware that things changed.

### Service Account (recommended method)

This is a 2-legged oauth method and designed to be "an account that belongs to your application instead of to an individual end user".
Use this for an app that needs to access a set of documents that you have full access to.
([read more](https://developers.google.com/identity/protocols/OAuth2ServiceAccount))

**Setup Instructions**

1. Go to the [Google Developers Console](https://console.developers.google.com/project)
2. Select your project or create a new one (and then select it)
3. Enable the Drive API for your project

- In the sidebar on the left, expand **APIs & auth** > **APIs**
- Search for "drive"
- Click on "Drive API"
- click the blue "Enable API" button

4. Create a service account for your project

- In the sidebar on the left, expand **APIs & auth** > **Credentials**
- Click blue "Add credentials" button
- Select the "Service account" option
- Select "Furnish a new private key" checkbox
- Select the "JSON" key type option
- Click blue "Create" button
- your JSON key file is generated and downloaded to your machine (**it is the only copy!**)
- note your service account's email address (also available in the JSON key file)

5. Share the doc (or docs) with your service account using the email noted above

---

## Further possibilities & to-do

- Enable logging on public sheets.
- Create Header automatically using the module.

## Links

- <https://developers.google.com/google-apps/spreadsheets/>

## License

Google Sheets Logger is published under the MIT license. For more information, see the accompanying LICENSE file.

<br>

---
<br>

### PS: 
If you find this package useful, please [star](https://github.com/arghyadeep-k/google-sheets-logger) the project on Github. 

And, if you are willing to [buy me a coffee](https://ko-fi.com/arghyadeep), that would be awesome. :)
