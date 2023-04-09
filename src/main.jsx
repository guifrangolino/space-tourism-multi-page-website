import React from 'react'
import ReactDOM from 'react-dom/client'
import MainHome from './pages/MainHome/index'
import GlobalStyle from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainHome />
    <GlobalStyle />
  </React.StrictMode>,
)
