export async function OPTIONS(req: Request) {
	// Return the CORS preflight responses
	const res = Response.json({message: "Hello, World!"})
	res.headers.set("Access-Control-Allow-Headers", "authorization")
	res.headers.set("Access-Control-Allow-Methods", "GET")
	res.headers.set("Access-Control-Allow-Origin", "*")
  return res
}


export const get_factory = (location: string) => {
	return async function GET(
			req: Request
	) {

		let res;
		if((new URL(req.url)).searchParams.get("redirect") == "false") {
			res = Response.json({message: "I am the director! 🎬"})
		} else {
			res = new Response("", {status: 307})
		}

		// Attach the pelican headers
		res.headers.set("location", location)
		res.headers.set("x-pelican-authorization", "issuer=https://chtc.cs.wisc.edu")
		res.headers.set("x-pelican-namespace", "namespace=/chtc, require-token=true, collections-url=https://origin-auth2000.chtc.wisc.edu:1095")
		res.headers.set("x-pelican-token-generation", "issuer=https://chtc.cs.wisc.edu, max-scope-depth=3, strategy=OAuth2")
		res.headers.set("Access-Control-Expose-Headers", "x-pelican-authorization, x-pelican-namespace, x-pelican-token-generation")
		res.headers.set("Access-Control-Allow-Origin", "*")

		return res
	}
}

export const GET = get_factory("http://127.0.0.1:3000/api/file")