import React from 'react';
import PageTitle from './components/PageTitle'
import styles from './styles.module.css';

const Contato = () => {
    return(
        <div>
            <PageTitle title='Contato'/>
            <h1 className={styles.titulo}>Contato</h1>
            <h2>Entre em contato conosco e faça seu pedido!</h2>
            <p>WhatsApp: (45) 0000-0000</p>
        </div>
    )
}

export default Contato;