import buttonAudio from '../public/audio/button.mp3';
import winAudio from '../public/audio/win.mp3';
import loseAudio from '../public/audio/lose.mp3';
import leverDownAudio from '../public/audio/lever_down.mp3';
import leverUpAudio from '../public/audio/lever_up.mp3';
import coinAudio from '../public/audio/coin.mp3';
import coinDropAudio from '../public/audio/coin_drop.mp3';
import flipingSideLongAudio from '../public/audio/fliping_side_long.mp3';

export function playWinAudio() {
    new Audio(winAudio).play();
}
  
export function playLoseAudio() {
    new Audio(loseAudio).play();
}

export function playButtonAudio() {
    new Audio(buttonAudio).play();
}

export function playLeverDownAudio() {
    new Audio(leverDownAudio).play();
}

export function playCoinAudio() {
    new Audio(coinAudio).play();
}

export function playCoinDropAudio() {
    new Audio(coinDropAudio).play();
}

export function playFlipingSideLongAudio() {
    new Audio(flipingSideLongAudio).play();
}

export function playLeverUpAudio() {
    new Audio(leverUpAudio).play();
}