var num=(Math.floor(Math.random() * 100) + 1);
if (num%2==0)
			console.log("The number is even!")
else if (num%2==1)
	{
		console.log("The number is odd!");
		}
for (count = 1;count<=10;count++)
	{
	guess= prompt("Guess a number of your choice.");
	if (guess>num) {
	console.log("Ooops!,its higher")
}
else if (guess<num) {
	console.log("Oooh!,its lower")
}

	if (guess==num)
	{
		console.log("YOU WIN")
		break;
		}
	if (count==10){
console.log("YOU LOOSE");}}