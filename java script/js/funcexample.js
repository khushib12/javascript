function creategreeter(name){
    let firstname = name.split(" ")[0]

      function greeter(){
          console.log("hello  "   +   firstname)
      }

      return greeter();
}


creategreeter("khushi bansal");

