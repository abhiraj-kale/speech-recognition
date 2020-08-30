const btn = document.getElementById('talk');
const content = document.getElementById('content');

const greetings = [
    'I\'m chilling.How are you bro?',
    'I am super fine!...How is your quarantine going? ',
    'Nothing much...how\'s your day been?',
    'Doing good...how about you?'
]
const weather = [
    'It\'s a pretty gloomy day. Isn\'t it?',
    'Its not the best of sunny days...pretty rainy outside. Moreover I am bored in quarantine',
    'It\'s better if you stay at home'
]
try{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function () {
        readOutLoud('Voice is Activated');
        $('#talk').val('Listening');
    }
    recognition.onresult = function(event){
        $('#talk').val('Talk');
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        content.textConten = transcript;
        readOutLoud(transcript);
    }

    btn.addEventListener('click',()=>{
        recognition.start();
    })

    function readOutLoud(message) { 
        const speech = new SpeechSynthesisUtterance();
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        var selectedVoice = 'Google UK English Female';
        for (var i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedVoice) {
            speech.voice = voices[i];
            break;
          }
        }
        if(message.includes('how are you') ){
           const finaltext =  greetings[Math.floor(Math.random()*greetings.length)]
            speech.text = finaltext;
            content.textContent = finaltext;
        }else if(message.includes('weather') || message.includes('climate') ){
            const finaltext =  weather[Math.floor(Math.random()*weather.length)]
             speech.text = finaltext;
             content.textContent = finaltext;
         }else if(!message.includes('Voice')){
            speech.text = 'Sorry...couldn\'t understand';
            content.textContent = 'Sorry...couldn\'t understand';
        }

        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech)
    }
}catch(e){
    content.textContent = 'Can\'t process';
}
