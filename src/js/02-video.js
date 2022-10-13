import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = localStorage.getItem('videoplayer-current-time');

if (saveTime) {
player.setCurrentTime(saveTime);
}

player.on('timeupdate', throttle(onPlayed, 1000));
function onPlayed({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}
