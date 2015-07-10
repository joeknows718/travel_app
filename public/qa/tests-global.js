suite('Global Tests', function(){
	test('page jas a valid title', function({
	assert(document.title && document.title.match(/\S/)) && document.title.toUpperCase() !== 'TODO');
	}));
});