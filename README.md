## News Viewer Create 200705

newsapi에서 제공하는 API를 사용하여 최신 뉴스를 불러온 후 보여주기

    npm add axios

자바스크립트 HTTP 클라이언트.   
HTTP 요청을 Promise 기반으로 처리.   
```
const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('url').then(response => {
      setData(response.data);
    }
  });
};
```
   
<b>async 적용</b>   
```
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
    try{
      await axios.get('url');
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };
};
```
