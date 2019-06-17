var num=(Math.floor(Math.random() * 100) + 1);
if (num%2==0)
			alert("The number is even!")
else if (num%2==1)
	{
		alert("The number is odd!");
		}
for (count = 1;count<=10;count++)
	{
	guess= prompt("Guess a number of your choice.");
	if (guess>num) {
	alert("Ooops!,its higher")
}
else if (guess<num) {
	alert("Oooh!,its lower")
}

	if (guess==num)
	{
		alert("YOU WIN")
		break;
		}
	if (count==10){
 alert("YOU LOOSE");}}