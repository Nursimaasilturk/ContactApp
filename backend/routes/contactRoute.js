const express = require('express');
const contactController =require("../controllers/contactController");
const multer = require('multer');
const path = require('path');

const router = express.Router();

const uploadFolder = path.join(__dirname , '../uploads');
const storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null, uploadFolder);
	},
	filename:(req,file,cb)=>{
		const uniqueName = `${Date.now()} - ${file.originalname}`;
		cb(null, uniqueName);
	}
});
const upload = multer({storage:storage});

router.get('/',contactController.getAllContact);
router.get('/:id',contactController.getContactById);
router.post('/create',upload.single('image'),contactController.createContact);
router.delete('/delete',contactController.deleteAllContact);
router.put('/update/:id',contactController.updateContact);
router.delete('/delete/:id',contactController.deleteContactById);

module.exports = router;