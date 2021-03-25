var play1, play2, oscillator1, oscillator2, changeFreq1, changeFreq2, changeType1, changeType2

var osc1 = {
    type: "sawtooth",
    frequency: 20,
    playing: false
}

var osc2 = {
    type: "sawtooth",
    frequency: 20,
    playing: false
}

var audioContext = new AudioContext()

window.onload = function(){
    play1 = function(){
        if(osc1.playing){
            oscillator1.stop()
            osc1.playing = false
        } else {
            oscillator1 = audioContext.createOscillator()
            oscillator1.type = osc1.type
            oscillator1.frequency.setValueAtTime(osc1.frequency, audioContext.currentTime)
            oscillator1.connect(audioContext.destination)
            oscillator1.start()
            osc1.playing = true
        }
    }

    play2 = function(){
        if(osc2.playing){
            oscillator2.stop()
            osc2.playing = false
        } else {
            oscillator2 = audioContext.createOscillator()
            oscillator2.type = osc2.type
            oscillator2.frequency.setValueAtTime(osc2.frequency, audioContext.currentTime)
            oscillator2.connect(audioContext.destination)
            oscillator2.start()
            osc2.playing = true
        }
    }

    changeFreq1 = function(){
        osc1.frequency = document.getElementById("freqslider1").value * 2
        play1()
        play1()
    }

    changeFreq2 = function(){
        osc2.frequency = document.getElementById("freqslider2").value * 2
        play2()
        play2()
    }

    changeType1 = function(){
        osc1.type = document.querySelector("input[name = 'waveform1']:checked").value
        play1()
        play1()
    }

    changeType2 = function(){
        osc2.type = document.querySelector("input[name = 'waveform2']:checked").value
        play2()
        play2()
    }
}