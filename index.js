// index.js
const express = require('express');
const app = express();
const port = 3000;


//setting the view engine and adding middlewaare lets us parse data from html forms 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


//making an empty array here
const tasks = [];

//empty array where the lists will be stored
app.get('/', (req, res) => {
  res.render('index', { tasks });
});


//add function
app.post('/add', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});

// index.js
// ... (Previous code)

app.post('/edit', (req, res) => {
    const oldTask = req.body.oldTask;
    const newTask = req.body.newTask;
    const index = tasks.indexOf(oldTask);
    
    if (index !== -1) {
      tasks[index] = newTask;
    }
    res.redirect('/');
  });
  

//delete function
app.post('/delete', (req, res) => {
  const taskToDelete = req.body.task;
  const index = tasks.indexOf(taskToDelete);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  res.redirect('/');
});

//startig port 
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
