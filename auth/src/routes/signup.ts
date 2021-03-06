import { DatabaseConnectionError } from './../errors/database-connection-error'
import { RequestValidationError } from './../errors/request-validation-error'
import express, { Request, Response } from 'express'

import { body, validationResult } from 'express-validator'
const router = express.Router()

router.post(
   '/api/users/signup',
   [
      body('email').isEmail().withMessage('Email is not valid'),
      body('password')
         .trim()
         .isLength({ min: 4, max: 20 })
         .withMessage('Password must be between 4 and 20 characters'),
   ],
   (req: Request, res: Response) => {
      console.log('got request')

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
         throw new RequestValidationError(errors.array())
      }

      const { email, password } = req.body

      console.log('Creating a User')
      //testing
      throw new DatabaseConnectionError()
      // res.send({})
   }
)

export { router as signUpRouter }
