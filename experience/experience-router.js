const express = require('express');
const Exp = require('./experience-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json(await Exp.getExp());
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{

        const getExps = await Exp.getExpById(req.params.id);
        
        if(!getExps){
            return res.status(400).json({
                message: 'Invalid ID'
            })
        }

        return res.status(200).json(getExps);

    } catch(err){
        next(err)
    }
})

module.exports = router;