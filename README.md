***Here you find information about instalation the framework:
<a>https://docs.google.com/document/d/1eoIn6ZeV6LftKt1fpQflBeyg035zkQ2ztsb0wynwp18/edit</a>
# 1. Before the tests do it:
<h2>Setup</h2>
<p>Use npm to install Protractor globally with:</p>

<pre>npm install -g protractor</pre>
This will install two command line tools, <code>protractor</code> and <code>webdriver-manager</code>. Try running <code>protractor --version</code> to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

<pre>webdriver-manager update</pre>
Now start up a server with:

<pre>webdriver-manager start</pre>
This will start up a Selenium Server and will output a bunch of info logs. <br>Your Protractor test will send requests to this server to control a local browser. <br>You can see information about the status of the server at <a>http://localhost:4444/wd/hub</a>.

# 2. When you created new project:
<h2>Copy files</h2>
- package.json
- conf.js
- README.md

<p>Use CMD to install package.json:</p>

<pre>npm install</pre>

https://www.udemy.com/course/angularjs-protractor-tutorial/learn/lecture/4715512#overview
