

import './App.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [a, seta] = useState(false);
  const [b, setb] = useState(false);
  const [c, setc] = useState(false);
  const [dd, setdd] = useState('');
  const [d, setd] = useState('');
  const [dc, setdc] = useState('');
  const [i, seti] = useState('gg.png');
  const [i1, seti1] = useState('');
  const [e, sete] = useState('JERIN');
  const [eu, seteu] = useState('');
  const [f, setf] = useState(false);

  const touch1 = () => {
    seta(true);
  };
  const touch2 = () => {
    setb(true);
  };
  const touch3 = () => {
    setc(true);
  };
  const pass = (pp) => {
    console.log(pp.target.value.length);
    setdd(pp.target.value);

    if (pp.target.value.length === 0) {
      setd('');
    } else if (pp.target.value.length > 7) {
      setdc('d1');
      setd('strong password');
    } else if (pp.target.value.length < 8) {
      setdc('d2');
      setd('password must be in 8 characters');
    }
  };

  const im = (ii) => {
    seti1(ii.target.value);
  };
  const touch5 = (ii1) => {
    seti(ii1.target.value);
    seti(i1);
  };

  const user = (us) => {
    seteu(us.target.value);
  };
  const touch4 = (p1) => {
    sete(eu);
  };

  const touch6 = () => {
    setf(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="all1">
          <div className="all">
            <div className="first">
              <div class="i2">
                <h2>User name</h2>
                <input type="text" placeholder="user name"></input>
                <h2>Password</h2>
                <input type="password" placeholder="password"></input>
                <br></br>
                <button onClick={touch6}>Submit</button>
                <br></br>
              </div>
            </div>

            {f && (
              <div className="second">
                <div className="i3">
                  <button className="ib" onClick={touch1}>
                    <h3>Edit user name</h3>
                  </button>
                  <br></br>

                  {a && (
                    <div>
                      <input
                        type="text"
                        onChange={user}
                        placeholder="Enter new username"
                        className="in2"
                      />

                      <button className="bu1" onClick={touch4}>
                        submit
                      </button>
                    </div>
                  )}

                  <button className="ib" onClick={touch2}>
                    <h3>Edit password</h3>
                  </button>
                  <br></br>
                  <div class={dc}>{d}</div>
                  {b && (
                    <div>
                      {' '}
                      <input
                        type="password"
                        onChange={pass}
                        placeholder="Enter new password"
                        className="in2"
                      ></input>
                      <button className="bu1" onClick={touch6}>
                        submit
                      </button>
                    </div>
                  )}
                  <button className="ib" onClick={touch3}>
                    <h3>Edit profile picture</h3>
                  </button>
                  <br></br>
                  {c && (
                    <div>
                      <input
                        type="url"
                        placeholder="upload profile picture"
                        onChange={im}
                        className="in2"
                      ></input>
                      <button className="bu1" onClick={touch5}>
                        submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="i1">
              <img src={i} width="190px" alt="profile"></img>
              <br></br>
              <h2>{e}</h2>
              <h2></h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
