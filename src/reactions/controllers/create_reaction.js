const { Reaction } = require('../models/reactions_models');

const createReaction = async (req, res) => {
  const { hallId, rol, question  } = req.body;

  try {
    const newReaction = new Reaction({
      hallId,
      rol,
      question
    });

    await newReaction.save();
    res.status(201).json(newReaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReaction
};
