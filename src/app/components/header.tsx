import React from 'react'
import Logo from './logo'
import SearchBar from './seach-bar'
import Link from 'next/link'


function Header() {
  return (
    <header className='flex items-center h-[12vh] justify-between '>
        <Logo />
        <SearchBar placeholder='Faça sua Pesquisa'/>
        <Link href={"/"}> 
            <section className='bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 border rounded-full rounded-bl-none text-white'>
                <p>Conta Premium</p>
            </section>
        </Link>
    </header>
  )
}

export default Header