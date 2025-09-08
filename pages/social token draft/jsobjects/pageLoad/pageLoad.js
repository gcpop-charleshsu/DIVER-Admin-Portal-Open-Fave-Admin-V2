export default {
	initSetting() {
		const tokenSymbolParam = appsmith.URL.queryParams.tokenSymbol;
		if (tokenSymbolParam) {
			tokenSymbol.setValue(tokenSymbolParam);
			searchSymbol.setValue(tokenSymbolParam);
			getToken.run();
		}
	},
}