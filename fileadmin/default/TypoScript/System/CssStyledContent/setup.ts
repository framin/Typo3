# remove class="bodytext" from paragraphs
lib.parseFunc_RTE {
	nonTypoTagStdWrap.encapsLines {
		addAttributes.P.class >
		addAttributes.P.class.setOnly >
	}
}

tt_content {
	# Make some modifications to the rendering of the standard MAIL form records
	mailform.20 {
		accessibility = 1

		RADIO.layout = <div class="csc-mailform-field">###LABEL### ###FIELD###</div>
		radioWrap.accessibilityWrap = <fieldset###RADIO_FIELD_ID### class="csc-mailform-radio"><legend>###RADIO_GROUP_LABEL###</legend>|</fieldset>
	}

	# Remove the ancient onfocus="blurLink(this);" from sitemap links
	# Unfortunately this hasn't been fully implemented in css_styled_content yet
	# See also bug 11367
	menu.20 {
		default.1.noBlur = 1
		1.1.noBlur = 1
		4.1.noBlur = 1
		5.1.noBlur = 1
		6.1.noBlur = 1
		7.1.noBlur = 1
		7.2.noBlur = 1
	}

	# Define different wrappers for content elements depending on the page column
	stdWrap.outerWrap.cObject = CASE
	stdWrap.outerWrap.cObject {
		# Define wrappers for each column position (colPos 0,1,2,3)
		key.field = colPos
		
		# Default is no wrapper
		default = TEXT
		default.value = |

		# Add wrapper for content in right column (colPos=2)
		# we use this to style the box around content in this column
		2 = CASE
		2 {
			# Add wrapping to all content elements
			default = TEXT
			default.value = <div class="secondaryContentSection">|</div>
			
			# But - exclude inserted records from being wrapped
			key.field = CType
			shortcut = TEXT
			shortcut.value = |
			image = TEXT
			image.value = |
			html = TEXT
			html.value = |
		}

	}

	# Define max image width for each content column separately
	image.20.maxW.cObject = CASE
	image.20.maxW.cObject {
		key.field = colPos
		default = TEXT
		default.value = 417
		# normal
		0 = TEXT
		0.value = 417
		# left
		1 = TEXT
		1.value = 150
		# right
		2 = TEXT
		2.value = 155
	}

	image.20.maxWInText.cObject = CASE
	image.20.maxWInText.cObject {
		key.field = colPos
		default = TEXT
		default.value = 260
		# normal
		0 = TEXT
		0.value = 260
		# left
		1 = TEXT
		1.value = 70
		# right
		2 = TEXT
		2.value = 70
	}
}