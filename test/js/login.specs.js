QUnit.specify("My Awesome WebApp",function(){
	describe('The login form',function(){

		it('should progressively enhance a form if JavaScript is available',function(){
			var form = $('#login').loginForm();
			assert(form.hasClass('enhanced')).isTrue();
		});

		describe('when JavaScript enhanced',function(){

			var form;
			before(function(){
				form = $('#login').loginForm();
			});

			it('should hide a field label when the field has focus.',function(){
				form.find(':text,:password').each(function(){
					var label = $(this).prev();
					$(this).focus();
					assert(label.css("display")).isEqualTo('none');
				});
			});

			it('should show a field label when the field is empty when the cursor leaves.',function(){
				form.find(':text,:password').each(function(){
					var label = $(this).prev();
					$(this).focus().blur();
					assert(label.css("display")).isNotEqualTo('none');
				});
			});

			it('should keep a field label hidden when the field is not empty when the cursor leaves.',function(){
				form.find(':text,:password').each(function(){
					var label = $(this).prev();
					$(this).focus().val("not empty").blur();
					assert(label.css("display")).isEqualTo('none');
				});
			});

			given('john.doe@trifecta.com','mickey.mouse@disney.com')
				.it('should validate that the email field is valid when the cursor leaves.',function(email){
					var field = form.find('#email-field').focus().val(email).blur()
					assert(field.hasClass('valid')).equals(true);
				});

			it('should submit the form when the user clicks the "Join" button.');
			it('should submit to the action URL of the form with an AJAX POST.');
		});
	});
});