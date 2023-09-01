export const initToken = async (
  botId: string,
  appId: string,
  appSecret: string,
  uid: string,
  bpid: string
) => {
  let res;
  try {
    res = await fetch(`https://data-dev.rbdialog.co.kr/api/client/auth/v1/init-token/${botId}`, {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify({
        appId,
        appSecret,
        uid,
        bpid,
        serviceProfile: 'LIVE',
      }),
    });
  } catch {
    return false;
  }

  if (res.status === 200) {
    const data = await res.json();
    if (data.result && data.result.iniToken) {
      return data.result.initToken;
    }
  }

  return false;
};
