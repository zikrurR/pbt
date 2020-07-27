const config = require('../config/config');

class Page {

    open (page=''){
    return browser.url(`https://${config.login}:${config.pass}@${config.domain}/${page}`);
    }
}

module.exports = new Page();

