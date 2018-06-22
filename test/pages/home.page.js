var Page = require('./page');

// Home Page class extending the Page interface
var HomePage = Object.create(Page, {
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
  // Header
  mainHeader:  {
    value: function () {
      var header = browser.getText('#___gatsby > section > main > header > figure > h1');

      return header;
    }
  },
  // Tag Line
  tagline:  {
    value: function () {
      return browser.getText('#___gatsby > section > main > header > figure > h1 > small');
    }
  },
  // About Section
  aboutSection:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > section:nth-child(2)');
    }
  },
  // Team Section
  teamSection:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > section:nth-child(5)');
    }
  },
  // Partners Section
  partnersSection:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > section:nth-child(3)');
    }
  },
  // Tech Section
  techSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="140"]');
    }
  },
  // Blog Section
  blogSection:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > section:nth-child(6)');
    }
  },
  // Newsletter Section
  newsletterSection:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > footer > section.wrapper-gsYTop.bBFHOH > figure');
    }
  },
  // Footer
  footer:  {
    get: function () {
      return browser.isVisible('#___gatsby > section > main > footer');
    }
  }
});

module.exports = HomePage;
