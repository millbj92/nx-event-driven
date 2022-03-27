/* eslint-disable no-useless-escape */
import * as joi from 'joi';

export const CreateUserSchema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string()
    .min(8)?.message('Password must be at least 8 characters long')
    .pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
    .message('Password must contain at least one special character')
    .pattern(/(?=.*[a-z])(?=.*[A-Z])/)
    .message('Password must contain at least one lowercase and one uppercase character')
    .required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
});