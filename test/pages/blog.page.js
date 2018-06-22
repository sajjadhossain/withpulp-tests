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
      return browser.elements('#___gatsby > section > main > header > section > figure > ul > li');
    }
  },
  // Post content
  postContent:  {
    get: function () {
      return browser.isVisible('#covhouse > section:nth-child(2)');
    }
  },
  // Post footer
  postFooter:  {
    get: function () {
      return browser.isExisting('#___gatsby > section > footer');
    }
  }
});

module.exports = BlogPage;
