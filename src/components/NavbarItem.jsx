import React from 'react'
import { NavbarItemStyled } from '../styles/NavbarItem.styled'

function NavbarItem({ data, icon }) {
  return (
    <NavbarItemStyled>

      {
        icon === 'grid' &&
        <NavbarItemStyled>
          <a href={data}><span className="material-symbols-outlined">
            apps
          </span>{data}</a>
        </NavbarItemStyled>
      }

      {
        icon === 'profile' &&
        <NavbarItemStyled>
          <a href={data}><span className="material-symbols-outlined navbar-icons-profile">
            account_circle
          </span>{data}</a>
        </NavbarItemStyled>
      }

      <a href={data}>{data}</a>
    </NavbarItemStyled>
  )
}

export default NavbarItem