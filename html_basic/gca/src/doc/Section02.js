import '../css/section02.css';

const Section02 = () => {
  return (
    <section className="Business">
      <h2><span className="blue">our</span> business</h2>
      <p>그린컴퓨터아카데미의 다양한 강의영역을 소개합니다</p>
      <div className="container">
        <figure>
          <div className="img_box">
            <img src="./image/slide_01.jpg" alt="" />
          </div>
          <div className="cover">
            <h3>주요강의 1</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium, a beatae eos natus omnis.</p>
            <a href="#!">자세히보기....</a>
          </div>
        </figure>
        <figure>
          <div className="img_box">
            <img src="./image/slide_02.jpg" alt="" />
          </div>
          <div className="cover">
            <h3>주요강의 2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium, a beatae eos natus omnis.</p>
            <a href="#!">자세히보기</a>
          </div>
        </figure>
        <figure>
          <div className="img_box">
            <img src="./image/slide_03.jpg" alt="" />
          </div>
          <div className="cover">
            <h3>주요강의 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium, a beatae eos natus omnis.</p>
            <a href="#!">자세히보기</a>
          </div>
        </figure>
        <figure>
          <div className="img_box">
            <img src="./image/slide_04.jpg" alt="" />
          </div>
          <div className="cover">
            <h3>주요강의 4</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laudantium, a beatae eos natus omnis.</p>
            <a href="#!">자세히보기</a>
          </div>
        </figure>
      </div>
      <div className="inner">
        <div className="title">
          <strong>심플하지만 다 갖춘 그린컴퓨터아카데미</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus sapiente fugit?</p>
        </div>
        <div className="list">
          <ul className="dotList">
            <li>Lorem ipsum dolor</li>
            <li>sit amet consectetur</li>
            <li>elit. Tempora doloribus</li>
            <li>Lorem ipsum dolor sit</li>
            <li>amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section02;