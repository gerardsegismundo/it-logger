import React, { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'

// materialize css
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'

import './App.css'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  )
}

export default App
