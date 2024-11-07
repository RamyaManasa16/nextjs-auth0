//to create a api we need to name it as route
//the following syntax is used by nextjs to create a get request constant data with key and value pair

export async function GET(request: Request) {
    return Response.json({myData: "my-value"});
}