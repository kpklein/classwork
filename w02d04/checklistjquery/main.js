$(function(){

	$('#btn1').click(function(event){
		var todo = $('#inputbox').val();
		$('#box3 ul').append('<div><li class="check">'+todo+'</li>'+'<button class="buttoncss" id="delete">Delete</button></div>');
	});

$('#list1').on("click","li",function(event){

		$(this).css("text-decoration", "line-through");
		console.log('.check');
	
	});

$('#list1').on("click","#delete",function(event){
		
		$(this).parent().remove();
	});





});