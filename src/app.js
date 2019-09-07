const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

console.log(__dirname);
console.log(__filename);


const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');

app.set("view engine", 'hbs')
app.set('views', viewPath);
app.use(express.static(publicDirPath));
hbs.registerPartials(partialPath)

app.get('', (req,res) => {
  res.render('index', {
    title: "hanldebars args",
    name:"harish",
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    help:"giving you helpn from args",
    name:"harish",
  
  })
})

app.get('/help', (req, res) => {
  
});

app.get('/about', (req, res) => {
  res.send("<h2>ABout page</h2>")
})

app.get('/weather', (req,res) => {
  res.send({
    forecast:"rainy",
    location:'delhi',
  })
})

app.listen(3001, () => {
  console.log('server is start on port')
});