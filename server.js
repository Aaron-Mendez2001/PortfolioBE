const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const skillsRouter = require('./skills/skills-router');
const expRouter = require('./experience/experience-router');

const server = express();

server.use(express.json());
server.use(helmet);
server.use(cors);
server.use('/skills', skillsRouter)
server.use('/experience', expRouter);

server.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        message: "A server error has occured"
    })
})

module.exports = server