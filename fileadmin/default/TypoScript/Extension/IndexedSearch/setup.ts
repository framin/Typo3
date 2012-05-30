# Configuration for indexedsearch plugin
plugin.tx_indexedsearch {
	templateFile = {$filepaths.extensiontemplates}indexed_search/tx_indexedsearch_pi1_template.html
	forwardSearchWordsInResultLink = 0

	show {
		rules = 0
		advancedSearchLink = 0
	}

	search {
		rootPidList =
		exactCount = 1
	}

	_CSS_DEFAULT_STYLE >
	_DEFAULT_PI_VARS {
		results = 10
	}
}

# Adjust search results when visitor has chosen another language
[globalVar = GP:L = 1]
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 1
[global]