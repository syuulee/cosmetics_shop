import { Link, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';


function App() {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(false)
    fetch(process.env.PUBLIC_URL + '/data.json')
      .then(res => res.json())
      .then(res => {
        setCon(res);
        setLoading(true);
      })
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
