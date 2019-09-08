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
    title: "Weather",
    name:"harish",
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: "Help",
    helpText:"Get help from here",
    name:"harish",
  
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: "Harish Rana",
    helpText:"I am harish Rana",
    name:"harish",
  
  })
})

app.get('/about', (req, res) => {
  res.send("<h2>ABout page</h2>")
})

app.get('/weather', (req,res) => {
  res.send({
    forecast:"rainy",
    location:'delhi',
  })
})

app.get('/help/*', (req,res) => {
  res.render('notFound', {
    msg:"no help subtopics found"
  })
})


app.get('*', (req,res) => {
  res.render('notFound', {
    msg:"nothing found"
  })
})

app.listen(3001, () => {
  console.log('server is start on port')
});