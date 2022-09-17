document.addEventListener('DOMContentLoaded', () => {

  const timer = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(time) }, time);
    });
  }

  // timer(1000)
  //   .then((time) => {
  //     console.log('time:' + time);
  //     return timer(time + 1000);
  //   })
  //   .then((time) => {
  //     console.log('time:' + time);
  //     return timer(time + 1000);
  //   })
  //   .then((time) => {
  //     console.log('time:' + time);
  //     console.log('end');
  //   })



  async function run() {
    console.log('start');
    var time = await timer(1000);
    console.log('time:' + time);
    time = await timer(time + 1000);
    console.log('time:' + time);
    time = await timer(time + 1000);
    console.log('time:' + time);
    console.log('end');
    return time;
  }

  async function run2() {
    console.log('parent start');
    var time = await run();
    console.log(time);
    console.log('parent end');
  }

  console.log('parent parent start');
  run2().then(function () {
    console.log('parent parent end');
  });
  // console.log('parent parent end');



});