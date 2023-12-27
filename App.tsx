import { Events } from '@screens/Events'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={ defaultTheme }>
      { !fontsLoaded ? <Loading /> : <Events /> }
    </ThemeProvider>
  );
}

