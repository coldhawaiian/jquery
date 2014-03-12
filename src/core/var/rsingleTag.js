define(function() {
	// Match a standalone tag
	// ^<(\w+)(\s*)[/]?>(?:<[/](\1)>|)$
	return (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
});
