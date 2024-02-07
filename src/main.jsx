import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home }  from './pages/Home';
import { Post }  from './pages/Post';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Post />
  </React.StrictMode>,
)
