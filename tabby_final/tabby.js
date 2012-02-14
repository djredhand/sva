// Tabs jQuery Plugin
(function ($){
	$.fn.tabby = function(arguments){
		var defaults = {
			// must include hash (#) if given as default argument
			// example: "#five", where #five is the div id 
			// set as blank if no default arg is given
			defaultTab	: '',
			
			// create a new id for the tabby div to control styling
			// can be set to anything. Remember what this is 
			// when it comes to apply CSS
			divAppend	: '_tabby'
		};
		var options = $.extend(defaults, arguments);
		var links = [];
		var divIdsTabby	= [];
		var obj = $(this); 
		var _display = options.defaultTab;// arguments from user

		$(obj).children('div').each(function(){
			var id = $(this).attr('id') + options.divAppend;
			$(this).attr('id', id);
		});
		
		$('a.tabby', obj).each(function(){
			var url = this.href.split('#')[1];
			$(this).parent().click(function(){
				showDiv(url);
				window.location.hash = url;
			});	
		if(this.href.match(/#/)) { 			  
		  links.push(this);		   
		  divIdsTabby.push('#'+this.href.split('#')[1]);// push with hash to append url
		}
	  });
	  
	// create a default tab if none is provided
	options.defaultTab === '' ? options.defaultTab = divIdsTabby[0] : options.defaultTab;
	 
	// find default tab and display - if no default display the 1st div
	for (i=0; i< divIdsTabby.length; i++){
	  $(divIdsTabby[i] + options.divAppend).addClass('visuallyHidden');
	}
	if(location.href.split('#')[1] !== ''){
	  var urlLink = location.href.split('#')[1];
	  showDiv(urlLink);
	  }
	 
	// Click handler for the list items
	function showDiv(urlLink){
		for (i=0; i< divIdsTabby.length; i++){
			var id = divIdsTabby[i];
		  $(divIdsTabby[i] + options.divAppend).addClass('visuallyHidden');
		  if (urlLink == (id.split('#')[1]) ){
			  _display = 'showDivMatch';
			 selected($(links[i]).parent().parent(), $(links[i]).parent());
		  }
		}
		// Test if default error and no url match
		if(_display === '' && options.defaultTab === ''){
		  for (i=0; i< divIdsTabby.length; i++){
			$(divIdsTabby[i]).addClass('visuallyHidden');  
		  }
		  urlLink = $(divIdsTabby[0]).attr('id') + options.divAppend;
		  _display = '';
		  showDiv(urlLink);
		}
		
		// final test if a default is defined and no url match
		if (_display == options.defaultTab){
			urlLink = options.defaultTab.split('#')[1];
			_display = '';
			showDiv(urlLink);
		}
		
		// show the appropriate div or show the default Tab
		_display == 'showDivMatch' ? $('#'+urlLink + options.divAppend).removeClass('visuallyHidden') :   errorUrl();
	}//end showDiv
	 
	// go ahead and show the first tab if an illlegal arg is found in the url
	function errorUrl(){
		showDiv(options.defaultTab.split('#')[1]);
	}
	 
	// highlight the selected tab using a css hook
	function selected(ul, li){
	  ul.children().each(function(){
		  $(this).removeAttr('class');
	  });
	  li.addClass('selected');
	}  
};
})(jQuery);
