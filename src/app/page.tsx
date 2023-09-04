"use client";

import { useState } from "react";

export default function Home() {
  const [chatRoomAddr, setChatRoomAddr] = useState("https://chat-dev.rbdialog.co.kr");
  const [botId, setBotId] = useState("8085bce3be6c4faba77b1c2353c43818");
  const [appId, setAppId] = useState("openbuilder-test");
  const [appSecret, setAppSecret] = useState("n9D6Lb668d0w");
  const [uid, setUid] = useState("uid");
  const [bpid, setBpid] = useState("bpid");

  const handleLaunch = async () => {
    const res = await fetch("/api/initToken", {
      method: "post",
      body: JSON.stringify({
        botId,
        appId,
        appSecret,
        uid,
        bpid,
      }),
    });

    if (res.status === 200) {
      console.log("haha");
      const data = await res.json();
      if (data.result && data.result.initToken) {
        const url = `${chatRoomAddr}?botId=${botId}&initToken=${data.result.initToken}`;
        window.open(url, `chatroom-${uid}`, "width=480,height=720");
        return;
      }
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
