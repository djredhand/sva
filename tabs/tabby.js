// Tabs jQuery Plugin
(function ($){
	$.fn.tabby = function(arguments){
		var defaults = {
			width		: 300,
			height		: 200,
			background	: '#999',
			border		: '1px solid #000',
			defaultTab	: ''//must include hash '#'
		};
		var options		= $.extend(defaults, arguments);
		var links		= [];
		var divIds		= [];
		var obj			= $(this); 
		var _display	= options.defaultTab//arguments from user;
		$("a",obj).each(function(){
			var href = this.href.split('#')[1]
			$(this).parent().click(function(){showDiv(href)} );
        if(this.href.match(/#/)) { 
          links.push(this); 
          divIds.push("#"+this.href.split('#')[1]);//push with hash to append url
        } 
      });
	  
	  //find default tab and display - if no default display the 1st div
	  for(items in divIds){
		  $(divIds[items]).css({display: 'none'});
		  if(options.defaultTab == divIds[items]){
			 _display = "match";
		  }
		  //log the div elems for the tabs - console.log($(divIds[items]) );
	  }
	  // If there is no match with the default param, then show 1st div
	  _display == "match" ? $(options.defaultTab).css({display: 'block'}) : $(divIds[0]).css({display: 'block'});
	  
	  
	  //Click handler for the list items
	  function showDiv(link){
		  console.log("divIds is: " + divIds)
		  for (items in divIds){
			  $(divIds[items]).css({display: 'none'});
			  if (link == divIds[items].split('#')[1]){
				  _display = "showDivMatch";
				  $(divIds[items]).addClass('selected');
			  }else{
				  $(divIds[items]).removeClass('selected');
			  }
		  }
		  //need to crate a showDefault() function 
		  _display == "showDivMatch" ? $('#'+link).css({display: 'block'}) : $(divIds[0]).css({display: 'block'});
		  console.log(_display);
	  }
	  
	  if(location.href.split('#')[1] != ""){
		  var link = location.href.split('#')[1];
		  showDiv(link);
	  }
	  
	  console.log(links);//available links in the list 
	  console.log(options.defaultTab);//the default tab
	  console.log(divIds);//the divs Ids
	  console.log(divIds[2].split('#')[1]); //the div id without hash to query in the doc
	  console.log('_display is: ' + _display);
	  console.log('location.href is: ' + location.href.split('#')[1]);
	  
	  
	};
})(jQuery);