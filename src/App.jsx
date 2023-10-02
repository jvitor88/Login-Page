
import Form from './components/form/form'
import Logo from './components/logo/logo'

import LogoImg from './images/aboutuspage.png'
import googleLogo from './images/google-logo.png'

import './App.css'

function App() {

  return (
    <div className='app'> 
      <div className='logo'>
        <Logo LogoImg={LogoImg}/>
      </div>
      <div className='form'>
        <Form googleLogo={googleLogo}/>
      </div>
    </div>
  )
}

export default App
