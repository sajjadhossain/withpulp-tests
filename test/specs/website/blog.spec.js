var expect = require('chai').expect;
var BlogPage = require('../../pages/blog.page');

describe('Blog', function() {
  it('2 studies are featured in the home page', function() {
    BlogPage.open('/');
    // Verify there are 2 featured posts.
    expect(BlogPage.featuredPosts.value.length).to.equals(2);
  });
  it('Shares a story with the user in a blog post', function() {
    BlogPage.open('/work/covenant-house');
    // Verify that post loads the expected content
    expect(BlogPage.pageTitle()).to.equals('With Pulp | A Socially Responsible Digital Studio');
    // Verify that post loads content
    expect(BlogPage.postContent).to.equals(true);
  });
});
