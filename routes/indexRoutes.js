var express= require("express");
var router = express.Router({mergeParams: true});
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('<YOUR_API_KEY>');



// async function sports(){
//     await newsapi.v2.topHeadlines({
//         category: 'sports',
//         language: 'en'
//       }).then(response => {
//         const data = response;
//         console.log(data.articles);
//         return data;
//       });
// }


router.get("/", (req, res)=>{
  newsapi.v2.topHeadlines({
    country: 'in',
    language: 'en',
    pageSize: 40
  }).then(response => {
    
    console.log(response);
    res.render("topNews", {data: response.articles});
  });
  
  
})

router.get("/top-us", (req, res)=>{
  newsapi.v2.topHeadlines({
    country: 'us',
    language: 'en',
    pageSize: 40
  }).then(response => {
    
    console.log(response);
    res.render("topNews", {data: response.articles});
  });
  
  
})

router.get("/:category", (req, res)=>{
  newsapi.v2.topHeadlines({
    category: req.params.category,
    language: 'en',
    pageSize: 40
  }).then(response => {
    
    console.log(response.articles);
    res.render("topNews", {data: response.articles});
  });
  
  
})



module.exports = router;