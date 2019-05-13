$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var name= $("#name").val();
		console.log(name);
		var comment =$("#comment").val();
		console.log(comment);
	});
})