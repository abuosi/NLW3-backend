import express from 'express';

const app = express();

app.use(express.json());

// Query Param -> http://localhost:3333/users?search=diego
// Route Param -> http://localhost:3333/users/1
// Body -> http://localhost:3333/users

app.get('/users', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({message: "Hello World!"});
})

app.listen(3333);