plugin.tx_felogin_pi1 {
	# Use our own HTML template from the fileadmin directory
	# so we can freely modify it without changing the extension
	templateFile = {$filepaths.extensiontemplates}felogin/tx_felogin_pi1_template.html

	# Clear default CSS additions - we take care of that in our own CSS files
	_CSS_DEFAULT_STYLE =
}
