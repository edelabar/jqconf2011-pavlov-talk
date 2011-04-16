(function($){

	$.fn.loginForm = function(){	
		return this.each(function(){	
			$(this).find(':text,:password').focus(function(){
				$(this).prev().hide();
			});

			$(this).addClass('enhanced');
		});
	};

})(jQuery);