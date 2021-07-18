import React from 'react'
import { RiUser3Line } from 'react-icons/ri'
import { CgGym } from 'react-icons/cg'
import { FaWrench } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'

export const SidebarData = [
  {
    title: 'User',
    path: 'user',
    icon: <RiUser3Line size='42px'/>,
    cName: 'navButton'
  },
  {
    title: 'Vids',
    path: 'vids',
    icon: <CgGym size='42px'/>,
    cName: 'navButton'
  },
  {
    title: 'Help',
    path: 'help',
    icon: <FaWrench size='42px'/>,
    cName: 'navButton'
  },
]