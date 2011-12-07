// Tabs jQuery Plugin
(function ($){
	$.fn.tabby = function(arguments){
		var defaults = {
			width		: 300,
			height		: 200,
			background	: '#999',
			border		: '1px solid #000',
			defaultTab	: ''
		};
		var options	= $.extend(defaults, arguments);
		var links	= [];
		var divs	= [];
		var obj		= $(this); 
		$("a",obj).each(function(){ 
        if(this.href.match(/#/)) { 
          links.push(this); 
          divs.push("#"+this.href.split('#')[1]);//push with hash to append url
        } 
      });
	  console.log(links);
	  console.log(divs[0].split('#')[1]); //the div id without hash to query in the doc
	  
	};
})(jQuery);