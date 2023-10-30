const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const users = [];

app.get('/api/v1', (request, response) => {
    return response.json('API iniciada');
});

app.get('/api/v1/users', (request, response) => {
    const { name } = request.query;
    const results = name ? users.filter(user => user.name.includes(name)) : users;

    return response.json(results);
});

app.post('/api/v1/users', (request, response) => {    
    const { name, age } = request.body;
    const user = { id: uuid(), name, age }
    users.push(user);

    return response.json(user);
});

app.put('/api/v1/users/:id', (request, response) => {    
    const { id } = request.params;
    const { name, age } = request.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) {        
        return response.status(400).json({ error: 'User not found'});
    }
    
    const user = { id, name, age };
    users[userIndex] = user;
    
    return response.json(user);
});

app.delete('/api/v1/users/:id', (request, response) => {    
    const { id } = request.params;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) {        
        return response.status(400).json({ error: 'User not found'});
    }

    users.splice(userIndex, 1);

    return response.status(204).send();
});

app.listen(3000, () => {
    console.log('\nServidor levantado na porta 3000.\n\nRotas:');
    console.log('   GET http://localhost:3000/api/v1/users');
    console.log('  POST http://localhost:3000/api/v1/users');
    console.log('   PUT http://localhost:3000/api/v1/users/{id}');
    console.log('DELETE http://localhost:3000/api/v1/users/{id}');
});