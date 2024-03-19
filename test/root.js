global.expect = require('expect');
const { JSDOM } = require('jsdom');
const path = require('path');

before(function(done) {
  const html = '<!DOCTYPE html><html><body></body></html>';
  const jsdomConfig = {
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost'
  };

  const dom = new JSDOM(html, jsdomConfig);
  const virtualConsole = dom.window.virtualConsole;

  // Setting up global variables for testing environment
  global.window = dom.window;
  global.document = dom.window.document;
  global.navigator = dom.window.navigator;
  global.console = dom.window.console;

  done();
});
