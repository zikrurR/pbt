const page = require('../loaders/page');
const assert = require('assert');
const expect = require('expect');
const emailFactory = require('../data/emailFactory');

describe('Application login', () => {
    it('should login with valid credentials', () => {
        page.open();
        
    });
});

describe('About us', () => {
    it('The About Us link in the header navigates to the About Us page', () => {
        const link = $('=About Us');
        link.click();
        assert.equal(link.getTitle(),'PrimaryBid.com | About Us, Our Mission');
    });
});

describe('FAQs', () => {
    it('The FAQs link in the header navigates to the Frequently Asked Questions page', () => {
        const link = $('=FAQs');
        link.click();
        assert.equal(link.getTitle(),'PrimaryBid.com | Invest in new Share Offerings from listed companies');
    });
});

describe('The News', () => {

    it('The News link in the header navigates to the News page ', () => {
        page.open('');
        const link = $('=News');
        link.click();
        // this is not consistent with other page titles, page titles usually have PrimaryBid.com | <Information>
        assert.equal(link.getTitle(),'PrimaryBid | News');
        });

    it('The news page contains news items for Featured Content', () => {
        const elem = $('h4=Featured Content');
        expect(elem).toBeExisting();
        });

    it('The news page contains news items for All Content', () => {
        const elem = $('h4=All Content');
        expect(elem).toBeExisting();
        });


    it('The All Content section can be filtered to Webinar', () => {
        const button = $('div.pb_news_filter__pill_38Xk');
        const checkBox = $('div=Webinar');

        button.click();
        checkBox.click();

        assert.equal(checkBox.getText(),'Webinar');
        });
});

describe('Sign up', () => {

    it('The Sign Up button in the header navigates to the Sign up page', () => {
        const link = $('a=Sign up');
        link.click();
        assert.equal(link.getTitle(),'PrimaryBid.com | Invest in new Share Offerings from listed companies');
    });

    it('Test data submitted to the sign up form navigates to the user details page', () => {
        const email = $('[name="email"]');
        const pass = $('[name="password"]');
        const cPass = $('[name="confirmPassword"]')
        const link = $('span=Submit');

        const gEmail = emailFactory.generateEmail();
        emailFactory.checkGen(email,gEmail);

        pass.addValue(emailFactory.generatePass());
        cPass.addValue(emailFactory.generatePass());

        browser.pause(3000);
        link.click();

        const pageTitle = $('h1=Welcome to PrimaryBid');
        expect(pageTitle).toBeExisting();
        assert.equal(link.getTitle(),"PrimaryBid.com | Invest in new Share Offerings from listed companies");


    });

    it('The Sign Up page validates that the passwords entered must match', () => {
        page.open();
        const logOut = $('a.button.button--narrow.button--teal');
        logOut.click();
        const signUp = $('a=Sign up');
        signUp.click();
        const email = $('[name="email"]');
        const pass = $('[name="password"]');
        const cPass = $('[name="confirmPassword"]')
        const link = $('span=Submit');
        const gEmail = emailFactory.generateEmail();
        
        emailFactory.checkGen(email,gEmail);

        pass.addValue(emailFactory.generatePass());
        cPass.addValue(emailFactory.generatePass('flag'));
        link.click();
        browser.pause(2000);
        const error = $('span=Passwords do not match');
        expect(error).toBeExisting();
        });

    it('The Sign Up page requires a valid email address', () => {
        const email = $('[name="email"]');
        const pass = $('[name="password"]');
        const cPass = $('[name="confirmPassword"]')
        const link = $('span=Submit');
        const gEmail = emailFactory.generateEmail('flag');
        emailFactory.checkGen(email,gEmail,true);

        pass.addValue(emailFactory.generatePass());
        cPass.addValue(emailFactory.generatePass());
        link.click();
        browser.pause(2000);
        const error = $('span=The email you have entered is not valid');
        expect(error).toBeExisting();
    });
});