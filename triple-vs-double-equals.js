// == & === have subtle but important differences
// below the number 0 is compared with both empty strings and the string "0"
// number 0 double-equals both the empty string and string "0"
// but it does NOT triple-equal either because number 0 has type number
// while both empty string and string "0" have type string
print('<code>0 == ""</code>', 0 == "");
print('<code>0 == "0"</code>', 0 == "0");
print('<code>0 === ""</code>', 0 === "");
print('<code>0 != ""</code>', 0 != "");
print('<code>0 != "0"</code>', 0 != "0");
print('<code>0 !== "0"</code>', 0 !== "0");
