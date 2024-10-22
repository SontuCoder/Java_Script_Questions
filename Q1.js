// ===============================================
// Programming Question: Longest Word in a Steing
// ===============================================

///Q: write a function FindLongestword that takes a string as input 
//    and returns the longest word in the string. If there are multiple 
//    longest words, reture the first one encountered.

// Constraints:
//    1. The Input string may contain alphabetic characters,
//       digits, spaces, and punctuation.
//    2. The input string is non-empty.
//    3. The input strang may contain multiple words separated by spaces.
// Note:
//       If the input string is empty or contains only whitespace, 
//     the function should returs an false.
//       The fonction should ignore leading and trailing whitespace 
//     when determining the Longest word.


console.log(
FindLongestWord2(" sxabj bib bj j ;kjknjj kjnkj kkjkj ")
);

// Method 1:
function FindLongestWord(s){
    s=s.trim();
    if(s.length===0) return false;
    else{
        let longestWord = "";
        let lenWord=0
        let word="";
        let lenCurrWord=0
        for(let i=0; i<s.length;i++){
            if(s[i]===" "){
                if(lenWord<lenCurrWord){
                    longestWord=word;
                    lenWord=lenCurrWord;
                }
                lenCurrWord=0;
                word="";
            } else {
                lenCurrWord+=1;
                word+=s[i];
            }
        }
        return longestWord;
    }
}

// Method 2:
function FindLongestWord2(s){
    s=s.trim();
    if(s.length===0) return false;
    else{
        let strArr = s.split(" ");
        // console.log(strArr);
        let longestWord = "";
        let lenWord=0;
        strArr.forEach(ele => {
            if(ele.length >lenWord){
                lenWord=ele.length;
                longestWord=ele;
            }
        });
        return longestWord;
    }
}