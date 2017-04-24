import Browser from 'zombie';
import { expect } from 'chai';

import '../../src/server';


const browser = new Browser({ site: `http://localhost:${process.env.PORT}` });

describe('Main menu', () => {
  it('loads home page and navigate to contact us', (done) =>
    browser.visit('/', () => {
      browser.assert.success();
      browser.assert.status(200);
      browser.assert.element('.t-home');
      browser.clickLink('.t-contact-us-link', (err) => {
        expect(err).to.equal(undefined);
        browser.assert.success();
        browser.assert.status(200);
        browser.assert.element('.t-contact-us');
        done();
      });
    })
  );
});
