const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();


router.get('/', studentController.allStudent);
router.get('/:name', studentController.oneStudent);
router.post('/', studentController.addStudent);
router.patch('/:name', studentController.updateStudent);
router.delete('/delete/:name', studentController.deleteStudent);



module.exports = router;