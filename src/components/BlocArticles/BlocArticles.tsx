import React from 'react'
import Card from 'react-bootstrap/Card';
import image from '../../../public/images/1.jpg'
import Button from 'react-bootstrap/Button';



export default function BlocArticles(props: any) {

    const { storage } = props;
    console.log(storage);



    return (
        <>
            <div className='boite-reception '>
                <h5>Boite de reception des articles </h5>
                <div className='boite'>
                    {storage.map((p: any) => (
                        <Card style={{ width: '18rem' }} key={p.id}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>
                                    {p.describe}
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}


                </div>
            </div>
        </>
    )
}
