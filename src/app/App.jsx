import { StoreProvider, createStore, action } from 'easy-peasy'
import { Helmet } from 'react-helmet';
// Router
import AppRouter from './router';

const store = createStore({
	todos: ['Create store', 'Wrap application', 'Use store'],
	addTodo: action((state, payload) => { // we can update in mutable way.
	  state.todos.push(payload);
	}),
  });

function App() {
	return (
		<StoreProvider store ={store}>
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
