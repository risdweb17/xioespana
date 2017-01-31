$( document ).ready(function() {


	var choice1="";
	var choice2="";
	var score = 0;

	$('.primary img').click(function(){
		choice1 = $(this).attr('class');
		console.log(choice1);
	});

	$('.secondary').click(function(){
		console.log("this got clicked");
		choice2 = $(this).attr('id');
		console.log(choice2);
		if(choice1===choice2){
	   		score++;
   			console.log(score);
   			console.log("correct");
   			$("#message").text("Correct!");
   			$("#score").text(score);			   		
		}
	   	else {
	   			console.log("wrong");
	   			$("#message").text("Wrong!");
	   			choice1="";
	   	}	
	});

});