// Tabs jQuery Plugin
(function ($){
	$.fn.tabby = function(arguments){
		var defaults = {
			defaultTab	: ''//must include hash '#'
		};
		var options		= $.extend(defaults, arguments);
		var links		= [];
		var divIdsTabby		= [];
		var obj			= $(this); 
		var _display	= options.defaultTab//arguments from user;
		$(obj).children('div').each(function(){
			var id = $(this).attr('id') + "_tabby";
			$(this).attr('id', id);
		});
		$("a.tabby", obj).each(function(){			
			var url = this.href.split('#')[1];
			$(this).parent().click(function(){
				showDiv(url);
				window.location.hash =  url;
			});
			
		if(this.href.match(/#/)) { 
		  links.push(this); 
		  divIdsTabby.push("#"+this.href.split('#')[1]);//push with hash to append url
		};
	  });
	  
	//create a default tab if none is provided
	options.defaultTab == '' ? options.defaultTab = divIdsTabby[0] : options.defaultTab; 
	  
	//find default tab and display - if no default display the 1st div
	for (i=0; i< divIdsTabby.length; i++){
	  $(divIdsTabby[i]+'_tabby').css({display: 'none'});};
	if(location.href.split('#')[1] != ""){
	  var urlLink = location.href.split('#')[1];
	  showDiv(urlLink);
	  };

	 
	//Click handler for the list items
	function showDiv(urlLink){
		for (i=0; i< divIdsTabby.length; i++){
			var id = divIdsTabby[i];
		  $(divIdsTabby[i]+'_tabby').css({display: 'none'});
		  if (urlLink == (id.split('#')[1]) ){
			  _display = "showDivMatch";
			 selected($(links[i]).parent().parent(), $(links[i]).parent());
		  };
		};
		// Test if no default and no url match
		if(_display == "" && options.defaultTab == ""){
		  for (i=0; i< divIdsTabby.length; i++){
			$(divIdsTabby[i]).css({display: 'none'});  
		  };
		  urlLink = $(divIdsTabby[0]).attr('id') +"_tabby";
		  _display = "";
		  showDiv(urlLink);
		};
		
	//Final test if a default is defined and no url match
	if (_display == options.defaultTab){
		urlLink = options.defaultTab.split('#')[1];
		_display = "";
		showDiv(urlLink);
	}
		_display == "showDivMatch" ? $('#'+urlLink+'_tabby').css({display: 'block'}) : $(options.defaultTab+'_tabby').css({display: 'block'});  
	  };
	  
	  function selected(ul, li){
		  ul.children().each(function(){
			  $(this).removeAttr('class');
		  });
		  li.addClass('selected');
	  };	  
};
})(jQuery);