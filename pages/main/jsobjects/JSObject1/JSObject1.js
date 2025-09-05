export default {
	langList: [
		{ display: "English", value: "English" },
		{ display: "Chinese", value: "Chinese" },
		{ display: "Janpanese", value: "Janpanese" },
	],

	labelSearch(lang) {
    const labels = {
      English: "Search form",
      Chinese: "搜尋表單",
      Janpanese: "検索フォーム",
    }

    return labels[lang] || labels["English"]
  }
}