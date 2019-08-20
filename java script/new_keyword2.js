function person(name,age)
{
    this.firstname=name.split(" ")[0]
    this.lastname=name.split(" ")[1]
    this.age=age;
    this.isadult=function() {return age>10}
}

let p= new person("john smith",34)

console.log(p)
console.log(p.isadult())