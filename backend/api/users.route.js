import express from 'express';
import userController from './user.controller.js';

const router = express.Router()

router.route('/').get(userController.apiGetGrades)



export default router;