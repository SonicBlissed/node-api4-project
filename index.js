require('dotenv').config();
const express = require('express');
const server = express();

server.use(express.json());
console.log(process.env.NODE_ENV)
//our api and the website have the same 'origin' so I only need cors in production
if (process.env.NODE_ENV === 'development') {
    const cors = require('cors')
    server.use(cors());
    console.log('works!')
}

server.use('*', (req, res) => {
    res.send('<h1>fallback</h1>')
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})