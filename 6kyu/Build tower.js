// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)



// Solution

function towerBuilder(nFloors) {
    let result = [], maxLength = 2 * nFloors - 1;

    for (let i = nFloors; 0 < i; i--) {
        let ele = '*'.repeat(2 * i - 1);
        ele = ele.length < maxLength ? ' '.repeat((maxLength - ele.length) / 2) + ele + ' '.repeat((maxLength - ele.length) / 2) : ele;
        result.unshift(ele);
    }
    return result
}