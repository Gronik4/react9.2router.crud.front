import './css/App.css';
import './css/stamp.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShowPosts } from './components/ShowPosts';
import { NewPost } from './components/NewPost';
import { EditPost } from './components/EditPost';
import { Chosen } from './components/Chosen';
import { useState, createContext } from 'react';

export const PostContext = createContext({getdata:0, setGetdata: ()=>{}})

function App() {
  const blankVurl = 'http://localhost:7777/';
  function DataProvider(props) {
    const [getdata, setGetdata] = useState(0);
    return(
      <PostContext.Provider value={{getdata, setGetdata}}>
        {props.children}
      </PostContext.Provider>
    )
  }
  return (
    <div className="App">
      <Router>
        <div className='app_header card'>
          <Link to={'posts/new'}><button className='btn'>Создать пост</button></Link>
        </div>
        <div className='app_content'>
          <DataProvider>
            <Routes>
              <Route path='/' exact element={<ShowPosts blank={blankVurl}/>}/>
              <Route path='/posts/new' element={<NewPost blank={blankVurl}/>}/>
              <Route path='/post/:id' element={<Chosen blank={blankVurl}/>}/>
              <Route path='/posts/edit/:id' element={<EditPost blank={blankVurl}/>}/>
              <Route path='*' element={<ShowPosts blank={blankVurl}/>}/>
            </Routes>
          </DataProvider> 
        </div>
      </Router>
    </div>
  );
}

export default App;
