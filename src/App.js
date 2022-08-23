import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Students from './Pages/Students/Students'
import Header from './Pages/Header/Header';
import Student from './Pages/Student/Student';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/students">
            <Students></Students>
          </Route>
          <Route exact path="/students/:id">
            <Student></Student>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
