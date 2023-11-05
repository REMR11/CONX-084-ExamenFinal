import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sifixed 
        top-0 
        left-0 
        z-40 
        w-40 
        h-screen 
        transition-transform 
        -translate-x-fulldebar
        bg-slate-600
        '>
            <ul className=''>
                <li className='p-1 bg-slate-500 
                hover:bg-slate-400
                text-slate-200
                '>
                    <Link to="/">Home</Link>
                </li>
                <li className='p-1 bg-slate-500 
                hover:bg-slate-400
                text-slate-200
                '>
                    <Link to="/Store">Store</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar