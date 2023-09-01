import { useState } from "react";

import "./App.css";
import { initToken } from "./api";

function App() {
  const [chatRoomAddr, setChatRoomAddr] = useState("https://chat-dev.rbdialog.co.kr");
  const [botId, setBotId] = useState("8085bce3be6c4faba77b1c2353c43818");
  const [appId, setAppId] = useState("openbuilder-test");
  const [appSecret, setAppSecret] = useState("n9D6Lb668d0w");
  const [uid, setUid] = useState("uid");
  const [bpid, setBpid] = useState("bpid");

  const handleLaunch = async () => {
    const token = await initToken(botId, appId, appSecret, uid, bpid);
    if (token) {
      const url = `${chatRoomAddr}?botId=${botId}&initToken=${token}`;
      window.open(url, `chatroom`, "width=480,height=720");
      return;
    }

    alert("Failed to receive a token!");
  };

  return (
    <div className="container">
      <label>Chatroom addr:</label>
      <input
        type="text"
        className="w100"
        value={chatRoomAddr}
        onChange={(e) => setChatRoomAddr(e.target.value)}
      ></input>
      <br />
      <br />

      <label>Bot ID:</label>
      <input
        type="text"
        className="w100"
        value={botId}
        onChange={(e) => setBotId(e.target.value)}
      ></input>
      <br />
      <br />

      <label>App ID:</label>
      <input
        type="text"
        className="w100"
        value={appId}
        onChange={(e) => setAppId(e.target.value)}
      ></input>
      <br />
      <br />

      <label>App secrete:</label>
      <input
        type="text"
        className="w100"
        value={appSecret}
        onChange={(e) => setAppSecret(e.target.value)}
      ></input>
      <br />
      <br />

      <label>uid:</label>
      <input
        type="text"
        className="w100"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      ></input>
      <br />
      <br />

      <label>bpid:</label>
      <input
        type="text"
        className="w100"
        value={bpid}
        onChange={(e) => setBpid(e.target.value)}
      ></input>
      <br />
      <br />

      <button onClick={handleLaunch} className="float-right">
        Launch
      </button>
    </div>
  );
}

export default App;
