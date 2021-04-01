import React, { useState, useEffect } from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import Router from './src/router'



const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(true)
  

  if (fontsLoaded) {
    return (
      <Provider theme={theme}>
        <Router />
      </Provider>
    )
  } else {
    return null
  }
}

export default App
