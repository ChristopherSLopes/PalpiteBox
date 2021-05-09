import React from 'react';

const Footer = () => {
    return(
        <div className='bg-green-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:
                Christopher Lopes / {' '} 
                <a className='hover:underline' href="">linkedin / </a>
                <a gitHub className='hover:underline' href="">gitHub</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;

//{' '} Força um expaço