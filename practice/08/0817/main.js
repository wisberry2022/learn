window.addEventListener('DOMContentLoaded', function () {

  // 계산기 객체
  const CALC_OBJ = {
    name: 'calc',
    acc: '',
    window_acc: '',
    result: 0,
    expression: new Array(),
    __show: function () {
      console.log(this.name, this.acc, this.result, this.expression);
    },

    __numClick: function (value) {
      this.acc += value;
    },

    __windowNumClick: function (value) {
      this.window_acc += value;
    },

    __calculate: function () {
      this.expression.forEach(function (elm, idx, arr) {
        if (typeof (elm) == 'number') {
          if (!(idx)) {
            console.log(this.result);
            this.result += elm;
          } else {
            if (arr[idx - 1] == '+') {
              this.result += elm;
            } else if (arr[idx - 1] == '-') {
              this.result -= elm;
            } else if (arr[idx - 1] == 'X') {
              this.result *= elm;
            } else if (arr[idx - 1] == '/') {
              this.result /= elm;
            } else if (arr[idx - 1] == '%') {
              this.result %= elm;
            }
          }
        }
      }, this)
    },

    numClick: function (value) {
      this.acc += value;
      this.__show();
    },

    operandClick: function (value) {
      this.expression.push(parseInt(this.acc));
      this.expression.push(value);
      this.acc = '';
    },

    resultClick: function () {
      this.expression.push(parseInt(this.acc));
      this.__calculate();
      this.__show();
    },

    clickShow: function (value, showObj) {
      this.__windowNumClick(value);
      showObj.innerText = this.window_acc;
    },


    deleteClick: function (delete_obj) {
      let result = delete_obj.innerText.split('');
      let temp = result.splice(-1, 1);
      delete_obj.innerText = result.join('');
      let w_result = this.window_acc.split('');
      let w_temp = w_result.splice(-1, 1);
      this.window_acc = w_result.join('');
      let a_result = this.acc.split('');
      let a_temp = a_result.splice(-1, 1);
      this.acc = a_result.join('');
    },

    clearClick: function (...clearObj) {
      clearObj.forEach(function (elm) { elm.innerText = ''; });
      this.window_acc = '';
      this.acc = '';
      this.expression = [];
    },
  };

  const BTN = document.querySelector('.btn_box');
  const RESULT_SHOW = document.querySelector('.input_window .result');
  const CURRENT = document.querySelector('.input_window .current');

  let calc = CALC_OBJ;

  BTN.addEventListener('click', function (event) {
    const currentClick = event.target;
    // 계산기 패드를 눌렀을 때
    if (event.target != event.currentTarget) {
      // 숫자 패드를 눌렀을 때
      if (currentClick.classList.contains('number')) {
        calc.clickShow(currentClick.innerText, CURRENT);
        calc.numClick(currentClick.innerText);
      }// 연산자 패드를 눌렀을 때
      else if (currentClick.classList.contains('operand')) {
        calc.clickShow(currentClick.innerText, CURRENT);
        if (currentClick.innerText == '=') {
          calc.resultClick();
        } else {
          calc.operandClick(currentClick.innerText);
        }

      } else // func 패드를 눌렀을 때 {
        // DELETE 패드를 눌렀을 때
        if (currentClick.innerText == 'DELETE') {
          calc.deleteClick(CURRENT);
        }
        // CLEAR 패드를 눌렀을 때
        else {
          calc.clearClick(CURRENT, RESULT_SHOW);
        }
    }
  });
});
