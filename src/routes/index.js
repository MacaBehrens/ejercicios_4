 import { Router } from 'express';
import departamentoRoutes from "./departamentoRoutes.js"

const router = Router(); 
    
    router.use('/api/depto', departamentoRoutes)
    
    export default router;


