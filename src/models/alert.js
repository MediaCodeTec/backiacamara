const pool = require('../config/db');

const getAlert = async () => {
    const { rows } = await pool.query('SELECT message FROM public.alert ORDER BY id DESC LIMIT 1');
    return rows[0];
};

const createAlert = async (message) => {
    const { rows } = await pool.query(
        'INSERT INTO public.alert (message) VALUES ($1) RETURNING id',
        [message]
    );
    return rows[0].id;
};

module.exports = { getAlert, createAlert };