// A page interface
function Page () {}

Page.prototype.open = function (path) {
  // Open a URL passed
  browser.url(path);
  // Pause for async
  browser.pause(1000);
};

module.exports = new Page();
