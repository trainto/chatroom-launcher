import { useState } from "react";

import './App.css'

function App() {
  const [chatRoomAddr, setChatRoomAddr] = useState('https://chat-dev.rbdialog.co.kr');
  const [botId, setBotId] = useState('');

  const handleLaunch = () => {
    const url = `${chatRoomAddr}?botId=${botId}`;
    window.open(url, `chatroom`, 'width=480,height=720')
  };

  return (
    <div className="container">
      <label>Chatroom addr:</label>
      <input type="text" className="w100" value={chatRoomAddr} onChange={(e) => setChatRoomAddr(e.target.value)}></input>
      <br /><br />
      <label>Bot ID:</label>
      <input type="text" className="w100" value={botId} onChange={(e) => setBotId(e.target.value)}></input>
      <br /><br />
      <button onClick={handleLaunch} className="float-right">Launch</button>
    </div>
  )
}

export default App
