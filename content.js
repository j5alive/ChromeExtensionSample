
/*
 * Wire up and configure Raygun in the content page.
 */
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    // configure Raygun
    Raygun.init('[Add your API key]', { apiUrl: 'https://api.raygun.com' }).attach();
    Raygun.setUser('demo@example.net', false, 'demo@example.net', 'Ronald', 'Ronald Raygun', 'BAE62917-ACE8-ab3D-9287-B6A33B8E8C55');

    // Wire up the button clicks
    var button = document.getElementById('errorButton1');
    button.addEventListener('click', generateErrorInBackground);

    var button2 = document.getElementById('errorButton2');
    button2.addEventListener('click', generateErrorInContent);
  }
};

/*
 * This sends a message to the backgroud script that instructs it to generate an error,
 */
function generateErrorInBackground() {
  chrome.runtime.sendMessage('error1');
}

/*
 * Example of content script method that throws an unhandled error.
 * This will be caught by the Raygun global error handler (no need for try catch block)
 */
function generateErrorInContent() {
  // Expected TypeError: brain.trigger is not a function
  var brain = {};
  brain.trigger('eyes.close');
}