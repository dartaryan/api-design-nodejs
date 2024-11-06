import {Router} from 'express';
import {body, check, oneOf, validationResult} from "express-validator";
import {handleInputErrors} from "./modules/middleware";

const router = Router();


/** Product routes */

router.get('/product', (req, res) => {
    res.json({message: 'Hello Ben!'});
});
router.get('/product/:id', () => {
});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {

});
router.post('/product', () => {
});
router.delete('/product/:id', () => {
});

/** Update routes */

router.get('/update', () => {
});
router.get('/update/:id', () => {
});
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
    () => {
    });
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    () => {
    });
router.delete('/update/:id', () => {
});

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