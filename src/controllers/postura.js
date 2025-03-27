const PosturaModel = require('../models/postura');

const getPostura = async (req, res) => {
    try {
        const postura = await PosturaModel.getLastPostura();
        if (postura) {
            res.json(postura);
        } else {
            res.status(404).json({ error: 'No hay posturas registradas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo la última postura' });
    }
};

const createPostura = async (req, res) => {
    try {
        const { postura } = req.body;
        const PosturaId = await PosturaModel.createPostura(postura);
        res.status(201).json({ id: PosturaId, postura });
    } catch (error) {
        res.status(500).json({ error: 'Error creando postura' });
    }
};

module.exports = { getPostura, createPostura };
