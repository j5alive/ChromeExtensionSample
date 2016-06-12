
/*
 * On install/update of plugin configure Raygun
 */
chrome.runtime.onInstalled.addListener(function () {
  Raygun.init('[Add your API key]', { apiUrl: 'https://api.raygun.com' }).attach();
  Raygun.setUser('demo@example.net', false, 'demo@example.net', 'Ronald', 'Ronald Raygun', 'BAE62917-ACE8-ab3D-9287-B6A33B8E8C55');
});

/*
 * Example of receiving a message that throws an unhandled error.
 * A try catch block here is required as there is no global error handler.
 */
chrome.runtime.onMessage.addListener(function (message) {
  executeWithRaygunHandling(function() {
    if (message === 'error1') {
      // Expected ReferenceError: brain is not defined
      brain.trigger('eyes.open');
    }
  });
});

/*
 * Utility method to reduce try catch code.
 */
function executeWithRaygunHandling(fn) {
  try {
    fn();
  } catch (e) {
    Raygun.send(e);
  }
}