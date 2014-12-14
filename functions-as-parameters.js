/////////////////////////////////////////////
// first, we define a processData function //
/////////////////////////////////////////////

// the data processing function accepts three parameters:
//      the data to be processed as its first parameter
//      a function to be called upon successful processing as its second
//      & finally a function to be called upon any error as its third
function processData (data, onSuccess, onError) {
    // the output variable will hold our processed data
    var output;

    // try {} catch {} is JavaScript's means for working around errors
    // it will "try" to execute the first code block and then execute
    // the "catch" block if an error occurs
    try {
        // JSON is a data interchange format
        // for which JavaScript has built-in support as of ECMAScript 5
        output = JSON.parse(data);
        onSuccess(output);
    } catch(error) {
        onError(error);
    }
}

/////////////////////////////////////////////////
// now we define our success & error functions //
/////////////////////////////////////////////////

// this success function will display the data on an HTML
// page, performing a very small amount of formatting
// it is passed the processed data as its first & only parameter
function printData (data) {
    var key;

    for (key in data) {
        print(key, data[key]);
    }
}

// this error handler will pop up an alert in the browser
function alertError (error) {
    alert(error.message);
}

// this is another error handler
// rather than printing an alert, it quietly logs the error
// to the browser's JavaScript console where most users
// will not see it but developers could later inspect it
function logError (error) {
    console.log(error);
}

///////////////////////////////////////////////////////////
// now we actually execute some code using our functions //
// up until now, we've just been defining functions      //
// nothing has actually been run                         //
///////////////////////////////////////////////////////////

// we define some valid & invalid JSON data
var validData = '{ "Functions": "awesome in JavaScript", "Global Variables": "not so much"}';
var invalidData = 'this is some invalid data that will trigger a JSON parsing error';

// we'll call processData three times to demonstrate all three functions we wrote

// since data is valid, it will be printed
processData(validData, printData, alertError);
// since data is invalid and we used alertError, the error will be alerted
processData(invalidData, printData, alertError);
// since data is invalid and we used logError, the error will be quietly logged
processData(invalidData, printData, logError);

// if you uncomment this script in the included index.html
// three things happen:
//      1. the valid data is printed
//      2. a pop-up alert notifies you of an error
//      3. a second error is logged in the browser's developers' tools
