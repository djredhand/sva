// Tabs jQuery Plugin
(function ($){
	$.fn.tabs = function(options){
		var defaults = {
			width		: 300,
			height		: 200,
			background	: '#999',
			border		: '1px solid #000',
		};
		var options = $.extend(defaults, options);
	
		return this.each(function(){
			obj = $(this);
			obj.css({
				width		: options.width,
				height		: options.height,
				background	: options.background,
				border		: options.border,
				left		: options.left
			})
			obj.click(function(){
				$(this).animate({
					width	: '+=100',
					marginLeft 	: '+=100'
					},500,function(){
						//alert('complete');
					  })
			})
		});
	};
})(jQuery);