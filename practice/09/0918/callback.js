document.addEventListener('DOMContentLoaded', () => {
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3');

  // 동기 콜백
  function printImmediatley(print) {
    print();
  }

  printImmediatley(() => { console.log('hello') })

  // 비동기 콜백
  function printWidthDelay(print, timeout) {
    setTimeout(print, timeout);
  }

  printWidthDelay(() => { console.log('async hello') }, 2000);
})