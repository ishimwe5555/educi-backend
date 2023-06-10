import { Router } from 'express';
import cookieParser from 'cookie-parser';
import { asyncWrapper } from '../helpers';
import { categoryController } from '../controllers';
import asyncwrapper from '../helpers/asyncwrapper';

const router = Router();

router.use(cookieParser());

router.get('/', asyncwrapper(categoryController.getCategories));

router.get('/:id', asyncWrapper(categoryController.getSubcategories));

router.get('/s/:id', asyncWrapper(categoryController.getSubsubcategories));

router.post('/add', asyncwrapper(categoryController.addCategory));

router.post('/add/:id', asyncwrapper(categoryController.addSubcategory));

router.post('/s/add/:id', asyncwrapper(categoryController.addSubsubcategory));


export default router;
