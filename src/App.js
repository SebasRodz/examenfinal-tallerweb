// import React from 'react';
// import { Amplify } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import { I18n } from 'aws-amplify';
// import { translations } from '@aws-amplify/ui-react';
// import awsExports from './aws-exports';
// import Navbar from './pages/Navbar'
// import Body from './pages/Body'
// Amplify.configure(awsExports);

// I18n.putVocabularies(translations);
// I18n.setLanguage('es');

// I18n.putVocabularies({
//   es: {
//     'Sign In': 'Registrarse',
//     'Create Account': 'Regístrate',
//   },
// });

// function App({ signOut, user }) {
//   return (
//     <div>
//       <Navbar signout={signOut}/>
//       <Body />
//     </div>
//   );
// }

// export default withAuthenticator(App);
// import React from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;