import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Formulaire(props: any) {
    console.log(props.handleSubmitPost);

    const { handleSubmitPost } = props

    const [post, setPost] = useState({
        author: "",
        title: "",
        describe: ""
    })

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        handleSubmitPost(post);
        
        setPost({
            author: "",
            title: "",
            describe: ""
        })


    }

    function handleChange(evt: any) {
        console.log(evt.target);
        const { name, value }: any = evt.target;
        setPost({ ...post, [name]: value })

    }

    return (
        <>
            <Form onSubmit={(evt) => handleSubmit(evt)} >
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Name author :</Form.Label>
                    <Form.Control type="text" name='author' placeholder="Enter an author's name" value={post.author} onChange={(evt) => handleChange(evt)} />
                    <Form.Group />
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title :</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter a title" value={post.title} onChange={(evt) => handleChange(evt)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="describe">Describe :</Form.Label>
                        <Form.Control as="textarea" id="describe" name='describe' rows={3} value={post.describe} onChange={(evt) => handleChange(evt)} />
                    </Form.Group>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>

    )
}
