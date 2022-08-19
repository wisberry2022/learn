window.addEventListener('DOMContentLoaded', function () {

  // 계산기 객체
  const CALC_OBJ = {
    name: 'calc',
    acc: '',
    window_acc: '',
    result: 0,
    operand_flag: false,
    temp: '',
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

    __windowNumDelete: function () {
      let w_result = this.window_acc.split('');
      let w_temp = w_result.splice(-1, 1);
      this.window_acc = w_result.join('');
    },

    __accDelete: function () {
      let a_result = this.acc.split('');
      let a_temp = a_result.splice(-1, 1);
      this.acc = a_result.join('');
    },

    __calculate: function () {
      this.expression.forEach(function (elm, idx, arr) {
        if (typeof (parseInt(elm)) == 'number') {
          if (!(idx)) {
            console.log(this.result);
            this.result += elm;
          } else {
            if (arr[idx - 1] == '+') {
              this.result += parseInt(elm);
            } else if (arr[idx - 1] == '-') {
              this.result -= parseInt(elm);
            } else if (arr[idx - 1] == 'X') {
              this.result *= parseInt(elm);
            } else if (arr[idx - 1] == '/') {
              this.result /= parseInt(elm);
            } else if (arr[idx - 1] == '%') {
              this.result %= parseInt(elm);
            }
          }
        }
      }, this)
    },

    __expressionAdd: function (value) {
      if (!(this.operand_flag)) {
        this.expression.length ?
          this.expression[this.expression.length - 1] += value :
          this.expression.push(value);
      } else {
        if (value == '=') {
          this.expression.push(value);
        } else {
          this.expression.push(value);
          this.expression.push('');
        }

      }
      console.log(this.expression);
    },

    __expressionDelete: function () {
      let lastAtom = this.expression[this.expression.length - 1].toString();
      if (lastAtom.length > 1) {
        let temp = this.expression[this.expression.length - 1].split('');
        temp.pop();
        this.expression
      } else {
        this.expression.splice(-1, 1);
      }
      // lastAtom.length > 1 ?
      //   console.log(this.expression[this.expression.length - 1].split('').splice(-1, 1)) :
      //   this.expression.splice(-1, 1);
      // console.log(this.expression);
      // this.expression.pop();
      // console.log(this.expression);
    },

    numClick: function (value) {
      this.operand_flag = false;
      this.__expressionAdd(value);
    },

    operandClick: function (value) {
      this.operand_flag = true;
      this.__expressionAdd(value);
      this.acc = '';
    },

    resultClick: function (showObj) {
      this.__calculate();
      this.__show();
      showObj.innerText = this.result;
    },

    clickShow: function (value, showObj) {
      this.__windowNumClick(value);
      showObj.innerText = this.window_acc;
    },

    deleteClick: function (delete_obj) {
      let result = delete_obj.innerText.split('');
      let temp = result.splice(-1, 1);
      delete_obj.innerText = result.join('');
      this.__windowNumDelete();
      this.__accDelete();
      this.__expressionDelete();
    },

    clearClick: function (...clearObj) {
      clearObj.forEach(function (elm) { elm.innerText = ''; });
      this.window_acc = '';
      this.acc = '';
      this.expression = [];
      this.result = 0;
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
        calc.operandClick(currentClick.innerText);
        if (currentClick.innerText == '=') {
          calc.resultClick(RESULT_SHOW);
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
