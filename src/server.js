import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json());

app.get('/users', UserController.get);
app.post('/users', UserController.store);

app.listen(3000, () => {
    console.log("Server running on localhost:3000");    
});