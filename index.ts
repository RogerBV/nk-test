import express from 'express';
const app = express();

let tasks = [{
  "id": 1,
  "title": "create a the skeleton of the new module",
  "completed": false
},
{
  "id": 2,
  "title": "Implement the new ui format",
  "completed": false
},
{
  "id": 3,
  "title": "create the new endpoint",
  "completed": false
},
{
  "id": 4,
  "title": "create the put method",
  "completed": false
}]


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/tasks', (requeriment, response) => {
  response.json(tasks)
})

app.post('/tasks', (request, response) => {
  const { id, title, completed } = request.body;

  tasks.push({
    id: id,
    title: title,
    completed: false
  })

  
   response.json({ 
    id:id,
    title: title,
    completed: completed
   })

})

app.put('/tasks', (request, response) => {
  const { id, title, completed } = request.body;
  tasks.push(...tasks, { 
    id:id,
    title: title,
    completed: completed
   })

   update(tasks, id, { 
    id:id,
    title: title,
    completed: completed
   })

   response.json(tasks)
})

app.delete('√', (request, response) => {
  const { id } = request.body;
  tasks = tasks.filter((task) => task.id !== id)
  response.json(tasks)
})

function update(arr, id, updatedData) {
  return arr.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
}

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
