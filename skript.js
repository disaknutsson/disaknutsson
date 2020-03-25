function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;

		if(question1 == "peter"){
			correct++;
		}
		if(question2 == "wakanda"){
			correct++;
		}
		if(question3 == "wwii"){
			correct++;
		}
		if(question4 == "blackwidow"){
			correct++;
		}
		if(question5 == "awesomemix"){
			correct++;
		}
		if(question6 == "gron"){
			correct++;
		}
		if(question7 == "mjolnir"){
			correct++;
		}
		if(question8 == "dor"){
			correct++;
		}
		if(question9 == "time"){
			correct++;
		}
		if(question10 == "bror"){
			correct++;
		}

	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML = "Du  fick " + correct + " rätt.";
}

/*Du är några minuter bakåt i youtubevideon. Han har börjat förklara hur man lägger in lite roliga
memes men du har problev vi scoren;)*/

