$(document).ready(function(){

	$("#address").suggestions({
    	token: "b642e794df73cbd7f68186c8694cb9ee57735fb2",
    	type: "ADDRESS",
    	/* Вызывается, когда пользователь выбирает одну из подсказок */
    	onSelect: function(suggestion) {
        	console.log(suggestion);
        }
    });

})