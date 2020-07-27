# Primary bid Webdirverio tests

### Prerequsites to run:
- nodejs atleast v12.16.1
- WebdriverIO atleast 6 or higher
- Chrome version atleast 84.0.0 or higher

### Running the app
The environment variables need to be setup in:
`<root>/.env` 
or set the them on the OS level whichever is more convenient.

#### Run:
run: `npm install` from `<root>`
wdio needs to be used from the .bin directory (location of .bin directory may vary depending on environmen).
run: `./node_modules/.bin/wdio wdio.conf.js` from `<root>`

If there are any issues please refer to the following link:
https://webdriver.io/docs/gettingstarted.html#setup-your-project

#### Observation:

News Page title not consistent with with other page titles, page titles usually have `'PrimaryBid.com | <Information>'`

The news page has: `'PrimaryBid | News'`