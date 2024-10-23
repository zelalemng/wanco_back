const express = require('express');
const router = express.Router();
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  orderId,
} = require('../controllers/orderController');
const { protect, protectAdmin, verifyToken } = require("../middleware/auth");
const { upload } = require('../middleware/uploadMiddleware');
const updateOrderImages = require('../controllers/imageController');



router.get('/:orderId', orderId);
router.get('/', getOrders);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
//router.put('/:id/images', uploadMultiple, updateOrderImages);



module.exports = router;
