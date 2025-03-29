const pool = require('../config/db');

const getLastPostura = async () => {
    const { rows } = await pool.query('SELECT postura FROM public.postura ORDER BY id DESC LIMIT 1');
    return rows[0];
};

const createPostura = async (postura) => {
    const { rows } = await pool.query(
        'INSERT INTO public.postura (postura) VALUES ($1) RETURNING id',
        [postura]
    );
    return rows[0].id;
};

module.exports = { getLastPostura, createPostura };
