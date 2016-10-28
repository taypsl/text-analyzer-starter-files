	$(document).ready(function() {

	// 1. set up event listener for form submission & remove hidden class
	$('button').click(function(event) {
		$('dl').removeClass('hidden');
	});

	$(function() {
	  $('#js-form').submit(function(event) {
	    var textInput = $('#js-user-input').val();
	    textAnalyzer(textInput);
	  	event.preventDefault();
	  })
	});

	// 2. set up functions that will read through the text and analyze it for 
	// [totalWordCount], [uniqueWordCount], [avgWordLength], [avgSentenceLength]. 
	function textAnalyzer(textInput) {
		var wordsArray = textInput.toLowerCase().match(/\b[^\s]+\b/g).sort();
 
		// total word count - divide into functions
		var totalWordCount = wordsArray.length; 
		$('#js-word-count').text(totalWordCount);


		// unique word count
		var uniqueWordCount = {};

		for (var i = 0; i < wordsArray.length; i++) {
			var word = wordsArray[i];
			uniqueWordCount[word] = uniqueWordCount[word] ? uniqueWordCount[word] + 1 : 1;
		}

		var numberOfUniqueWords = Object.keys(uniqueWordCount).length;
		$('#js-unique-count').text(numberOfUniqueWords);


		// avg word length
		var sum = 0;

		for(var j = 0; j < wordsArray.length; j++) {
	    	var wordsFromArray = wordsArray[j];
	    	sum += wordsFromArray.length;
		}
		var avgWordLength = sum / wordsArray.length;
		$('#avg-word-length').text(avgWordLength);


		// avg sentence length
		var sentences = textInput.split(".");
		var sentenceSum = 0;
		for (var k = 0; k < sentences.length; k++) {
			var sentence = sentences[k];
			sentenceSum += sentence.split(" ").length;
		}
		var avgSentenceLength = sentenceSum / (sentences.length);
		$('#avg-sentence-length').text(avgSentenceLength);
	}

})  