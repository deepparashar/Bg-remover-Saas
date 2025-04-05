import express from 'express';
import {clerkWebhooks} from '../controller/userController.js'

const userRouter = express.Router(); 

userRouter.post('/webhooks', clerkWebhooks);

export default userRouter;  // Exports the router for use in the main server.js file.  This allows for easy integration with other routes.  The route is now accessible via '/api/user/webhooks' in our API.  The function 'clerkWebhooks' is now defined in our userController.js file.  This is a simple example, but in a real-world application, you would have more complex logic and potentially multiple endpoints.  These endpoints
