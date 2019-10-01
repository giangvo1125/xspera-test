var config = {
	development: {
		port: 2023,
		domain: 'localhost', 
		apiUrl: 'http://localhost:2025/', 
	},
	production: {
		port: 2023,
		domain: 'localhost', 
		apiUrl: 'http://localhost:2025/', 
	},
	
}
const env = process.env.CONFIG || 'development'

module.exports = config[env];
