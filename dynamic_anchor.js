// This script grabs a url element and uses it to search for a DOM element to focus on
// In this case it is specific to the accessible-services
var james = {}
james.anchorTag = window.location.href.split('#',2)
if (james.anchorTag == "accessible-services/"){
	anchor_focus(james.anchorTag)
}
function anchor_focus(id) {
 var obj=document.getElementById(id);
 obj.focus();
 obj.blur();
}