import Browser from 'zombie';
import '../../src/server';

const browser = new Browser({ site: `http://localhost:${process.env.PORT}` });

describe('Not found page', () => {
  it('is displayed for an invalid url', (done) =>
    browser.visit('/i-dont-exist', () => {
      browser.assert.success();
      browser.assert.element('.t-not-found');
      done();
    })
  );
});
