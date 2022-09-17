document.addEventListener('DOMContentLoaded', () => {
  const BTN = document.querySelector('input');
  const ARTICLE = document.querySelector('article');
  const key = 'KcPvvyVEaqORzpTkpeX8+k36SeU1KPEAdUK7gVD+Kt6hYBONhpq0ZQ8NcPEQR6O/uYEdi4c030PNJp5TL66XLw==';
  BTN.addEventListener('click', () => {

    const getData = () => {
      fetch(`http://data.humetro.busan.kr/voc/api/open_api_process.tnn?serviceKey=${key}&act=json&scode=101&day=1&updown=0&stime=13&enum=3`)
        .then(async (response) => {
          let js = await response.json();
          return js;
        })
        .then((data) => {
          console.log(data);
        })
    }
    getData();
  })

});