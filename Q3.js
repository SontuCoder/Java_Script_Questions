//====================================================
// Interview Question: Count Occurrences of Character
//====================================================

// Task:
// write a function called countChar that takes two parameters:
//       a string and a character to count. The function should 
//       return the number of times the specified character appears in the string.


console.log(countChar2("MissIsSippi", "s")); // Output: 4


//todo Constraints:
// The function should handle both lowercase and uppercase characters.


function countChar(s,c){
    let s2 = s.toUpperCase();
    let s1 = s.toLowerCase();
    let count = 0;
    for(let i =0; i<s.length; i++){
        if(s1[i]===c || s2[i]===c){
            count++;
        }
    }
    return count;
}

// Method 2:-
function countChar2(s,c){
    let s1 = s.toLowerCase();
    let s2 = c.toLowerCase();
    let count = 0;
    for(let i =0; i<s1.length; i++){
        if(s1[i]===s2[0]){
            count++;
        }
    }
    return count;
}