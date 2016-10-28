$(document).ready(function() {

/* 1. set up functions that will read through the text and analyze it for [totalWordCount], 
   [uniqueWordCount], [avgWordLength], [avgSentenceLength]. 
   2. set up listeners that will get you the submitted text and run it through the functions 
   above
*/


//1. set up functions, four separate and one main that calls them all. 
// function analyzeText(textInput) {  }
//		function countTotalWords() {var spaces = " "; var totalCount = [] + 1 }


function textAnalyzer(textInput) {
	var newArray = textInput.split(" ");
	console.log(newArray);

// total word count
	var totalWordCount = newArray.length; 
	//console.log(totalWordCount);
	$('#js-word-count').text(totalWordCount);

// unique word count	
	var uniqueWordCount = {};
	var uniqueCountAry = [];

	for (var i = 0; i < newArray.length; i++) {
		var count = newArray[i];
		uniqueWordCount[count] = uniqueWordCount[count] ? uniqueWordCount[count] + 1 : 1;
	}
	for (var key in uniqueWordCount) {
	uniqueCountAry.push(uniqueWordCount[key]); 
	}

	$('#js-unique-count').text(uniqueCountAry.length);
	console.log(uniqueWordCount);
	console.log(uniqueCountAry);

// avg word length
	var sum = 0;
	for(var j = 0; j < newArray.length; j++) {
    	var strLength = newArray[j];
    	sum += strLength.length;
	}
	var avgWordLength = sum / newArray.length;
	$('#avg-word-length').text(avgWordLength);

	//console.log(avgWordLength)

// avg sentence length
	
	var sentence = textInput.split("\n");
	var sentenceSum = 0;
	for (var k = 0; k < sentence.length; k++) {
		var sentenceLen = sentence[k];
	//console.log(sentence); //sentences separated into strings
	//console.log(sentenceLen); //avg denominator
		sentenceSum += sentenceLen.length;
	}

	var avgSentenceLength = sentenceSum / sentence.length;
	$('#avg-sentence-length').text(avgSentenceLength);


}

//2. set up event listener for form submission & remove hidden class


$('button').click(function(event) {
	//event.preventDefault();
	$('dl').removeClass('hidden');
});


$(function() {
  $('#js-form').submit(function(event) {
    var textInput = $('#js-user-input').val();
    textAnalyzer(textInput);
  	event.preventDefault();

  })

});


}) //docready 