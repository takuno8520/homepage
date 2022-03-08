$(function(){
	
	var options = {
		caption: null,
		closeOnScroll: true
	};
	
	var luminousTrigger = document.querySelectorAll('.luminous');
	
	for (var i = 0; i < luminousTrigger.length; i++) {
		var elem = luminousTrigger[i];
		new Luminous(elem, options);
	}
});