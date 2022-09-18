document.addEventListener('DOMContentLoaded', () => {
  const BTN = document.querySelector('input');
  const ARTICLE = document.querySelector('article');
  const key = 'KcPvvyVEaqORzpTkpeX8%2Bk36SeU1KPEAdUK7gVD%2BKt6hYBONhpq0ZQ8NcPEQR6O%2FuYEdi4c030PNJp5TL66XLw%3D%3D';

  const getData = () => {
    fetch(`https://data.humetro.busan.kr/voc/api/open_api_process.tnn?serviceKey=${key}&day=1&updown=1&stime=1503&enum=5&act=json&scode=110`)
      .then(async (response) => {
        let js = await response.json();
        return js;
      })
      .then((data) => {
        console.log(data);
      })
  }
  BTN.addEventListener('click', () => {


    getData();
  })

});