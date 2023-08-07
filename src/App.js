import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import ChatBot from "./ChatBotpage";
import HomeScreen from "./HomeScreen";
import FaceRecog from "./FaceRecog";
import Map from "./Map";
import Kakao from "./Kakaomap";


function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (todo) => {
    setToDos((prevToDos) => [todo, ...prevToDos]);
  };

  return (
    <Router>
      <div>
        <h1>Emo:U</h1>
        <hr />
        <nav>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={{ margin: "0 10px" }}>
              <Link to="/">홈</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/ChatBot">챗봇</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/Map">지도</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/Face-recognition">표정 인식</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/ChatBot">
            <ChatBot addToDo={addToDo}/>
          </Route>
          <Route path="/Map">
            <Map addToDo={addToDo}/>
          </Route>
          <Route path="/Face-recognition">
            <FaceRecog addToDo={addToDo}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
