var expect = require('chai').expect;
var BlogPage = require('../../pages/blog.page');

describe('Blog', function() {
  it('3 stories are featured in the home page', function() {
    BlogPage.open('/');
    // Verify there are 3 featured posts.
    expect(BlogPage.featuredPosts.value.length).to.equals(3);
  });
  it('Shares a story with the user in a blog post', function() {
    BlogPage.open('/blog/democratizing_ai_power/');
    // Verify that post loads the expected content
    expect(BlogPage.pageTitle()).to.equals('With Pulp | Digital Product Studio | Democratizing AI Power');
    // Verify that post loads content
    expect(BlogPage.postContent).to.equals(true);
  });
  it('Links related posts in the footer', function() {
    BlogPage.open('/blog/democratizing_ai_power/');
    // Verify that post loads related link
    expect(BlogPage.postFooter).to.equals(true);
  });
});
