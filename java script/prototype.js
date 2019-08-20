let p={
    a:10
}

let q=Object.create(p)
q.b=22

let r=Object.create(q)
r.c=39

console.log(p)
console.log(q)

console.log(r)
console.log(r.a)
console.log(r.b)
console.log(r.c)
console.log(q.a++)
console.log(r.a)
