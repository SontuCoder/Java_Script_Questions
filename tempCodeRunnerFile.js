// ==========================================
// Programming Question: Hash Tag Generator
// ==========================================

// You are required to implement a function generateHash that 
// generates a hash tag from a given input string. The hash tag 
// should be constructed as follows:
//    1. The input string should be converted to a hash tag format, 
//         where each word is capitalized and concatenated together without spaces.
//    2. If the length of the input string is greater than 280 
//         characters or if the input string is empty or contains only whitespace, 
//         the function should return false.
//    3. Otherwise, the function should return the generated hash tag prefixed with #



console.log(generateHash("my name is thapa technical"));
//Op: #MyNameIsThapaTechnical

function generateHash(s){
    s= s.trim();
    if(s.length>280 || s.length<1) return false;
    else{
        let strArr=s.split(" ");
        strArr.map((item)=>{
            item[0]=String.fromCharCode(item.charCodeAt(0)-32);
            console.log(item);
        });
        let str = strArr.join("")
        return str;
    }
}