import React from 'react';
import './App.css';
import AppRouter from "./components/RouterComponent";
import NavBar from "./components/NavBar";
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div>
          <NavBar/>
          <Container>
                <AppRouter/>
          </Container>
      </div>
  );
}

export default App;