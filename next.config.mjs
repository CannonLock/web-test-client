/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/api/no-redirect',
				headers: [
					{
						key: 'Content-Type',
						value: 'text/csv',
					},
				],
			},
		];
	}
};

export default nextConfig;
