export async function OPTIONS(req: Request) {
	// Return the CORS preflight responses
	const res = Response.json({message: "Hello, World!"})
	res.headers.set("Access-Control-Allow-Headers", "authorization")
	res.headers.set("Access-Control-Allow-Methods", "GET")
	res.headers.set("Access-Control-Allow-Origin", "*")
	return res
}


export async function GET(
		req: Request
) {

	let res;

	if(req.headers.get("Authorization") == "Bearer 1234") {
		res = Response.json({message: "Hello, World! I am authenticated! 🗝️"})
	} else {
		res = new Response("Auth Failed", {status: 401})
	}

	res.headers.set("Access-Control-Allow-Origin", "*")
	return res
}
