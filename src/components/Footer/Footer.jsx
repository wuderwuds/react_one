import styles from './footer.module.css'
import React from 'react'
const Footer = () => {
    console.log('Footer render');
    return (
       
        <footer className={styles.wrapper}>Footer
        <a href="/Mpp">текст ссылки</a>
        </footer>
    )
}

export const MemoFooter = React.memo(Footer)