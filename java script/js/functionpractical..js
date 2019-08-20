function createcounter(initval,delta){
    let val=initval;
    function count(){
        val=val+delta;
        return val;
    }
    
    return count;
}

let fivecount = createcounter(5,5);

console.log(fivecount());
console.log(fivecount());
console.log(fivecount());