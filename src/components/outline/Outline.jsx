import React from 'react'
import Sidebar from "../../utils/Sidebar/Sidebar"
import Header from '../../utils/Header/Header'
import { Outlet } from 'react-router-dom';
import Container from '../../utils/Container/Container';

const Outline = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container>
        <main style={{marginTop: "40px"}}>
          <Outlet />
        </main>
        </Container>
      </div>
    </div>
  )
}

export default Outline
