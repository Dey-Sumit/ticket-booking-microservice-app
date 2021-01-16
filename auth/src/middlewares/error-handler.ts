import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'

export const errorHandler = (
   err: Error,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   // if (err instanceof RequestValidationError) {
   //    console.log('Handling this request as a request validation error')
   //    return res.status(err.statusCode).send({
   //       errors: err.serializeErrors(),
   //    })
   // }

   // if (err instanceof DatabaseConnectionError) {
   //    console.log('Handling this error as a database connection error')
   //    return res.status(err.statusCode).send({
   //       errors: err.serializeErrors(),
   //    })
   // }

   // generic handler
   if (err instanceof CustomError) {
      return res.status(err.statusCode).send({
         errors: err.serializeErrors(),
      })
   }

   res.status(400).send({
      errors: [{ message: err.message }],
   })
}
