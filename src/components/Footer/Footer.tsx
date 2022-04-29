import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.body}>&copy; Acme</div>
    </footer>
  )
}

export default Footer
