export default {
	setEnvironment: () => {
		const hostname = appsmith.URL.host;

		const envMapping = {
			'dev-admin-portal.diver-service.io': 'dev',
			'stage-admin-portal.diver-service.io': 'stage',
			'admin-portal.diver-service.io': 'prod',
			'localhost:8080': 'local'
		};

		storeValue("env", envMapping[hostname])
		return envMapping[hostname]
	}
}