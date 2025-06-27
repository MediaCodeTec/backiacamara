const AlertModel = require('../models/alert');

const getAlert = async (req, res) => {
    try {
        const alert = await AlertModel.getAlert();
        if (alert) {
            res.json(alert);
        } else {
            res.status(404).json({ error: 'No hay datos de alerta registrados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo los datos de la alerta' });
    }
};

const createAlert = async (req, res) => {
    try {
        const { message } = req.body;
        const alertId = await AlertModel.createAlert(message);
        req.io.emit('nueva_alert', { id: alertId, message });
        res.status(201).json({ id: alertId, message });
    } catch (error) {
        console.error('Error creando datos de la alerta:', error);
        res.status(500).json({ error: 'Error creando datos de la alerta' });
    }
};

module.exports = { getAlert, createAlert };