import { Call } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import style from '../styles/Navbar.module.css'
function Navbar() {
    const [open, setOpen] = useState(false)
    const router=useRouter()
    console.log(router);
    return (
        <div className={style.container}>
            <div onClick={() => setOpen(false)} >
                <Link href={'/'}><Image src="/log-1.jpg" width={100} height={80} alt="paircare" /></Link>
            </div>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <Link href={'#Contacts'}>Contacts</Link>
                </li>
                <li className={style.listItem}>
                    <Link href={'#About'}>About</Link>
                </li>
                <li className={style.listItem}>
                    <Link href={'#Services'}>services</Link>
                </li>
                <li className={style.listItem}>
                    <Link href={'tel:8792635047'}><Call/></Link>
                </li>
            </ul>

            <div onClick={() => setOpen(!open)} className={style.menu}>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </div>
            {/*  menu item */}
            <ul onClick={() => setOpen(false)} style={{ right: open ? '0' : '-50vh' }} className={style.MenuItemCotainer}>
                <li className={style.menuItem}>
                    <Link href={'#Contacts'}>Contacts</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href={'#About'}>About</Link>
                </li>
                <li className={style.menuItem}>
                    <Link href={'#Services'}>Services</Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar