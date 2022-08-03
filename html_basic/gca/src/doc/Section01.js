import '../css/section01.css';

const Section01 = () => {
  return (
    <section className="About">
      <h2><span className="blue">CEO'S</span> GREETINGS</h2>
      <p>새로운 미래를 열어가는 그린컴퓨터아카데미 </p>
      <div className="container">
        <div className="des">
          <p className="title">
            웹 서비스의 <span className="blue">새로운 미래<br />
              그린컴퓨터아카데미</span>가 만들어 가겠습니다.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Id delectus, assumenda architecto recusandae in hic
            aliquid quo repudiandae itaque officiis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ex reiciendis assumenda non consectetur odit fugit
            animi. Debitis inventore, eaque minima odit blanditiis ullam velit similique?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            At doloremque nemo animi hic, blanditiis in?
          </p>

          <p>
            그린컴퓨터아카데미 강사진 일동
          </p>
        </div>
        <figure>
          <img src="./image/slide_01.jpg" alt="" />
        </figure>
      </div>
      <div className="inner">
        <h3>주요현황</h3>
        <table>
          <tbody>
            <tr>
              <th>주소</th>
              <td>부산광역시 부산진구 서전로 35-2 그린컴퓨터아카데미</td>
              <th>전화번호</th>
              <td>051-123-4567</td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>051-123-4567</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Section01;