function task(done){
    console.log("doing a task")
    done();
}


task(function()
{
    console.log("did a task");
})


console.log("task done")
