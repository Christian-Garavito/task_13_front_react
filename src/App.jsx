import { AppRouter } from './AppRouter';
import { ContenidoProvider } from './context/ContenidoProvider';


function App() {
  return (
    <ContenidoProvider>
      <AppRouter />
    </ContenidoProvider>
  );
}
export default App
