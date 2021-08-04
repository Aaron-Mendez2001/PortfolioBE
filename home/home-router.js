const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    try{
        return res.status(200).json({
            message: "Welcome to my portfolio server!"
        })
    } catch(err){
        next(err)
    }
})

module.exports = router