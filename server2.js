var http=require('http');
var server=http.createServer((req,res)=>{
    console.log("request received")
    res.writeHead(200)
    
    var tasklist = [
        {tasktitle : 'Task 1',
         taskdescription : 'Description of task 1',
         taskdeadline : 'today'
        },
        
        {tasktitle : 'Task 2',
         taskdescription : 'Description of Task 2',
         taskdeadline : 'today'
      },
        
        {tasktitle : 'Task 3',
         taskdescription : 'Description of Task 3',
         taskdeadline : 'today'
      },
        
        {tasktitle : 'Task 4',
         taskdescription : 'Description of Task 4',
         taskdeadline : 'today'
      }
    ];
        for(var i=0;i<tasklist.length;i++){ 

        res.write( `<div>
                    <h1>${tasklist[i].tasktitle}</h1>
                    <h4>${tasklist[i].taskdescription}</h4>
                    <h3>${tasklist[i].taskdeadline}</h3>
                </div>` 

     );
        }


    res.end()
})
server.listen(8080)