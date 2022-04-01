import React from 'react'
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';


export const SidebarData =[
    {
        title : 'Home',
        path : '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title : 'About',
        path : '/about',
        icon: <HiIcons.HiOutlineUserGroup />, 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: 'About App',
              path: '/about/about-app',
              icon: <ImIcons.ImUserTie/>,
              cName: 'sub-nav'
            },
            {
              title: 'About Author',
              path: '/about/about-author',
              icon: <IoIcons.IoIosDesktop />,
              cName: 'sub-nav'
            },
        ]
    }
]