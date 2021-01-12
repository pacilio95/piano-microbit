basic.forever(function () {
    basic.showString("PACIL")
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K1)) {
        music.ringTone(277)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K2)) {
        music.ringTone(294)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K3)) {
        music.ringTone(311)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K4)) {
        music.ringTone(330)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K5)) {
        music.ringTone(349)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
        music.ringTone(370)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.ringTone(392)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K7)) {
        music.ringTone(415)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K8)) {
        music.ringTone(440)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.ringTone(466)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
        music.ringTone(494)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
        music.ringTone(523)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.ringTone(554)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
        music.ringTone(587)
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.ringTone(622)
    } else if (false) {
        music.ringTone(659)
    } else if (false) {
        music.ringTone(698)
    } else if (false) {
        music.ringTone(740)
    } else if (false) {
        music.ringTone(784)
    } else if (false) {
        music.ringTone(831)
    } else if (false) {
        music.ringTone(880)
    }
})
