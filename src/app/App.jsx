import { StoreProvider } from 'easy-peasy'
import store from '../store'
import { Helmet } from 'react-helmet';
// Router
import Nav from '../components/nav'
import Create from '../components/create'
import { brand } from '../assets'

function App() {
	return (
		<StoreProvider store={store}>
			<Nav brandLogo={brand.brandLogo} name="Shopping List" />
			<Create />
		</StoreProvider>
	);
}

export default App;
