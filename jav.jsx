                                        // ....... My Javascript Notes.....//
// SORT FUNCTION
// Sorts an array in place. This method mutates the array and returns a reference to the same array.
// Takes one parameter to determine the order of the elements in the array. If nothing is passed the elements are return in ascending order ASCII characters


// sorting numbers
num=[1234,3,45,2,10,01]

function compare(a,b) {
    return (a-b)
}
console.log(num.sort(compare))

// creating a uniue array thst counts how many times a word exists in a given array
var words=["abide","abide","abide","ability","accept","according","according","according","act","acts","acts","acts","actually","acute"]
unique=[[words[0],1]]
uniqueIndex=0 // this is the position of the word in the words array

for (let i = 1; i < words.length; i++ ) {
    if (words[i] === words[i-1] ) {
    // Increase the duplicate count by 1
    unique[uniqueIndex][1]++;
    } else {
    // Add a new word to the unique array
    uniqueIndex++;
    unique[uniqueIndex] = [words[i], 1];
    } }

console.log(unique)


// sort the unique array starting with word with highest count fisrt and so on
function comp(a,b){
    return b[1]-a[1]
}

console.log(unique.sort(comp))