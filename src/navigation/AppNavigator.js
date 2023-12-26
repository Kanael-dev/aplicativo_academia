// Importações necessárias
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Importe seus componentes de tela
import TelaLogin from '../screens/TelaLogin';
import HomeScreen from '../screens/DetailsScreen';
import Unsplash from '../screens/Unsplash';

// Crie o navegador de pilha
const AppNavigator = createStackNavigator(
  {
    Unsplash: Unsplash,
    HomeScreen: HomeScreen,
    TelaLogin: TelaLogin,
  },
  {
    initialRouteName: 'Unsplash',
  }
);

// Crie o contêiner do aplicativo
const AppContainer = createAppContainer(AppNavigator);

// Exporte o contêiner do aplicativo
export default AppContainer;
