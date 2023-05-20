import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../../../public/images/1.jpg'

export default function ArticlePage(props: any) {
  const { post } = props;
  console.log(post);

  return (
    <>
      <h4>Tout les articles du plus recent au plus ancien</h4>
      <div className='boite'>

        {post.map((p: any) => (
          <Card style={{ width: '30rem' }} key={p.id}>
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

    </>
  )
}
