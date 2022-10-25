import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './styles/globalStyle';
import { UsersProvider } from './context';

function App() {

  return (
    <UsersProvider>
      <GlobalStyle />

      <AppRouter />
    </UsersProvider>
  )
}

export default App
