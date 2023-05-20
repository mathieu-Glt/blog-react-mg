import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocalStorage } from '../../hook/useLocalStorage'



export default function ContactUs() {

    const STORAGE_KEY = 'comment';
    const [storedComment, setStoredComment] = useLocalStorage(STORAGE_KEY, []);


    const [message, setMessage] = useState({
        name: "",
        subject: "",
        message: ""
    })

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        setStoredComment(message);

        setMessage({
            name: "",
            subject: "",
            message: ""
        })


    }


    function handleChange(evt: any) {
        console.log(evt.target);
        const { name, value }: any = evt.target;
        setMessage({ ...message, [name]: value })

    }


    return (
        <div>
            <h5>Contact us</h5>
            <Form onSubmit={(evt) => handleSubmit(evt)} >
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter a name" value={message.name} onChange={(evt) => handleChange(evt)} />
                    <Form.Group />
                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label>Subject :</Form.Label>
                        <Form.Control type="text" name='subject' placeholder="Enter a subject" value={message.subject} onChange={(evt) => handleChange(evt)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="message">Message :</Form.Label>
                        <Form.Control as="textarea" id="message" name='message' rows={3} value={message.message} onChange={(evt) => handleChange(evt)} />
                    </Form.Group>
                </Form.Group>

                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}
