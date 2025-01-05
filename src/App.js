import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Router>
      <div>
        <nav className={visible ? 'nav-visible' : 'nav-hidden'}>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
            <Link to="/goal">Goal</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/goal" element={<Goal />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="section hero">
      <h1 className="typing-effect">LeeSeungHun</h1>
      <p>
        안녕하세요! <span className="highlight">AI와 사이버 보안</span>을 공부하는 공대생입니다.
        <br /><br />
        새로운 기술을 공부하는 것을 좋아하고,<br/> 인공지능과 보안 분야에서 깊은 관심을 가지고 있습니다.
        <br /><br />
        현재는 <span className="highlight">AI 개발</span>과 
        <span className="highlight">웹 해킹</span>을 중점적으로 공부하고 있습니다
      </p>
    
    </section>
  );
}

function Info() {
  return (
    <section className="section">
      <div className="container">
        <h2>기술스택 및 경험</h2>
        
        <div className="tech-stack">
          <div className="tech-card">
            <h3>개발 스택</h3>
            <p><span className="highlight">Front-end:</span> HTML, CSS, JavaScript, React</p>
            <p><span className="highlight">Back-end:</span> Node.js</p>
            <p><span className="highlight">Database:</span> MongoDB</p>
            <p><span className="highlight">Version Control:</span> Git, GitHub</p>
            <p><span className="highlight">Development Tools:</span> VS Code</p>
          </div>

          <div className="tech-card">
            <h3>해킹&보안 기술</h3>
            <p><span className="highlight">네트워크 분석:</span> Wireshark</p>
            <p><span className="highlight">리버스 엔지니어링:</span> x64dbg, IDA Pro, Ghidra</p>
            <p><span className="highlight">웹 취약점 분석:</span> Burp Suite, OWASP ZAP</p>
            <p><span className="highlight">모의해킹:</span> Kali Linux, Metasploit</p>
          </div>

          <div className="tech-card">
            <h3>AI 기술</h3>
            <p><span className="highlight">프레임워크:</span> TensorFlow, PyTorch</p>
            <p><span className="highlight">라이브러리:</span> NumPy, Pandas, Scikit-learn</p>
            <p><span className="highlight">데이터 시각화:</span> Matplotlib, Seaborn</p>
            <p><span className="highlight">딥러닝:</span> CNN, RNN, Transformer</p>
          </div>
        </div>

        <div className="timeline">
          <h3>프로젝트 경험</h3>
          <div className="timeline-item">
            <h4>AI기반 딥페이크 판독 서비스</h4>
            <p>• CNN 기반의 이미지 분석 모델 개발</p>
            <p>• 실시간 영상 처리 시스템 구현</p>
            <p>• React 기반의 웹 인터페이스 개발</p>
          </div>
          <div className="timeline-item">
            <h4>사용자 맞춤형 쇼츠(AI알고리즘 담당)</h4>
            <p>• 컨텐츠 기반 필터링 적용</p>
            <p>• 자연어 처리 기술 활용하여 카테고리 분류</p>
            <p>• ML모델 활용 사용자 추천 시스템 구현</p>
          </div>
          <div className="timeline-item">
            <h4>현재 풀스택 x AI 프로젝트 진행중</h4>
            <p>• AI 담당</p>
          </div>
        </div>

        <div className="timeline">
          <h3>수료/이수</h3>
          <div className="timeline-item">
            <p>인공지능 기본과정(AI기술활용) : 2020.12 (160H)</p>
          </div>
          <div className="timeline-item">
            <p>군장병 AI.SW 역량강화 SW 개발과정 : 2023.03 ~ 12 (10M)</p>
          </div>
          <div className="timeline-item">
            <p>AI 및 데이터 중급과정 : 2024.9~11 (160H)</p>
          </div>
          <div className="timeline-item">
            <p>풀스택개발자 양성 교육 : 2024.07 ~ 12 (640H)</p>
          </div>
        </div>

        <div className="timeline">
          <h3>활동</h3>
          <div className="timeline-item">
            <p>KUCIS 소속 해킹동아리 : 2021 ~ 2022</p>
          </div>
          <div className="timeline-item">
            <p>대구경찰청 사이버수사과 대외활동 : 2024.4 ~ 12</p>
          </div>
          <div className="timeline-item">
            <p>AI 기반 서비스 창업 : 2024~</p>
          </div>
          <div className="timeline-item">
            <p>경북 정보보호 창업 아이디어톤 3위 선정</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Goal() {
  return (
    <section className="section">
      <div className="container">
        <h2>Future Goals</h2>
        
        <div className="goal-section">


          <div className="goal-card">
            <h3>보안 전문가</h3>
            <p>• 사이버 보안 취약점 연구</p>
            <p>• 보안 솔루션 개발</p>
            <p>• 화이트해커 활동</p>
            <p>• 보안 인증 자격증 취득</p>
            <p>• CTF 대회 참가 및 수상</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default App;
