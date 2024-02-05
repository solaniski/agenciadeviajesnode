import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaContacto, 
    paginaDetalleViajes 
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

/*router.get('/', (req, res) =>{ // req - lo que enviamos : res - lo que express nos responde
    
    // Mostrar un string
    //res.send('Inicio');
    
    // Mostrar un json ej: API
    //res.json({
    //    id: 1
    //});

    // Mostrar una vista
    //res.render('inicio');

    res.render('inicio', {
        pagina: 'Inicio'
    });
});*/

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viaje/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);

router.get('/contacto', paginaContacto);

router.post('/testimoniales', guardarTestimonial);

export default router;