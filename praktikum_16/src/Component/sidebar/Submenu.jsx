import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)

    return (
        <React.Fragment>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div className='flex'>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>

            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </React.Fragment>
    )
}

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    padding: 20px;
    list-style: none;
    height: 60px;
    font-size: 18px;
    align-items: center;

    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span `
    margin-left: 16px;
`;

const DropdownLink = styled(Link) `
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`

export default SubMenu;