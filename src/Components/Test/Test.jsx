import React, { useRef } from 'react'
import './Test.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Test = () => {


    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='test'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Alisa Bosconovitch</h3>
                                <span>Edusity, Germany</span>
                            </div>
                        </div>
                        <p>Die Entscheidung, mein Studium an der Edusity fortzusetzen, war eine der besten Entscheidungen, die ich je getroffen habe. Die unterstützende Gemeinschaft, die hochmodernen Einrichtungen und das Engagement für akademische Exzellenz haben meine Erwartungen wirklich übertroffen. </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_2} alt="" className='jack'/>
                            <div>
                                <h3>Captain Jacksparrow</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitmet to academic excellence have truly exceeded my expectations.  </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_3} alt="" className='jack'/>
                            <div>
                                <h3>Yae Miko</h3>
                                <span>Edusity, Japan</span>
                            </div>
                        </div>
                        <p>Edusity で学位を取得するという選択は、私がこれまでに行った最良の決断の 1 つでした。協力的なコミュニティ、最先端の施設、学術の卓越性への取り組みは、本当に私の期待を上回りました。 </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sung Jinwoo</h3>
                                <span>Edusity, South Korea</span>
                            </div>
                        </div>
                        <p>Edusity에서 학위를 취득하기로 선택한 것은 제가 내린 최고의 결정 중 하나였습니다. 지원적인 커뮤니티, 최첨단 시설, 학문적 우수성에 대한 헌신은 정말 제 기대를 뛰어넘었습니다. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Test