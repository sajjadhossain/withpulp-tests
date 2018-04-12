var expect = require('chai').expect;
var SubscribePage = require('../../pages/subscribe.page');

describe('Newsletter', function() {
  it('Allows user to submit email and subscribe to our newsletter', function() {
    var randomNumber = Math.random();
    var testEmail = 'sajjad+' + randomNumber + '@withpulp.com';
    SubscribePage.open('/');
    // Verify there is a newsletter section
    expect(SubscribePage.newsletterSection).to.equals(true);
    // Provide test email
    SubscribePage.fillInSubscribeInput(testEmail);
    // Verify that the input and output match
    expect(SubscribePage.filledInSubscribeInput()).to.equals(testEmail);
    // Submit the form
    SubscribePage.submit();
  });
});
