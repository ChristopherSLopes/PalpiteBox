import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from './components/PageTitle'

 const fetcher = (...args) => fetch(...args).then(res => res.json())//...args 

const Index = () =>{

    const{data, error} = useSWR('/api/get-promo', fetcher)
    //return(<pre>{JSON.stringify(data)}</pre>) //Para ver se esta retornando alguma coisa

    return(
        <div>
            <PageTitle title='Seja Bem Vindo'/>
            <p className='mt-12 text-center'>
                O restaurante x estara sempre em busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p> /*Se não tiver data ainda, mostre que esta garregando*/}
            { !error && data && data.showCoupon && /*Aqui, se tiver data, mostre a mensagem. É uma maneira de fazer if no react*/ 
                <p className='my-12 text-center'>
                   {data.message}
                </p>
            }
        </div>
    )
}

export default Index;