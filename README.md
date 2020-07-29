# Primary bid Webdirverio tests

### Prerequisites to run:
- nodejs at least v12.16.1
- WebdriverIO at least 6 or higher
- Chrome version at least 84.0.0 or higher

### Running the app
The environment variables need to be setup in:

`.env`

Or set them on the OS level whichever is more convenient. If OS level is chosen please see `.env` for how variables are setup.

#### Run:
run: `npm install` from the application root

Once that's finished wdio needs to be used from the .bin directory (location of .bin directory may vary depending on environment).

run: `./node_modules/.bin/wdio wdio.conf.js` from application root

If there are any issues please refer to the following link:

https://webdriver.io/docs/gettingstarted.html#setup-your-project

#### Observations:

- News Page title not consistent with other page titles, page titles usually have `'PrimaryBid.com | '`

Reproduce: Navigate to the 'News' Page, The news page tab has: `'PrimaryBid | News'`

- 'Issuers' page not in the playground environment

Reproduce: From home page navigate to the 'Issuers' page, you are on the Production environment.

- 'Open Letter' page not in the mocked environment.

Reproduce: From home page navigate to the 'Open Letter' page.

#### Personal Observations/Notes:

- Sign up page line

Reproduce: Sign up page has a line above Sign up title, it looks a little too long when looking at it from a PC. from a Mobile phone it looks fine, advised to make it the same size as the form inputs. This will ensure the item looks more centered.

Notes: It is highly recommended to keep mocked/testing environments separate from live environments to avoid any major issues.
