import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import defaultTheme from './src/theme'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { Routes } from '@routes/index'
import { resetStorage } from '@storage/global'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  // Enable this line to reset the storage
  // resetStorage();

  return (
    <ThemeProvider theme={ defaultTheme }>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { !fontsLoaded ? <Loading /> : <Routes /> }
    </ThemeProvider>
  );
}

