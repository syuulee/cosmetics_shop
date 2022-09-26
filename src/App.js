import { Link, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Detail from './pages/Detail2';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const url = 'https://desipossa.github.io/shop_cra/assets/data.json';
    const getData = async () => {
      const res = await axios.get(url);
      const newdata = res.data.slice(0, 100);
      //   .map(con => {
      //   return {
      //     id: con.id,
      //     name: con.name,
      //     des: con.description,
      //   }
      // })
      setCon(newdata);
      setLoading(true);
      // console.log(res.data)
    }
    getData();
    // axios(url).then(res => {
    //   setCon(res.data);
    //   setLoading(true);
    // })
  }, [])
  return (
    <div>
      {console.log(con)}
      <div>
        {
          loading ? <div>

            <Routes>
              <Route path='/' element={
                con.map(it => {
                  return (
                    <div key={it.id}>
                      <Link to={"/list/" + it.id}>
                        {it.name}
                      </Link>
                    </div>
                  )
                })
              } />
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
