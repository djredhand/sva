// Tabs jQuery Plugin
(function ($){
	$.fn.tabby = function(arguments){
		var defaults = {
			defaultTab	: ''//must include hash '#'
		};
		var options		= $.extend(defaults, arguments);
		var links		= [];
		var divIds		= [];
		var obj			= $(this); 
		var _display	= options.defaultTab//arguments from user;
		
		$("a",obj).each(function(){			
			var url = this.href.split('#')[1];
			$(this).parent().click(function(){
				showDiv(url);
				window.location.hash =  url;
			});
			
		if(this.href.match(/#/)) { 
		  links.push(this); 
		  divIds.push("#"+this.href.split('#')[1]);//push with hash to append url
		};
	  });
	  
	//find default tab and display - if no default display the 1st div
	for(items in divIds){
	  $(divIds[items]).css({display: 'none'});};
	if(location.href.split('#')[1] != ""){
	  var link = location.href.split('#')[1];
	  showDiv(link);
	  };

	 
	//Click handler for the list items
	function showDiv(link){
		for (items in divIds){
		  $(divIds[items]).css({display: 'none'});
		  if (link == divIds[items].split('#')[1]){
			  _display = "showDivMatch";
			  selected($(links[items]).parent().parent(), $(links[items]).parent());
		  };
		};
		// Test if no default and no url match
		if(_display == "" && options.defaultTab == ""){
		  for (items in divIds){
			$(divIds[items]).css({display: 'none'});  
		  };
		  link = $(divIds[0]).attr('id');
		  _display = "";
		  showDiv(link);
		};
		
	//Final test if a default is defined and no url match
	if (_display == options.defaultTab){
		link = options.defaultTab.split('#')[1];
		_display = "";
		showDiv(link);
	}
		_display == "showDivMatch" ? $('#'+link).css({display: 'block'}) : $(options.defaultTab).css({display: 'block'});  
	  };
	  
	  function selected(ul, li){
		  ul.children().each(function(){
			  $(this).removeAttr('class');
		  });
		  li.addClass('selected');
	  };	  
};
})(jQuery);