const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars= require('express-handlebars')
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
))
// path.extname = '.hbs'
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
  // res.send('home')
})
app.get('/news', (req, res) => {
  res.render('news')
// res.send('home')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})