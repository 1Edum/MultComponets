import Image from 'next/image'
import React from 'react'

interface LogoProps  {
    className?: string;
}

function Logo({ className}: LogoProps) {
  return (
    <Image
        src={"/teste"} //Caminho da Logo
        width={100}
        height={100}
        alt='logo'
        className={`${className}`}
    />
  )
}

export default Logo