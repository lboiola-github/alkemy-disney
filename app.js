const express = require('express');
const app = express();
const mainRoute = require('./routes/mainRoute')
const characterRoutes = require('./routes/characters')


app.listen(3000, () => console.log('Server running on port 3000'))

// Main routes
app.use('/', mainRoute)
app.use('/characters', characterRoutes)