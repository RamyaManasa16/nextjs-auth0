import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
    //by adding the routes to this matcher the public routes get private and it will be protected 
    //whatever the public routes you wanted to protect we can add that to this list 
    matcher: ["/middleware","/api/data"],
}