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
      var header = browser.getText('h1[class="title"]')[1];

      return header;
    }
  },
  // Tag Line
  tagline:  {
    value: function () {
      return browser.getText('small[class="sub description"]');
    }
  },
  // About Section
  aboutSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="19"]');
    }
  },
  // Team Section
  teamSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="40"]');
    }
  },
  // Experience Section
  experienceSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="61"]');
    }
  },
  // Partners Section
  partnersSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="88"]');
    }
  },
  // Skills Section
  skillsSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="121"]');
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
      return browser.isVisible('section[data-reactid="174"]');
    }
  },
  // Contact Section
  contactSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="210"]');
    }
  },
  // Newsletter Section
  newsletterSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="220"]');
    }
  },
  // Footer
  footer:  {
    get: function () {
      return browser.isVisible('footer');
    }
  }
});

module.exports = HomePage;
