// print function for use in other examples
// note many browsers define a global "print" function which opens an operating
// systems print dialog; this function would overwrite that
function print (label, value) {
    var output = '';

    // 2 params => 1st is label, bold it & add colon
    // 1 param => just print plain text string
    if (value !== undefined) {
        output += '<b>' + label + '</b>: ';
    } else {
        value = label;
    }

    output += value.toString();

    document.body.innerHTML += output + '<br>';
}
