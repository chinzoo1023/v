// js -> tootsololt hiine
// huvsagch -> ogogdol hadgalna
// if else -> nuhtsul shalgah
// for ->neg uildel olon davtana
// function -> olon kodnii tsugluulga
// massive -> olon utga zereg hadgalah
// object -> key:value
// api ->tusgai beldsen data g holboh
// .innerText ->tag dotorh ugiig uurchloh
// document -> html deerh buh code
// html ->text gargadag
const questionEl = document.querySelector('.question');
const result = document.querySelector('.result');
const choiceEl = document.querySelector('.choice');
const nextbtn = document.querySelector('.next');
let quizData = [
	{
		"question": "hytadiin niislel yu ve",
		"choice": ["moscov","bejin","ulaanbaatar"],
		"answer":"bejin"
	},
	{
		"question": "2+2+2*2",
		"choice": ["8","13","12"],
		"answer":"12",
	},
	{
		"question": "ooriig n ogooj bolgoson etsgiigee horooj ezent ulsaa baiguulsan mongol haanii ner hen be",
		"choice": ["chingis khaan","mouden shanyv","hubil khaan"],
		"answer":"mouden shanyv",
	},
	{
		"question": "2*3+4*5",
		"choice": ["27","14","26"],
		"answer":"26",	 
	},
];
let now=0;
let count=0;
console.log(quizData[0].question);
function display(){
	questionEl.innerText = quizData[now].question;
	quizData[now].choice.forEach(data=>{
		console.log(data);
		let btn = document.createElement('button')
		btn.innerText = data;
		console.log(btn);
		choiceEl.append(btn);
		btn.addEventListener('click',()=> ckeckAnswer(data));
	});
}
 function ckeckAnswer(data){
	console.log(data);
	if(data==quizData[now].answer){
		result.innerText="zuv bn!";
		count++;
	}else{
		result.innerText="buruu bn zuv hariult n bol "+ quizData[now].answer;
	}
}
nextbtn.addEventListener('click',()=>{
	questionEl.innerText="";
	result.innerText="";
	choiceEl.innerHTML="";
	now++;
	if(now==quizData.length){
		result.innerText="duuslaa tanii onoo bol " + count + "/"+quizData.length;
		nextbtn.style.display="none";
	}
	display();
});
display();