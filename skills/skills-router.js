const express = require('express');
const Skills = require('./skills-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json(await Skills.getSkills());
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{

        const getSkill = await Skills.getSkillsById(req.params.id);
        
        if(!getSkill){
            return res.status(400).json({
                message: 'Invalid ID'
            })
        }

        return res.status(200).json(getSkill);

    } catch(err){
        next(err)
    }
})

module.exports = router;