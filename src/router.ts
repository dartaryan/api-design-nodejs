import {Router} from 'express';
import {body, check, oneOf, validationResult} from "express-validator";
import {handleInputErrors} from "./modules/middleware";
import {createProduct, deleteProduct, getOneProduct, getProducts} from "./handlers/product";
import {createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate} from "./handlers/update";

const router = Router();


/** Product routes */

router.get('/product', getProducts);
router.get('/product/:id', getOneProduct);
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {

});
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);

/** Update routes */

router.get('/update', getUpdates);
router.get('/update/:id', getOneUpdate);
router.put('/update/:id',
    body('title').optional,
    body('body').optional,
    oneOf([
        check('status').equals('IN_PROGRESS'),
        check('status').equals('SHIPPED'),
        check('status').equals('DEPRECATED')
    ]),
    body('version').optional,
    body('productId').optional,
    updateUpdate);
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate);
router.delete('/update/:id', deleteUpdate);
/** update points routes */

router.get('/updatepoint', () => {
});
router.get('/updatepoint/:id', () => {
});
router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(), () => {
    });
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {
    });
router.delete('/updatepoint/:id', () => {
});

export default router;