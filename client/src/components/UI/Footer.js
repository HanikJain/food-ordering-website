import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
  <div className = {styles.footer}>
      <div>
        <a href="https://github.com/HanikJain/food-ordering-website" className={styles.footerLink}><i class="fab fa-github"></i></a>
      </div>
      
      <div>
        <a href="https://www.linkedin.com/in/hanik-jain-19a211144/" className={styles.footerLink} ><i class="fab fa-linkedin"></i></a>
      </div>
      
      
  </div>
  );
}
