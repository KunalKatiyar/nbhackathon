const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const taskController = require('./controller/task.controller')
const propertyController = require('./controller/property.Controller')


const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.get('/api/properties', (req, res) => {
    console.log(res);
    propertyController.getProperties().then(data => res.json(data));
});

app.get('/api/property/:id', (req, res) => {
    propertyController.getProperty(req.params.id).then(data => res.json(data));
});

app.post('/api/createProperty', (req, res) => {
    console.log(req.body);
    propertyController.createProperty(req.body.task).then(data => res.json(data));
});

app.put('/api/updateProperty', (req, res) => {
    propertyController.updateProperty(req.body.task).then(data => res.json(data));
});

app.delete('/api/deleteProperty/:id', (req, res) => {
    propertyController.deleteProperty(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});




app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})