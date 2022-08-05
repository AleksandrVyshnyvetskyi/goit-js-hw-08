// Ознакомься с документацией библиотеки Vimeo плеера.                                                                                          +
// Добавь библиотеку как зависимость проекта через npm.                                                                                         +
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player,                                                            
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.                                                                             +
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.                                +
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".                    +
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.            +
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.      +

import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlayer = function (data) {
    const playedTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", playedTime)
}

const savePletedTime = localStorage.getItem("videoplayer-current-time"); 


player.on('timeupdate', throttle(onPlayer, 1000));
if(savePletedTime) {
    player.setCurrentTime(savePletedTime);
}