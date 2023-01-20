import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

player.on(
  'timeupdate',
  _.throttle(data => {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
