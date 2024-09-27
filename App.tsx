import Navigation from '@navigation/index';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import React from 'react';
import './src/utils/localStorage';
function App(): React.JSX.Element {
  return (
    <ProvidersWrapper>
      <Navigation />
    </ProvidersWrapper>
  );
}

export default App;
