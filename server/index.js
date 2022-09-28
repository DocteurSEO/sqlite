const express = require('express')
const cors = require('cors')
const app = express()
const port = 3002

const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./sqlite.db"
    }
  });






app.use(express.json())
app.use(cors())
app.get('/', async (req, res) => {
   const data = await  knex.select('*').from('users')
  res.json( data)
})

app.post('/', async(req, res) => {
    const data = await knex('users').insert(req.body)
    res.json(req.body)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})