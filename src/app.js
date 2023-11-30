import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js'
const app = express();


app.use(express.json())
app.set('port',3000);
app.use(usuarioRoutes)



export default app;