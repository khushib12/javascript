let obj = {
a:10,
b:"hello",
c:true,
d:  {
      p:5,
      q:4,
       r:{
        x:"khushi"
         }
   }

}

console.log(obj.a)
console.log(obj.b)     //a,b,c are called properties
console.log(obj.c)
console.log(obj.d.r.x)
console.log(obj.k=11111111111) //adding data while printing
delete obj.b;      //deleting object
console.log(obj.b)