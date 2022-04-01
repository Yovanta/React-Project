import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'
import {SidebarData} from './SidebarData'
import Submenu from './Submenu'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <React.Fragment>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <h1 className='font-bold text-5xl'>TODO LIST</h1>
        <div></div>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
          <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index}/>
          })}
        </SidebarWrap>
      </SidebarNav>
    </React.Fragment>
  )
}

const Nav = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #4B5274;
  color: white;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;

export default Sidebar