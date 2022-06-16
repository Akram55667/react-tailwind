import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes =[
        {id: 1, name:'Home', link: '/Home'},
        {id: 2, name:'Shop', link: '/Shop'},
        {id: 3, name:'Deals', link: '/Deals'},
        {id: 4, name:'Contact', link: '/Contact'},
        {id: 4, name:'Coupons', link: '/Coupons'},
    ]
    return (
        <nav className='bg-indigo-200'>

                <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
                 {open ? <XIcon></XIcon>  :  <MenuIcon></MenuIcon>}
                 </div>   

            <ul className={`md:flex mb:static justify-center absolute bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                
                {
                    routes.map(route =><Link key={route.id}
                    route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;