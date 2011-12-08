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
				selected($(this).parent(), $(this));
				window.location.hash =  url;
			} );
			
        if(this.href.match(/#/)) { 
          links.push(this); 
          divIds.push("#"+this.href.split('#')[1]);//push with hash to append url
        } 
      });
	  
	  //find default tab and display - if no default display the 1st div
	  for(items in divIds){
		  //console.log(divIds[items])
		  $(divIds[items]).css({display: 'none'});
		  if(options.defaultTab == divIds[items]){
			 _display = "match";
		  };
		  //log the div elems for the tabs - console.log($(divIds[items]) );
	  };
	  //If there is no match with the default param, then show 1st div
	  _display == "match" ? $(options.defaultTab).css({display: 'block'}) : $(divIds[0]).css({display: 'block'});
	 // console.log(_display)
	  
	   if(location.href.split('#')[1] != ""){
		  var link = location.href.split('#')[1];
		  showDiv(link);
	  }

	 
	  //Click handler for the list items
	  function showDiv(link){
		  for (items in divIds){
			  $(divIds[items]).css({display: 'none'});
			  if (link == divIds[items].split('#')[1]){
				  _display = "showDivMatch";
				  selected($(links[items]).parent().parent(), $(links[items]).parent());
			  }
		  }
		  //need to crate a showDefault() function 
		  _display == "showDivMatch" ? $('#'+link).css({display: 'block'}) : $(divIds[0]).css({display: 'block'});
	  }
	  
	  function selected(ul, li){
		  ul.children().each(function(){
			  $(this).removeAttr('class');
		  });
		  li.addClass('selected');
	  }	  
	};
})(jQuery);