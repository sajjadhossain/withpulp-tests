var expect = require('chai').expect;
var HomePage = require('../../pages/home.page');

describe('WithPulp', function() {
  // Test the home page loads
  it('Takes the user to the home page', function() {
    HomePage.open('/');
    // Verify the page title
    expect(HomePage.pageTitle()).to.equals('With Pulp | A Socially Responsible Digital Studio')
    // Verify the header
    expect(HomePage.mainHeader()).to.equals('With Pulp\nA Socially Responsible Digital Studio.')
    // // Verify the tag line
    expect(HomePage.tagline()).to.equals('A Socially Responsible Digital Studio.')
  });
  // Test the different sections all load
  it('Tells the user about the agency', function() {
    // Verify the about section is visible
    expect(HomePage.aboutSection).to.equals(true);
  });
  it('Tells the user about the team', function() {
    // Verify the about section is visible
    expect(HomePage.teamSection).to.equals(true);
  });
  it('Tells the user about our partners', function() {
    // Verify the partners section is visible
    expect(HomePage.partnersSection).to.equals(true);
  });
  it('Allows the reader to read some blog posts', function() {
    // Verify the blog section is visible
    expect(HomePage.blogSection).to.equals(true);
  });
  it('Allows the user to subscribe for our newsletter', function() {
    // Verify the newsletter section is visible
    expect(HomePage.newsletterSection).to.equals(true);
  });
  it('Generates a quote in the footer', function() {
    // Verify the footer is visible
    expect(HomePage.footer).to.equals(true);
  });
});
