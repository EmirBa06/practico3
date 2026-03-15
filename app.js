import express from 'express';

const app = express();
const PORT = 3000;
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`perfil del usuario con ID:${userId}`);
});

app.listen(PORT, ()=> {
    console.log(`servidor corriendo en : http://localhost:${PORT}`);
});