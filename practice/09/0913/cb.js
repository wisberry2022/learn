window.addEventListener('DOMContentLoaded', () => {

  console.log('1');

  // Produce promise가 만들어지는 순간 executor(resolve 콜백함수)가 실행된다.
  const promise = new Promise((resolve, reject) => {
    // doing some heavy works.. (network, read files)
    console.log('doing something...');
    setTimeout(() => {
      resolve('ellie');
      reject(new Error('no network'));
    }, 2000)
  })

  // Consumers: then, catch, finally

  // then: promise가 정상적으로 수행되고 resolve 콜백함수를 통해 전달된 값을 value 변수로 받을 수 있다.
  // then이 반환하는 것은 결국 똑같은 promise 객체이기 때문에 .catch 메소드를 또 다시 사용할 수 있는 것이다(메소드 체이닝)
  promise
    .then((value) => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => { console.log('finally') });


  // Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  });

  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000)
      })
    })
    .then(num => console.log(num));
});

