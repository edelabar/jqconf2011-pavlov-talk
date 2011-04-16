(function($){

	$.fn.loginForm = function(){	
		return this.each(function(){	
			$(this).find(':text,:password').focus(function(){
				$(this).prev().hide();
			}).blur(function(){
				$(this).prev().show();
			});

			$(this).addClass('enhanced');
		});
	};

})(jQuery);