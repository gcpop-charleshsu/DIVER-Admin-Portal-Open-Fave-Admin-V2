export default {
	getSocialApiUrl: () => {
		const env = appsmith.store.env || envSetting.setEnvironment()
		
		const endpointMapping = {
			'dev': 'https://dev-social.diver-service.io',
			'stage': 'https://stage-social.diver-service.io',
			'prod': 'https://social.diver-service.io',
			'local': 'https://dev-social.diver-service.io'
		};

		return endpointMapping[env] || 'https://dev-social.diver-service.io';
	},
	
	getCollateralSymbol:() => {
		const env = appsmith.store.env || envSetting.setEnvironment()
		
		const symbolList = {
			'dev': [
				{ display: "MTK", value: "MTK" },
				{ display: "MTLD", value: "MTLD" },
			],
			'stage': [
				{ display: "MTK", value: "MTK" },
				{ display: "MTLD", value: "MTLD" },
			],
			'prod': [
				{ display: "DWETH", value: "DWETH" },
				{ display: "DWU", value: "DWU" },
			],
			'local': [
				{ display: "MTK", value: "MTK" },
				{ display: "MTLD", value: "MTLD" },
			]
		};
		
		return symbolList[env] || [
			{ display: "none", value: "none" },
		];
	}
}