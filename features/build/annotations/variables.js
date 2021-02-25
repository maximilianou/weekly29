"use strict";
var theJson = '{ "x" : 20, "y" : 30}';
var coordinatesAny = JSON.parse(theJson); // any type
console.log(coordinatesAny);
var coordinates = JSON.parse(theJson); // 
console.log(coordinates);
var coordinatesErr = JSON.parse(theJson); // no error
console.log(coordinatesErr);
