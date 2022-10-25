import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './styles/globalStyle';
import { RepositoriesProvider, UsersProvider } from './context';

function App() {

  return (
    <UsersProvider>
      <RepositoriesProvider>
      <GlobalStyle />

      <AppRouter />
      </RepositoriesProvider>
    </UsersProvider>
  )
}

export default App
