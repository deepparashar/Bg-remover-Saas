import {Webhook} from 'svix'
import userModel from '../models/userModel.js'

//Api Controller Function to Manage Clerk user whit database
//http://localhost:4000/api/user/webhooks

const clerkWebhooks = async (req,res) =>{
    try {
        //Creat a Svix instance with clerk webhook secret
        const whook =  new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })

        const {type,data}= req.body

        switch (type) {
            case "user.created":{  

                const userData = {
                    clerkId:data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData)
                res.json({})

                break;
            }
            case "user.updated":{  


                const userData = {
                    clerkId:data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.findByIdAndUpdate({clerkId:data.id},userData)
                res.json({})

                break;
            }
            case "user.deleted":{  
                await userModel.findByIdAndDelete({clerkId:data.id})
                res.json({})
                break;
            }
                
        
            default:
                break;
        }

    } catch (error) {
         console.error(error)
         res.json({success:false, message:error.message})
    }
}


export {clerkWebhooks}



















