var http=require('http')
var url=require('url')

var server=http.createServer((req,res)=>{
    console.log("Request Received")

var queryString=url.parse(req.url ,true).query
var Deadline=queryString.deadline


    var tasklist=[
        {
            title : "Task1",
            description : "Description of Task 1",
            deadline : "tommorow",
        },
        
        {
        title : "Task2",
        description : "Description of Task 2",
        deadline : "today",
    },
    {
        title : "Task3",
        description : "Description of Task 3",
        deadline : "tommorow",
    },
    {
        title : "Task4",
        description : "Description of Task 4",
        deadline : "today",
    }    
    ]
    var responsearray=[]
        for(i=0;i<tasklist.length;i++){
          var currenttask=tasklist[i];
    if(currenttask.deadline===Deadline){
      responsearray.push(currenttask)
        var StringArray=JSON.stringify(responsearray)
        
        
        res.write(StringArray)
        res.end()
    
    }
}
    
    res.end();
    
})

server.listen(8080)