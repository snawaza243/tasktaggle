const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, getAllUsers);
router.post('/', authMiddleware, adminMiddleware, createUser);
router.put('/:id', authMiddleware, adminMiddleware, updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
