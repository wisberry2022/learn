document.addEventListener('DOMContentLoaded', () => {
  const promise = new Promise((resolve, reject) => {
    console.log('doing something')
    setTimeout(() => {
      resolve('ellie');
      // reject(new Error('no network'))
    }, 2000);
  });

  promise
    .then(value => { console.log(value) })
    .catch(error => { console.log(error) })
    .finally(() => { console.log('finally') });

  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve) => {
        setTimeout(resolve(num - 1), 1000);
      })
    })
    .then(num => console.log(num));

  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('chick'), 1000);
    });

  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${hen} => egg`), 1000);
    });

  const Cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => cook`), 1000)
    });

  getHen()
    .then(getEgg)
    .catch(error => {
      return 'bread';
    })
    .then(Cook)
    .then(console.log)
    .catch(console.log);

})