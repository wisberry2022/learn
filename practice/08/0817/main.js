window.addEventListener('DOMContentLoaded', function () {

  const BTN = document.querySelector('.btn_box');
  const RESULT_SHOW = document.querySelector('.input_window .result');
  const CURRENT = document.querySelector('.input_window .current');

  let result = 0;
  let acc = '';
  let operand = '';
  let idx = 0;

  BTN.addEventListener('click', function (event) {
    if (event.target != event.currentTarget) {

      let clickNum = event.target.textContent;

      // clear, delete 버튼을 누르지 않았을 때
      if (!(event.target.classList.contains('func'))) {
        CURRENT.innerText += clickNum;
        // 숫자 패드를 눌렀을 때
        if ((event.target.classList.contains('number'))) {
          RESULT_SHOW.innerText += clickNum;
          acc += clickNum;
        }
      } else { // 연산자 패드를 눌렀을 때
        RESULT_SHOW.innerText = '';
        operand = clickNum;
        if (!(idx)) {
          result += parseInt(acc);
          acc = '';
        } else {

        }
        idx += 1;
      }
    }
    console.log(result);

  }

  })

});