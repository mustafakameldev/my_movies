import {NavigationContainer} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {ReactQueryProvider} from '@providers/ReactQuiry.provider';

const ProvidersWrapper: FC<{children: ReactNode}> = ({children}) => (
  <ReactQueryProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </ReactQueryProvider>
);

export default ProvidersWrapper;
