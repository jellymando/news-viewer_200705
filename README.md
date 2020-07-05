## News Viewer Create 200705

newsapi에서 제공하는 API를 사용하여 최신 뉴스를 불러온 후 보여주기

### npm add axios

자바스크립트 HTTP 클라이언트.<br>
HTTP 요청을 Promise 기반으로 처리.<br><br>
const App = () => {<br>
  const [data, setData] = useState(null);<br>
  const onClick = () => {<br>
    axios.get('url').then(response => {<br>
      setData(response.data);<br>
    }<br>
  });<br>
};
<br><br>
<b>async 적용<b><br>
const App = () => {<br>
  const [data, setData] = useState(null);<br>
  const onClick = async() => {<br>
    try{<br>
      await axios.get('url');<br>
      setData(response.data);<br>
    } catch(e) {<br>
      console.log(e);<br>
    }<br>
  };<br>
};
