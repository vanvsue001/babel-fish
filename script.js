var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var speechBtn = document.querySelector('#engBtn');
var resultsText = document.querySelector('#resultsEng');

function testSpeech(event){
    console.log(event.target.lang)
    console.log('listening...')
    var recognition = new SpeechRecognition();
    recognition.lang;
    if(event.target.lang =='english'){
        recognition.lang = 'en-US';
    }
    else{//mexican spanish
        recognition.lang = 'es-mx';
    }
    recognition.start();

    recognition.onresult = function(event){
        var speechResult = event.results[0][0].transcript.toLowerCase();
        console.log(`Result: ${speechResult}`)
        console.log(event.results)
        resultsText.innerHTML = speechResult;

    }
}