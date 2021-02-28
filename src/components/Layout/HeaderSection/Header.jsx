import React from "react";
import styles from "./Header.module.css";

function Header(){
    return(
        <section>
            <div className={styles.container}>
                Wear Mask, Wash Hands and Practise Social Distancing.
            </div>
        </section>
        
    );
}

export default Header;