$( document ).ready(function() {

var dessertNames = ["Brownies" , "Pineapple Upside Down Cake" , "Cheesecake" ,"Hot Fudge Sundae" ,"Cookie", "Donut" ,"Poundcake", "Flan", "Boysenberry Pie", "Peach Cobbler"];

for(var j=0; j<dessertNames.length; j++){
	console.log(dessertNames[j]);
}
// console.log(dessertNames[1]);
// console.log(dessertNames[2]);
// console.log(dessertNames[3]);
// console.log(dessertNames[4]);
// console.log(dessertNames[5]);
// console.log(dessertNames[6]);
// console.log(dessertNames[7]);
// console.log(dessertNames[8]);
// console.log(dessertNames[9]);
// console.log(dessertNames[10]);



var single = "";
for (var i = 0; i < dessertNames.length; i++) {
  single += dessertNames[i] + " ";
}
console.log(single);

$('p').text(single);

});