/** 
 * Compare two versions and return the comparison result.
 * if v1 is newer than v2, return -1
 * if v1 is older than v2, return 1
 * if v1 is the same with v2, return 0
 *
 * You can assume:
 * 1. all digits in the versions are greater or equal to 0
 * 2. the inputs will be valid strings
 **/

function compareVersion(v1, v2) {  
  const first  = v1.split('.');
  const sec    = v2.split('.');
  const tuplas = first.map( (e, i) => [ e?e:0, sec[i]?sec[i]:0] );
  const ltr = tuplas.map( a => a[0] < a[1] ? 1 : (a[0] > a[1]) ? -1 : 0 );
  console.log(ltr);  
  return ltr.find(a => a !== 0 ) || 0;
}

console.log(compareVersion("1.0.0", "1.0.1")) // 1
console.log(compareVersion("1", "1.0.0")) // 0
console.log(compareVersion("2.0.1", "2.0.10")) // 1
console.log(compareVersion("1.0.0", "2.0.0.13")) // 1
console.log(compareVersion("18.0", "0.0.0.4")) // -1
console.log(compareVersion("1.0.1.23", "1.0.11.1")) // 1
console.log(compareVersion("1.0.1.23", "1.0")) // -1
console.log(compareVersion("1.0.0", "1.0")) // 0
console.log(compareVersion("1.0.0.0", "1.0")) // 0
console.log(compareVersion("1.0.0.2", "1.0")) // -1