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



		var meddelanden = ["Det var inte så bra...", "Det hade kunnat gå både bättre och sämre ;)", "Nära toppen, men inte nära nog - tummen upp", "Du kan verkligen din Marvel - BRA JOBBAT!!"];
		var bilder = ["img/bad.gif", "img/nja.gif", "img/tummenupp.gif", "img/success.gif"]


		var range;

			if(correct < 4){
				range=0;
			}

			if(correct > 3 && correct < 7){
				range=1;
			}

			if(correct > 6 && correct < 10){
				range=2;
			}

			if(correct == 10){
				range=3;
			}





	document.getElementById("after_submit").style.visibility="visible";

	document.getElementById("meddelande").innerHTML=meddelanden[range];
	document.getElementById("number_correct").innerHTML = "Du  fick " + correct + " rätt.";
	document.getElementById("bilden").src=bilder[range];
}



