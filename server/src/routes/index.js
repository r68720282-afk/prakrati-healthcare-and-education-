import express from 'express';
import authRoutes from './authRoutes.js';
import { makeCrudRoute } from './makeCrudRoute.js';
import { crudFactory } from '../controllers/crudFactory.js';
import BlogPost from '../models/BlogPost.js';
import Career from '../models/Career.js';
import Volunteer from '../models/Volunteer.js';
import ContactRequest from '../models/ContactRequest.js';
import Newsletter from '../models/Newsletter.js';
import Event from '../models/Event.js';

const router = express.Router();
router.use('/auth', authRoutes);
router.get('/public/config', (_req,res)=>res.json({name:'Prakarati Healthcare & Education'}));
router.use('/blog-posts', makeCrudRoute(crudFactory(BlogPost), false, true));
router.use('/careers', makeCrudRoute(crudFactory(Career), false, true));
router.use('/volunteers', makeCrudRoute(crudFactory(Volunteer), true, false));
router.use('/contact-requests', makeCrudRoute(crudFactory(ContactRequest), true, false));
router.use('/newsletters', makeCrudRoute(crudFactory(Newsletter), true, false));
router.use('/events', makeCrudRoute(crudFactory(Event), false, true));

export default router;
