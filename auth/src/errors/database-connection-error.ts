import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError {
   //By default, all members of a class in TypeScript are public.
   reason = 'Error Connecting to database'
   statusCode = 500
   constructor() {
      super()
      Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
   }
   serializeErrors() {
      return [
         {
            message: this.reason,
         },
      ]
   }
}
