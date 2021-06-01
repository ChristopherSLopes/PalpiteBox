import React from 'react';
import PageTitle from './components/PageTitle'
import styles from './styles.module.css';

const Sobre = () => {
    return(
        <div>
            <PageTitle title='Sobre'/>
            <h1 className={styles.titulo}>Sobre</h1>
            <h2>Descrição geral do restaurante</h2>
            <p>É recomendfado falar da expencia de comer no restaurante e sobre as influencias culinarias.</p>
        </div>
    )
}

export default Sobre;