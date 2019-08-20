let arr=[12,56,135,76,13,456]

let arr2= arr.map(function(item)  //map function takes function as an arguement

{
    return 100-item

})

console.log(arr2)

let arr3=arr.map(Math.sqrt)
console.log(arr3)