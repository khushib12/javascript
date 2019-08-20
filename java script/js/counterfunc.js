function kcounter(initval,delta)
{
    let val=initval

    let counter={

        incr : function (){
            val+=delta;
        },

        decr : function(){
            val-=delta;
        },

        show : function(){

            console.log(val)
        }

     }  

     return counter
}


let a=kcounter(50,5);

a.show()
a.incr()
a.incr()
a.show()
a.decr()
a.show()

console.log(typeof a)

console.log(typeof a.show)

console.log(typeof a.show())