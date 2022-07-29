$(function() {
  $('#header_player_01').YTPlayer({
    videoURL: 'https://youtu.be/WGyhjnKiYW8',
    containment: '#slider',
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: false,
    quality: 'highres',
    ratio: '4/3',
  });
});