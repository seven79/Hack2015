var rl=require('readline');
var interface=rl.createInterface(process.stdin,process.stdout,null);
interface.question('What is your name?',function(answer){
	console.log("hello"+answer+"!");
	interface.close();
	process.stdin.destroy();
});
console.log("hello word");
