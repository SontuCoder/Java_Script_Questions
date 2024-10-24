// ================================
// Count frequence of Each elements
// ================================

console.log(count([1,2,3,2,3,1,1,4]))//{"1":3, "2":2, "3":2, "4":1}


function count(arr){
    let c ={};
    for(let i = 0;i<arr.length; i++){
        c[arr[i]] = (c[arr[i]] || 0) +1;
    }
    return c;
}