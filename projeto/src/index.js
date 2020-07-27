import * as React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Routes/>      
    </>
  );
}