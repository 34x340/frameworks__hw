import {
    alert,
    defaultModules,
  } from 'node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});

  alert({
    text: 'Notice me, senpai!',
  });

const necessaryKeyElement = document.getElementById('necessary-key');
const nowKeyElement = document.getElementById('now-key');
const correctKeyElement = document.getElementById('correct-key');

let correctKeyCount = 0;

const getRandomLetter = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
};

const updateNecessaryKey = () => {
    necessaryKeyElement.textContent = getRandomLetter();
};

const handleKeyPress = (event) => {
    const pressedKey = event.key.toLowerCase();
    nowKeyElement.textContent = pressedKey;

    if (pressedKey === necessaryKeyElement.textContent) {
        correctKeyCount++;
        correctKeyElement.textContent = correctKeyCount;
        updateNecessaryKey();
        PNotify.success({
            title: 'Success!',
            text: 'That thing that you were trying to do worked.'
          });
    }
    else {
        PNotify.error({
            title: 'Oh No!',
            text: 'Something terrible happened.'
          });
    }
};

document.addEventListener('keydown', handleKeyPress);
updateNecessaryKey();
