
//https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

var express = require("express");
var router = express.Router();


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNameDB(){

}

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

//Code to test database grabbing
router.get("/hello", function(req, res){

    var names = ["World", "Clara", "Emily", "Marlena"]
    var resName = names[getRandomInt(names.length)]
    res.send("Hello " + resName)
})

module.exports = router;
