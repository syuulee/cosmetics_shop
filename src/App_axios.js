import { Link, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);
  const url = process.env.PUBLIC_URL + '/data.json';

  useEffect(() => {
    setLoading(false);
    const getData = async () => {
      const res = await axios.get(url);
      setCon(res.data);
      setLoading(true);
    }
    getData();
    // axios(url).then(res => {
    //   setCon(res.data);
    //   setLoading(true);
    // })
  }, [])
  return (
    <div>
      <div>
        {
          loading ? <div>
            {
              con.map(it => {
                return (
                  <div key={it.id}>
                    <Link to={"/list/" + it.id}>
                      {/* <img src={process.env.PUBLIC_URL + it.img} alt="" /> */}
                      {it.name}
                    </Link></div>
                )
              })
            }
            <Routes>
              <Route path='/list/:num' element={<Detail list={con} />} />
            </Routes>
          </div>
            : <div>없네</div>
        }
      </div>
      <Header />

    </div >
  );
}

export default App;
