document.addEventListener('DOMContentLoaded', () => {
  class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
          ) {
            resolve(id);
          } else {
            reject(new Error('not found'))
          }
        }, 2000);
      });
    }

    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'ellie') {
            resolve({ name: 'ellie', role: 'admin' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000)
      })
    }
  }

  const User = new UserStorage();
  let name = prompt('이름을 입력하세요');
  let pwd = prompt('비밀번호를 입력하세요');

  // User.loginUser(name, pwd)
  //   .then((id) => User.getRoles(id))
  //   .then(data => { alert(`어서오세요! ${data.name}님! ${data.role} 입니다!`) })


  async function setUser() {
    let id = await User.loginUser(name, pwd);
    let data = await User.getRoles(id);
    alert(`어서오세요! ${data.name}님! ${data.role} 입니다!`)
  }

  setUser();
});



// User.getRoles(id)
// alert(`어서오세요! ${data.name}님! ${data.role} 입니다!`)
