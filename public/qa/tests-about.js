suite('"About" Page Tests', function(){
	test('page should contain link to contact page', funcction(){
		assert($('a[href="/contact"]').length); 
	});
});