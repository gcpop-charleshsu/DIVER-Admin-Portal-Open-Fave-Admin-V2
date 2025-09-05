export default {
	initSetting() {
		tokenSymbol.setValue("{{appsmith.URL.queryParams.tokenSymbol}}");
		searchSymbol.setValue("{{appsmith.URL.queryParams.tokenSymbol}}");
		getToken.run()
	},
}