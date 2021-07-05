//require express
const express=require('express');
//set a port number
const port=8001;
//exclusive import of path from express framework
const path = require('path');

//import mongoose configuration file {connect to todo_list_db}
const db = require('./config/mongoose')
//import the Todo model created in ./models/todo in const Todo
const Todo = require('./models/todo')
//boot up express. express() is a function which creates object of express class.
//Reference:https://stackoverflow.com/questions/27599614/var-express-requireexpress-var-app-express-what-is-express-is-it
const app=express(); 
//require ejs
let ejs = require('ejs');
//set view engine key of app config as ejs to notify app that we are using ejs as our  view engine
app.set('view engine','ejs');
//Set views path as __dirname+/views to notify the application about the location of the folder from where we are going to render our webpages
app.set('views',path.join(__dirname,'/views'));
//We need to use express.urlencoded() function to handle qand manage POST and PUT request since we are sending data
app.use(express.urlencoded());
//To read external css file relative to home directory
app.use(express.static(__dirname ));
//listen to port 8001 for the application. To be set to 80 if deploying application as server {localhost:8001}
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    else{
        console.log('Server is running on port: ',port);
    }
})
//get data {app.get()} from the server on base address
app.get('/', function(req,res){
    Todo.find({},function(err,tasks){
        if(err){
            console.log('Error fetching data');
        }
        console.log("On home directory before pipelining tasks to ejs.");
        console.log(tasks);
        //sort in ascending order of dates
    }).sort({due_date: 'ascending'}).exec(function(err, tasks) { 
        if(err){
            console.log("Error caught",err);
            return;
        } 
        //render index.ejs in ./views/index.ejs as we declared __dirname/views are our views app config parameter. Also pass 'TODO LIST' as value of key title and tasks(LHS) as tasks object created by Todo.find() to our index.ejs to be rendered there dynamically
        return res.render('index', {
        title: "TODO LIST",
        tasks: tasks
    });
});
})
//POST the data to server to add entry to the database
app.post('/add',function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date,
        critical:req.body.critical
    }, function(err, xTodo){
        console.log(req.body);
        if(err){
            console.log('Error adding task', err);
            return;
        }
        console.log('New task added: ', xTodo);
        return res.redirect('back');
    })
})
//delete the entry from the database by reading query link as declared in index.ejs's button
app.get('/delete',function(req,res){
    console.log(req.query);
    let id = req.query.id;
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error deleting task");
            return
        }
        return res.redirect('back');
    })
})
//For missing dependencies
//npm init
//npm install ejs
//npm install express
//npm install nodemon
//npm install mongoose

//To start the server
//nodemon index.js 

//On Chrome browser
//Chrome: localhost:8001