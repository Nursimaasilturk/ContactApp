const express = require('express');
const contactController =require("../controllers/contactController");

const router = express.Router();

router.get('/',contactController.getAllContact);
router.get('/:id',contactController.getContactById);
router.post('/create',contactController.createContact);
router.delete('/delete',contactController.deleteAllContact);
router.put('/update/:id',contactController.updateContact);
router.delete('/delete/:id',contactController.deleteContactById);

module.exports = router;