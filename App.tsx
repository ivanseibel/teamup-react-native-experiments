import { Events } from '@screens/Events'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Events />
    </ThemeProvider>
  );
}

