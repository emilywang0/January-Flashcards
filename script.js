var flashcard = document.getElementById('flashcard');
	var prev = document.querySelector('#prev');
	var flip = document.querySelector('#flip');
	var next = document.querySelector('#next');
		
		var questions=[
			"How do the Balinese people celebrate the new year?",
			"What is seen as a sign of good fortune in Denmark on New Year's?",
			"What do you have to eat in Spain on New Year's Eve for good luck?",
			"What do Greeks hang on their door on New Year's to symbolize rebirth?",
			"What do Colombians place under their bed before the new year?",
			"What do the Irish do to ward off evil spirits on New Year's Eve?"
		];
		
		var images=[
			"https://www.indonesia.travel/content/dam/indtravelrevamp/en/event/nyepi-balis-new-years-day-of-complete-silence/Article-3.jpg",
			"https://i.pinimg.com/originals/24/5b/bd/245bbdc1a00efe3c9fc201c2dff6d18e.jpg",
			"https://www.almanac.com/sites/default/files/image_nodes/green-grapes.jpg",
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-onions-main-image-700-350-8425535.jpg?quality=90&resize=768,574",
			"https://www.tasteofhome.com/wp-content/uploads/2017/11/Potatoes_705490993.jpg",
			"https://www.tasteofhome.com/wp-content/uploads/2018/05/exps180460_TH143194B06_10_3b.jpg"
		];
		
    var mystery=[
			"images/question.png",
      "images/question.png",
      "images/question.png",
      "images/question.png",
      "images/question.png",
      "images/question.png",
		];

		var answers=[
			"staying in silence for the whole day",
			"smashed plates on your doorstep!",
			"12 (lucky) grapes",
			"an onion",
			"three potatos",
			"bang bread on the wall"
		];

		var currentText = questions[0];
		var questionNumber = 0;
		var cardState = 0;
		/*!-- 0 indicates the front question side and 1 indicates the back answer side*/

		updateFront();
		updateBack();

		function flipCard()
		{
			if(cardState==0){
				currentText = answers[questionNumber];
				cardState++;
				updateBack();
			}
			
			else{
				currentText = questions[questionNumber];
				cardState--;
				updateFront();
			}
		}
		
		function nextCard()
		{
			var length = questions.length;

			if(questionNumber<length-1)
				questionNumber++;
			else
				questionNumber=0;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}

		}
		
		function previousCard()
		{
			var length = questions.length;
			if(questionNumber>0)
				questionNumber--;
			else
				questionNumber=length-1;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}
		}
		
		/*Updates the text shown on the flashcard after a button press.*/
		function updateFront(){
			document.getElementById("flashcard-content-front").innerHTML = currentText;
      document.getElementById("card-mystery").src = mystery[questionNumber];
		}
		function updateBack(){
			document.getElementById("flashcard-content-back").innerHTML = currentText;
      document.getElementById("card-image").src = images[questionNumber];
		}
		
		flip.addEventListener('click', flipCard);
		prev.addEventListener('click', previousCard);
		next.addEventListener('click', nextCard);

		
		flip.addEventListener('click', function() {
			flashcard.classList.toggle('flipped');
			updateText();
		}, false);


// document.onkeydown = checkKey;


// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode === 38) {
//        flipCard();
//     }
//     else if (e.keyCode === 40) {
//         flipCard();
//     }
//     else if (e.keyCode === 37) {
//        previousCard();
//     }
//     else if (e.keyCode === 39) {
//        nextCard();
//     } 

// }

