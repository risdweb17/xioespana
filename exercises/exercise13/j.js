$( document ).ready(function() {
	$(".hamburger").click(function(){
		$( ".menu" ).slideToggle("slow");
		$("#bars").toggle();
		$("#cross").toggle();
	})

// 	$( ".cross" ).hide();
// 	$( ".menu" ).hide();
// 	$( ".hamburger" ).click(function() {
// 	$( ".menu" ).slideToggle( "slow", function() {
// 	$( ".hamburger" ).hide();
// 	$( ".cross" ).show();
// });
// });

// 	$( ".cross" ).click(function() {
// 	$( ".menu" ).slideToggle( "slow", function() {
// 	$( ".cross" ).hide();
// 	$( ".hamburger" ).show();
// });
});