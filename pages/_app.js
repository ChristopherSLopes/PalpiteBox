import React from 'react';
import '../css/styles.css';
import Layout from '../pages/components/Layout';

const MyApp = ({Component, pageProps}) => {
    return(
        <Layout>
            <Component {...pageProps}/>{/* Esse é um children do layout*/}
        </Layout>
    )
}

export default MyApp;