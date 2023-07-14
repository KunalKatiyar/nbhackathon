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
const parametersController = require('./controller/propertyAdditionalAttribute.Controller')

const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.get('/api/properties', (req, res) => {
    propertyController.getProperties().then(data => res.json(data));
});

app.get('/api/property/:id', (req, res) => {
    propertyController.getProperty(req.params.id).then(data => res.json(data));
});

app.post('/api/createProperty', (req, res) => {
    console.log(req.body);
    propertyController.createProperty(req.body).then(data => res.json(data));
});

app.put('/api/updateProperty', (req, res) => {
    propertyController.updateProperty(req.body).then(data => res.json(data));
});

app.delete('/api/deleteProperty/:id', (req, res) => {
    propertyController.deleteProperty(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});


app.post('/api/createParam', (req, res) => {
    parametersController.createParameter(req.body).then(data => res.json(data));
});

app.get('/api/parameters', (req, res) => {
    parametersController.getParameters().then(data => res.json(data));
});


app.get('/api/parameter/:id', (req, res) => {
    parametersController.getParameter(req.params.id).then(data => res.json(data));
});

app.put('/api/updateParameters/:id', (req, res) => {
    parametersController.updateParameter(req.body,req.params.id).then(data => res.json(data));
});

app.delete('/api/deleteParameters/:id', (req, res) => {
    parametersController.deleteParameter(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});

app.get('/api/generateParameters', (req, res) => {
    parametersController.saveParameters().then(data => res.json(data));
});

app.get('/api/getRoiScore/:id', (req, res) => {
    parametersController.getParameter(req.params.id).then(data => res.json(data));
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})