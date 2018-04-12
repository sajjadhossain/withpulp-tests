var Page = require('./page');

// Blog Page class extending the Page interface
var BlogPage = Object.create(Page, {
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
  // Blog Section
  blogSection:  {
    get: function () {
      return browser.isVisible('section[data-reactid="174"]');
    }
  },
  // Posts featured
  featuredPosts:  {
    get: function () {
      return browser.elements('ul[data-reactid="182"] > li');
    }
  },
  // Post content
  postContent:  {
    get: function () {
      return browser.isVisible('#democratizing_ai_power > article');
    }
  },
  // Post footer
  postFooter:  {
    get: function () {
      return browser.isExisting('footer > figure.next.figure');
    }
  }
});

module.exports = BlogPage;
