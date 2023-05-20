import React, { useEffect, useState } from 'react'
import BlocArticles from '../../components/BlocArticles/BlocArticles';
import ContactUs from '../../components/Contact/Contact';
import Card from 'react-bootstrap/Card';
import image from '../../../public/images/1.jpg'
import Button from 'react-bootstrap/Button';

export default function HomePage(props: any) {
    const [result, setResult] = useState('')
    console.log(props.storage);
    const { storage } = props;

    useEffect(() => {
        const arraySort = [...storage].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        setResult(arraySort);
    }, [])

    const firstResult = result.length > 0 ? result[0] : null;


    // }
    // function bubleSort(array: any) {
    //     const length = array.length;

    //     for (let i = 0; i < length - 1; i++) {
    //         for (let j = 0; j < length - 1; j++) {

    //             if (array[j] > array[j + 1]) {
    //                 const element = array[j];
    //                 array[j] = array[j + 1];
    //                 array[j + 1] = element;

    //             }
    //         }
    //     }

    //     return array;
    // }

    // const tableau = [5, 3, 8, 2, 1, 4];
    // const tableauTrié = bubleSort(tableau);

    // console.log(tableauTrié);


    return (
        <>
            <h2>Page Acceuil</h2>
            <div className='acceuil'>
                <div className='acceuil_bloc'><BlocArticles storage={storage} /></div>
                <div className='acceuil_contact'><ContactUs /></div>
            </div>
            {/* {storage.map((s: any) => {
                    <>
                        <h6>{s.title}</h6>
                        <h6>{s.describe}</h6>
                    </>
                })} */}
            {firstResult && (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{firstResult.title}</Card.Title>
                        <Card.Text>
                            {firstResult.describe}
                        </Card.Text>
                        <Card.Text>
                            {firstResult.author}
                        </Card.Text>

                        <Button variant="warning">Go somewhere</Button>
                    </Card.Body>
                </Card>

            )}
            <div>
            </div>

        </>
    )
}
