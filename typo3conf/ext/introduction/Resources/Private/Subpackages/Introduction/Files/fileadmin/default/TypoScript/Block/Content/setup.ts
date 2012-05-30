# Insert the news plugin in single-view mode instead of normal page content if a news article is requested
[globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = {$plugin.tt_news.singlePid}]
lib.content < plugin.tt_news
lib.content {
	# First empty the code field and then set it to single-view
	code >
	code = SINGLE
}
[else]
# In all other cases, get the content of the middle column and add it to the 'content' part
lib.content < styles.content.get
lib.content.stdWrap.replacement {
	1 {
		search = ###BACKEND_URL###
		replace.typolink {
			parameter = typo3/
			returnLast = url
		}
	}
}
[global]

lib.content {
	# Wrap it in the markers for the search engine, so it knows that this part has to be indexed
	stdWrap.wrap = <!--TYPO3SEARCH_begin--> | <!--TYPO3SEARCH_end-->
}