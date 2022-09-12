window.addEventListener('DOMContentLoaded', () => {

  function createElement(parent, newEle, textContent) {
    const newElement = document.createElement(newEle);
    newElement.textContent = textContent;
    parent.appendChild(newElement);
  }

  // const url = 'https://jsonplaceholder.typicode.com/posts';

  // const dataPull = (url) => {
  //   const xmlHttp = new XMLHttpRequest();
  //   const Parent = document.querySelector('.data_list');
  //   xmlHttp.open('GET', url);
  //   xmlHttp.send();

  //   xmlHttp.onload = function () {
  //     if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
  //       const datas = JSON.parse(xmlHttp.responseText);
  //       datas.map((el) => {
  //         createElement(Parent, 'li', el.title);
  //       })
  //       console.log(datas);
  //     }
  //   }
  // }

  // let urls = 'https://jsonplaceholder.typicode.com/posts';
  // dataPull(urls);

  const Parent = document.querySelector('.data_list');

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => data.map(el => {
      createElement(Parent, 'li', el.title);
    }))

})