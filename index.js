require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})