const router = require("express").Router()
const db = require("../models/articles.js")

router.post("/api/articles", function(req, res){
    db.create(req.body)
    .then((data)=> {res.json(data)})
})