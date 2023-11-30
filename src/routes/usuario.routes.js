import { Router } from "express";
import { createUsuadio, deleteUsuario, getUsuarioId, getUsuarios, updateUsuario } from '../controllers/usuarioController.js';

const router = Router();
router.get('/usuarios',getUsuarios)
router.get('/usuario/:id',getUsuarioId)


router.post('/usuario',createUsuadio)
router.put('/usuario/:id',updateUsuario)
router.delete('/usuario/:id',deleteUsuario)
export default router