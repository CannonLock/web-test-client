
export async function GET(
		req: Request
) {

	const res = Response.json({message: "Hello, World! I am not authenticated! 🚫"})
	res.headers.set("Access-Control-Allow-Origin", "*")
	return res
}