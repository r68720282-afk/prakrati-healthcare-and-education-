import express from 'express';
import { protectAdmin } from '../middleware/auth.js';
export const makeCrudRoute = (ctrl, isPublicCreate=false, isPublicList=true) => {
  const r = express.Router();
  if (isPublicCreate) r.post('/', ctrl.create); else r.post('/', protectAdmin, ctrl.create);
  if (isPublicList) r.get('/', ctrl.list); else r.get('/', protectAdmin, ctrl.list);
  r.get('/:id', ctrl.get);
  r.put('/:id', protectAdmin, ctrl.update);
  r.delete('/:id', protectAdmin, ctrl.remove);
  return r;
};
