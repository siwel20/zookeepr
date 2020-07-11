const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const {
    animals
} = require('./data/animals.json');

// parse incoming string or array data
app.use(express.urlencoded({
    extended: true
}));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// this middleware creates a virtual path to the static pages, in this case script/html/media/css 
app.use(express.static('public'));


// app listen should always be last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});