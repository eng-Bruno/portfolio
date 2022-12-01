import React, {useState} from "react";
import {IoMdMenu, IoMdClose, IoMdDocument} from 'react-icons/io'
import { FaHome, FaPaste} from 'react-icons/fa'
import { BsFileText} from 'react-icons/bs'
import { BiBookBookmark} from 'react-icons/bi'
import { MdOutlineContactSupport} from 'react-icons/md'

import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }

    return (
        <div className={active ? 'header' : 'header-mobile'}>

                <div className="menu-icon" onClick={activateNav}>
                    {!active ? <IoMdMenu className="menu"/> : <IoMdClose className="menu"/>}
                </div>

            <nav>
                <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                    <li>
                        <FaHome className="icon" style={{color: 'white'}}/>
                        <Link to='/'>Home</Link>
                    </li>
                    <br />
                    <br />
                    <li>
                        <BsFileText className="icon" style={{color: 'white'}}/>
                        <Link to='/'>Sobre</Link>
                    </li>
                    <br />
                    <br />
                    <li>
                        <BiBookBookmark className="icon" style={{color: 'white'}}/>
                        <Link to='/'>Resumo</Link>
                    </li>
                    <br />
                    <br />
                    <li>
                        <FaPaste className="icon" style={{color: 'white'}}/>
                        <Link to='/'>Portfolio</Link>
                    </li>
                    <br />
                    <br />
                    <li>
                        <MdOutlineContactSupport className="icon" style={{color: 'white'}}/>
                        <Link to='/'>Contato</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header