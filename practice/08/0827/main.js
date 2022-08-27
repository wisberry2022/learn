document.addEventListener('DOMContentLoaded', () => {
  var count = 0;

  function createDOM(parentTag, tag, textContents, className) {
    let newTag = document.createElement(tag);
    if (typeof (className) != undefined) {
      newTag.classList.add(className);
    }
    newTag.textContent = textContents;
    parentTag.appendChild(newTag);
  }

  function toStorage(saveData) {
    saveData.map((itm, idx) => {
      localStorage.setItem(idx, itm.outerHTML);
    })
  }

  function storageToWindow(showObj) {
    for (const key in localStorage) {
      const value = localStorage.getItem(key);
      console.log(value);
    }

    
    // localStorage.map((idx, itm) => {
    //   showObj.appendChild(itm);
    // })
  }

  const RESULT = document.querySelector('.result');
  storageToWindow(RESULT);
  
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    let previousData = [...document.querySelector('.result').children];
    toStorage(previousData);    
  })

  const [ADD_BTN] = document.getElementsByClassName('add');
  const [DELETE_BTN] = document.getElementsByClassName('delete');
  const [SEARCH] = document.getElementsByTagName('input');

  ADD_BTN.addEventListener('click', function() {
    count++;
    let RESULT = document.querySelector('.result');
    let elem_value = SEARCH.value;
    createDOM(RESULT, 'div', elem_value, 'test01');
    console.log(count);
    // SEARCH.value = '';
  });

  DELETE_BTN.addEventListener('click', function() {
    let deleteArray = document.querySelector('.result');
    deleteArray.removeChild([...deleteArray.children].at(-1));
  });

  // SAVE_BTN.addEventListener('click', function() {
  //   let previousData = [...document.querySelector('.result').children];
  //   toStorage(previousData);
  // })
});