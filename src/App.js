import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabularies({
  es: {
    'Sign In': 'Registrarse',
    'Create Account': 'Regístrate',
  },
});

function App({ signOut, user }) {
  return (
    <div>
      <h1>Hola {user.username}</h1>
      <button onClick={signOut}>Desconectarse</button>
    </div>
  );
}

export default withAuthenticator(App);