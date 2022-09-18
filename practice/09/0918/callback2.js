document.addEventListener('DOMContentLoaded', () => {
  class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'))
        }
      }, 2000);
    }

    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000)
    }
  }

  const userStorage = new UserStorage();
  const id = prompt('이름을 입력하세요!');
  const pwd = prompt('비밀번호를 입력하세요!');
  userStorage.loginUser(
    id,
    pwd,
    (user) => {
      userStorage.getRoles(user,
        (userWithRole) => {
          alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
        },
        (error) => { console.log(error) })
    },
    (error) => { console.log(error) })
});
