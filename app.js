
const express = require('express');
const bodyParser = require('body-parser');
const moment=require('moment')


const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));



var workItems=[];
var items=[];

// ***************************************************
app.get('/', (req, res) => {

    let today=moment().format('D MMMM')
    res.render('list',{ListTitle:today, newListItems:items })
  
});

app.post('/',(req,res)=>{
    let item=req.body.newItem
    if(req.body.listt==="Work"){
        workItems.push(item);
        res.redirect('/Work')
    }else{
        items.push(item);
        res.redirect('/')
    }

})
// ****************************************************************
app.get('/Work',(req,res)=>{
    let today=moment().format('D MMM')
    res.render('work',{ListTitle:"Work", newListItems:workItems, currentday:today});
})

app.post('/Work',(req,res)=>{
    let item=req.body.newItem
    workItems.push(item);
    res.redirect('/Work')
})

// ********************************************************

app.listen(3030, () => {
    console.log('Server is running on port 3030')
})

 