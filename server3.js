var http=require('http');
var url=require('url')


var server=http.createServer((req,res)=>{
console.log("Request Received")
res.writeHead(200)


var queryString=url.parse(req.url,true).query 
var Deadline =queryString.deadline
console.log(queryString)


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
},    
]
    for(var i=0;i<tasklist.length;i++){
        if(tasklist[i].deadline===Deadline){
res.write(`<div>
            <h1>${tasklist[i].title}</h1>
            <div>${tasklist[i].description}</div>
            <div>${tasklist[i].deadline}</div>
            </div>`
)
}
    }


res.end()
})
server.listen(8080)