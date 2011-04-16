(function($){

	$.fn.loginForm = function(){	
		return this.each(function(){	
			$(this).find(':text,:password').focus(function(){
				$(this).prev().hide();
			}).blur(function(){
				if(!$(this).val()){
					$(this).prev().show();
				} else {
					$(this).removeClass('valid');
					if($(this).is('#email-field') && /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test($(this).val())) {	
						$(this).addClass('valid');
					}
				}
			});

			$(this).addClass('enhanced');
		});
	};

})(jQuery);