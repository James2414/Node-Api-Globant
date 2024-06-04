const Reaction = require('../models/Reaction');

const createReaction = async (req, res) => {
  const { hallId, userId, typeReaction } = req.body;

  try {
    const nuevaReaccion = new Reaction({
      hallId,
      userId,
      typeReaction
    });

    await nuevaReaccion.save();
    res.status(201).json(nuevaReaccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReaction
};
