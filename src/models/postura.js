const pool = require('../config/db');

const getLastPostura = async () => {
    const { rows } = await pool.query('SELECT postura FROM store.posturas ORDER BY id DESC LIMIT 1');
    return rows[0];
};

const createPostura = async (postura, person) => {
    const result = await pool.query(
        'INSERT INTO store.posturas (postura, person) VALUES ($1, $2) RETURNING id',
        [postura, person]
    );
    return result.rows[0].id;
};

module.exports = { getLastPostura, createPostura };
