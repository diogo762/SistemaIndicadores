
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Lista from './Pages/Lista';
import Indicador from './Pages/Indicador';
import Dashboard from './Pages/Dashboard';
import ListaBoaVista from './Pages/ListaBoaVista';
import ListaIncorporacao from './Pages/ListaIncorporacao';
import IndicadorBoaVista from './Pages/IndicadorBoaVista';
import IndicadorIncorporacao from './Pages/IndicadorIncorporacao';
import DashBoaVista from './Pages/DashBoaVista';
import DashIncorporacao from './Pages/DashIncorporacao';
import NewBoaVista from './Pages/NewBoaVista';
import NewIndicadorBoaVista from './Pages/NewIndicadorBoaVista';
import NewIndicadorIncorporacao from './Pages/NewIndicadorIncorporacao';
import NewIncorporacao from './Pages/NewIncorporacao';
import Header from './Components/Header';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/indicador" component={Indicador} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/listaboavista" component={ListaBoaVista} />
        <Route exact path="/listaincorporacao" component={ListaIncorporacao} />
        <Route exact path="/indicadorboavista" component={IndicadorBoaVista} />
        <Route exact path="/indicadorincorporacao" component={IndicadorIncorporacao} />
        <Route exact path="/dashboavista" component={DashBoaVista} />
        <Route exact path="/dashincorporacao" component={DashIncorporacao} />
        <Route exact path="/newboavista" component={NewBoaVista} />
        <Route exact path="/newincorporacao" component={NewIncorporacao} />
        <Route exact path="/newboavista/:id" component={NewBoaVista}  />
        <Route exact path="/newindicadorboavista/" component={NewIndicadorBoaVista}  />
        <Route exact path="/newindicadorincorporacao/" component={NewIndicadorIncorporacao}  />
        <Route exact path="/newindicadorincorporacao/:id" component={NewIndicadorIncorporacao}  />
        <Route exact path="/newindicadorboavista/:id" component={NewIndicadorBoaVista}  />
        <Route exact path="/newincorporacao/:id" component={NewIncorporacao}  />
       <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;