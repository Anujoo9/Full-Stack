const express = require('express');
const { healthcheckRoutes } = require('./routes');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 5000 }));

app.use(healthcheckRoutes);

module.exports = app;
