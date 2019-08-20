let arr=[6,3,9,1,7,2]
console.log(arr.sort())

let arrn=[6,3,9,1,7,2,14,26,35]
//js by default sorts in lexographical 

function compare(a,b)
{
    return a-b
}

let sortedarr=arrn.sort(compare)

console.log(sortedarr)