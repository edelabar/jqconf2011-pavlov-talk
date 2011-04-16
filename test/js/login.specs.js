QUnit.specify("My Awesome WebApp",function(){
	describe('The login form',function(){

		it('should progressively enhance a form if JavaScript is available',function(){
			var form = $('#login').loginForm();
			assert(form.hasClass('enhanced')).isTrue();
		});

		it('should hide a field label when the field has focus.');
		it('should show a field label when the field is empty when the cursor leaves.');
		it('should keep a field label hidden when the field is not empty when the cursor leaves.');
		it('should validate that the email field is valid when the cursor leaves.');
		it('should submit the form when the user clicks the "Join" button.');
		it('should submit to the action URL of the form with an AJAX POST.');
	});
});