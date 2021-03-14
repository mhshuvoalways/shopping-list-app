import { StoreProvider } from 'easy-peasy'
import store from '../store'
import { Helmet } from 'react-helmet';
// Router
import AppRouter from './router';

function App() {
	return (
		<StoreProvider store={store}>
			<Helmet>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap'
					rel='stylesheet'
				/>
			</Helmet>
			<AppRouter />
		</StoreProvider>
	);
}

export default App;
