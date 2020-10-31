import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login.js'
import Cadastrosistema from './pages/Cadastrosistema'
import Telainicial from './pages/Telainicial'
import Relatos from './pages/Relatos'
import Novorelato from './pages/Novorelato'
import Informes from './pages/Informes'
import Locais from './pages/Locais'
import Contatos from './pages/Contatos'
import Leis from './pages/Leis'
import Edepois from './pages/Edepois'
import Violencia from './components/Violencia'
import Abuso from './components/Abuso'
import Excluircontato from './components/Excluircontato'
import Editarcontato from './components/Editarcontato'
import Cadastrarcontato from './components/Cadastrarcontato'
import Contatoscadastrados from './components/Contatoscadastrados'
import EditarContatoNome from './components/EditarContatoNome'
import EditarContatoTelefone from './components/EditarContatoTelefone'
import NovoLocal from './components/NovoLocal'
const AppNavigator = createStackNavigator({
   Login,
   Telainicial,
   Cadastrosistema,
   Relatos,
   Novorelato,
   Informes,
   Locais,
   Contatos,
   Leis,
   Edepois,
   Violencia,
   Abuso,
   Excluircontato,
   Editarcontato,
   Cadastrarcontato,
   Contatoscadastrados,
   EditarContatoNome,
   EditarContatoTelefone,
   NovoLocal
});
  export default createAppContainer(AppNavigator);