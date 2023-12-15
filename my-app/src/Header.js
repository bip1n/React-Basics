import React from 'react'

// BEM =  Block Element Modifier

function Header() {
  return (
        <div className='header'>
            <h1 className='header__title'> This is a header </h1>
            <h2 className='header__user'> Sunny is signed in. </h2>
        </div>
    )
}

export default Header;