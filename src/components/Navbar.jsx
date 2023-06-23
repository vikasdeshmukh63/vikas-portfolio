    import React from 'react';
    import "../stylesheets/navbar.css";

  

    function Navbar({handleClick}) {

        const navlinks = [
            {
                title: "About Me",
                path: 1
            },
            {
                title: "Skills",
                path: 2
            },
            {
                title: "Projects",
                path: 3
            },
            {
                title: "Contact Me",
                path: 4
            }
        ]

    


        return (
            <div className='navbar'>
                <div className="logo-name">
                    <h1 className='text-2xl'><span>Vikas</span> Deshmukh</h1>
                </div>
                <div className="nav-elements">
                    <ul className='nav-list'>
                        {navlinks.map((item, index) => {
                            return <li key={index} className="text-lg" onClick={()=>{
                                handleClick(item.path)
                            }}>{item.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    export default Navbar
