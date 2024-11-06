import {validationResult} from "express-validator";

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(400).json({errors: errors.array()});
}