const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers");
	next();
});

app.post('/api/rent', (req, res)=>{
	var rentRequest = {
		name: res.body.name,
		email: res.body.email,
		rentObj: res.body.rentObj,
	}
	fs.appendFile('rent.txt', JSON.stringify(rentRequest))
})

app.get('/api/classes', (req, res)=>{
	const classes = [{name:"tripod"}, {name:"light"},{name:"voice"}, {name:"others"}];
	res.json(classes);
});
app.get('/api/objects', (req, res)=>{
	const objects = [
		        {
          id:1,
          name:"tripod",
          class:"tripod",
          detail:"三腳架可使上方的物品獲得穩定的支承，通常三腳架上也有方便設備進行俯仰、旋轉的機關",
          rent:false,
        },
        {
          id:2,
          name:"Rode Mic",
          class:"voice",
          detail:"指向型麥克風",
          rent:false,
        },
        {
          id:3,
          name:"h1",
          class:"voice",
          detail:"h1是簡單的錄音設備，可外接麥克風，內附記憶卡",
          rent:false,
        },
        {
            id:4,
            name:"light",
            class:"light",
            detail:"可繫式持續燈，可調色溫3000K~5000K",
            rent:false,
        },
        {
          id:5,
          name:"light2",
          class:"light",
          detail:"需插座的持續大燈，內附遮光罩、燈架",
          rent:false,
        },
        {
          id:6,
          name:"greenscreen",
          class:"others",
          detail:"圓形綠幕，特效拍攝的基礎設備",
          rent:false,
        },    	
	];
	res.json(objects);
});



const port = 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));
