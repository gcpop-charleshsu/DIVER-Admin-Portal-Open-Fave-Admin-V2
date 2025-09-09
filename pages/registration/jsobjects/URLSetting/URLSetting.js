export default {
	getSocialApiUrl: () => {
		const hostname = appsmith.URL.host;

		const endpointMapping = {
			'dev-admin-portal.diver-service.io': 'https://dev-social.diver-service.io',
			'stage-admin-portal.diver-service.io': 'https://stage-social.diver-service.io',
			'admin-portal.diver-service.io': 'https://social.diver-service.io',
			'localhost:8080': 'https://dev-social.diver-service.io'
		};

		return endpointMapping[hostname] || 'https://dev-social.diver-service.io';
	},
}