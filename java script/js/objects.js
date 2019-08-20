let obj ={
    anum : 123,
    astring:"abc",
    afunction: function(){
        console.log(this.anum + this.astring)
    }
}

console.log(obj.afunction())