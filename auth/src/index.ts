import { NotFoundError } from './errors/not-found-error'
import { errorHandler } from './middlewares/error-handler'
import express from 'express'

// for async error handling
import 'express-async-errors'
import { json } from 'body-parser'

import { currentUserRouter } from './routes/current-user'
import { signInRouter } from './routes/signin'
import { signOutRouter } from './routes/signout'
import { signUpRouter } from './routes/signup'

const app = express()
app.use(json())

app.use(currentUserRouter)
app.use(signInRouter)
app.use(signUpRouter)
app.use(signOutRouter)

//404 | not found route
app.all('*', async (req, res) => {
   throw new NotFoundError()
})
// catch all the errors and return a generic error response
app.use(errorHandler)

app.listen(3000, () => {
   console.log('auth service listening on port 3000!')
})
