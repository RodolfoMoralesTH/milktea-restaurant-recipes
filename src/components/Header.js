import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">
                        Monica's Recipe Book
                    </span>
                </h1>
            </div>
            <div className="profile">
            <img src="../pwo.jpg" className="profIm" />
            </div>
            
        </header>
    )
}

export default Header
