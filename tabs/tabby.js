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
	  
	//find default tab and display - if no default display the 1st div
	for(items in divIdsTabby){
	  $(divIdsTabby[items]).css({display: 'none'});};
	if(location.href.split('#')[1] != ""){
	  var link = location.href.split('#')[1];
	  showDiv(link);
	  };

	 
	//Click handler for the list items
	function showDiv(link){
		console.dir(divIdsTabby);
		for (i=0; i< divIdsTabby.length; i++){
			console.log('divIdsTabby[items] is: ' +divIdsTabby[i]);
			var id = divIdsTabby[i];
			console.log("id is: " + id);
		  $(divIdsTabby[i]).css({display: 'none'});
		  if (link == id.split('#')[1]){
			  _display = "showDivMatch";
			 selected($(links[i]).parent().parent(), $(links[i]).parent());
		  };
		};
		// Test if no default and no url match
		if(_display == "" && options.defaultTab == ""){
		  for (items in divIdsTabby){
			$(divIdsTabby[items]).css({display: 'none'});  
		  };
		  link = $(divIdsTabby[0]).attr('id');
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