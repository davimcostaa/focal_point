import Image from 'next/image'
import React from 'react'
import styles from './header.module.scss'
const Header = () => {
  return (
    <nav className={styles.header}>
        <div>
            <Image src={'/images/logo.png'} width={150} height={36} />
        </div>

        <h3 className={styles.name}>Bem-vindo de volta, Marcus</h3>
        <p>Segunda, 01 de dezembro de 2025</p>

    </nav>
  )
}

export default Header