# ChromeExtensionSample
A sample Chrome extension that demonstrates how to use Raygun to capture errors in your Chrome extension.
Sign up for a [Raygun trial] (https://raygun.com/products/crash-reporting?utm_source=github&utm_medium=codesample&utm_campaign=j5alive) if you don't already have one.

#Configuration
Make sure you add in your own Raygun API key and if known, configure the user details.

```javascript
Raygun.init('[Add your API key]', { apiUrl: 'https://api.raygun.com' }).attach();
Raygun.setUser('demo@example.net', false, 'demo@example.net', 'Ronald', 'Ronald Raygun', 'BAE62917-ACE8-ab3D-9287-B6A33B8E8C55');
```