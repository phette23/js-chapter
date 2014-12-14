// the value that the typeof operator returns depends on how a variable
// received its value; if a constructor function like String() or Number()
// was used, typeof will report "object" and not the expected type.
// This is why, in general, it is best to avoid JavaScript's built-in
// constructor functions and instead use literal values.

// prints "string", predictably
print('<code>typeof "string"</code>', typeof "string literal");
// prints "object", unexpectedly
print('<code>typeof new String("object")</code>', typeof new String("object"));
// typeof also considers arrays, *even array literals like []*, to be objects
print('<code>typeof []</code>', typeof []);
