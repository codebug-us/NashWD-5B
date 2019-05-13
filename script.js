$(document).ready(function(){
  // Your javascript goes here
  console.log($("#message-count").text())
  console.log("page is loaded");
  var form = $("#message-form");
  console.log(form);

  //submit()
  form.submit(function(event){
  	event.preventDefault();
  	console.log("the form was submitted");
  	var userName=$("#input-name").val();
  	var userMessage=$("#input-message").val();
  	console.log(userName);
  	console.log(userMessage);
  	$("#myUL").append("<li class='message-box'><span class='name'>"+userName+": </span>"+userMessage+"</li>");
  	var msgCount = $("#message-count").text();
  	console.log(msgCount);
  	msgCount=parseInt(msgCount);
  	msgCount=msgCount+1;
  	msgCount=msgCount.toString();
  	$("#message-count").text(msgCount);
  	$("#input-name").val("");
  	$("#input-message").val("");
  });
});
