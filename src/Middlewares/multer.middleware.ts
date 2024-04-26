import multer from 'multer';
import { FILE_FIELD_NAME_OBJ, FILE_TYPES, IMAGEMIMETYPE } from '../Utils/constant';

// File type checking function
const checkFileType = (file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (
        (file.fieldname === 'attachments' ? FILE_TYPES.includes(file.mimetype) : IMAGEMIMETYPE.includes(file.mimetype)) ||
        file.originalname.substring(file.originalname.lastIndexOf('.') + 1) === 'glb'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// Disk storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
});

// Multer configuration
let upload = multer({
    storage: storage,
    fileFilter: (_, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        checkFileType(file, cb);
    }
});

export default upload;
