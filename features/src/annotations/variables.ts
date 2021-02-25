import { add } from './functions'

const theJson = '{ "x" : 20, "y" : 30}';
const coordinatesAny = JSON.parse(theJson); // any type
console.debug(coordinatesAny);
const coordinates: { x: number, y: number} = JSON.parse(theJson); // 
console.debug(coordinates);
const coordinatesErr: { x: number, y: string} = JSON.parse(theJson); // no error
console.debug(coordinatesErr);


console.debug(add(coordinates.x, coordinates.y));