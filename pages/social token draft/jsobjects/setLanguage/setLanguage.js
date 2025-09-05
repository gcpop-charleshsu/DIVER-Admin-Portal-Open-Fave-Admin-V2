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
  },
	
	formSearch(lang) {
    const labels = {
      English: "Search Keyword",
      Chinese: "搜尋關鍵字",
      Janpanese: "検索キーワード",
    }

    return labels[lang] || labels["English"]
  },
	formState(lang) {
    const labels = {
      English: "Token issue status",
      Chinese: "Token發行狀態",
      Janpanese: "トークン発行状況",
    }

    return labels[lang] || labels["English"]
  },
	formVisiability(lang) {
    const labels = {
      English: "Visibility",
      Chinese: "可見性",
      Janpanese: "可視性",
    }

    return labels[lang] || labels["English"]
  },
}