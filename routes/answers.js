const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Answer = require('../models/Answer');


router.get('/', (req, res) => {
  Answer.find().then(answers => res.json({ success: true, answers: answers }));
});

router.post('/', (req, res) => {
  const newAnswer = {
    answers: req.body.answers,
    score: req.body.score
  };

  new Answer(newAnswer).save().then(answer => {
    
   /*  pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    }); */

    return res.json({ success: true, message: 'Thank you for voting' });
  });
});

module.exports = router;