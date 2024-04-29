// import logo from './logo.svg';
// import styles from './App.module.css';
import { ThemeProvider, styled } from 'styled-components';
import { lightTheme } from './utils/themes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Authentication from './pages/authentication';
import NavBar from './components/navbar';
import Dashboard from './pages/dashboard';
import Workouts from './pages/workouts';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    // will need to update class name and css file at a later date. 
    // <div className="App"> 
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <NavBar currentUser = {currentUser}/>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>  
    
    // </div>
  );
}

export default App;
