var Page = require('./page');

// Subscribe Page class extending the Page interface
var SubscribePage = Object.create(Page, {
  // Page title
  pageTitle:  {
    value: function () {
      return browser.getTitle();
    }
  },
  // Home Button
  homeButton: {
    get: function () {
      return browser.element('div=WP');
    }
  },
  // Newsletter input
  subscribeInput:  {
    get: function () {
      return browser.element('input[type="email"]');
    }
  },
  // Fill in input with passed value
  fillInSubscribeInput:  {
    value: function (email) {
      this.subscribeInput.setValue(email);
    }
  },
  // Get value from input
  filledInSubscribeInput:  {
    value: function () {
      return this.subscribeInput.getValue();
    }
  },
  // Submit input
  submitButton:  {
    get: function () {
      return browser.elements('#___gatsby > section > main > footer > section.wrapper-gsYTop.bBFHOH > figure > div:nth-child(2) > form > div > button');
    }
  },
  submit: {
    value: function () {
      this.subscribeInput.click();
    }
  }
});

module.exports = SubscribePage;
