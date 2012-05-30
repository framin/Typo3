page.meta {
	# Use the meta tag 'description' from the constants as default value
	# If the meta field description in the page properties is filled, then this will override the default.
	description = {$plugin.meta.description}
	description.override.field = description

	author = {$plugin.meta.author}
	author.override.field = author

	keywords = {$plugin.meta.keywords}
	keywords.override.field = keywords

	robots = {$plugin.meta.robots}
	revisit = {$plugin.meta.revisit}
	copyright = {$plugin.meta.copyright}
}