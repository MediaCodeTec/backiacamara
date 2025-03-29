require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 7100;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
