// JavaScript will return "undefined" instead of throwing an error
// when an object property that does not exist is accessed

// all browsers have a global "navigator" object
// this tests to see if the navigator object has a "geolocation"
// property which can give us information about a user's location
// we can then decide to use this information if it exists
if (navigator.geolocation) {
    // geolocation's getCurrentPosition method accepts a callback
    // function as a parameter, another example of asynchronous
    // programming and JavaScript's first-class functions
    navigator.geolocation.getCurrentPosition(function (position) {
        print('latitude', position.coords.latitude);
        print('longitude', position.coords.longitude);
        print('accuracy', position.coords.accuracy);
    });
} else {
    // no geolocation available, work around its absence
    print('No geolocation. We cannot figure out where you are!');
}

// note: most (perhaps all?) browsers don't allow access to geolocation
// from local files, only from web servers. So to see this example in
// action you may need to load it onto a web server or run a local
// web server (for instance, MAMP, WAMP, or Python's built-in
// SimpleHTTPServer which can be run from a command prompt with
// "python -m SimpleHTTPServer" if you have Python installed).

// this ability to test for specific features is extremely useful on the web
// where new features are introduced frequently but do not have universal
// browser support, so code must first test to see if a feature exists
// before using it and then provide a fallback if it does not exist

// a second example where someNewBrowserFeature doesn't exist
if (navigator.someNewBrowserFeature) {
    // in here we know the new feature exists & so we can work with it
} else {
    print('<code>someNewBrowserFeature</code> isn\'t implemented in this browser yet, bummer :(');
}
