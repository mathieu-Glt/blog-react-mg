import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formulaire from '../../components/Form/Form';

export default function BlogPage(props: any) {
    //     console.log(props.handleSubmitPost);
    // console.log(props.post);
    const { post } = props;
    console.log(post);





    return (
        <>
            <h2>Page creation of an article</h2>
            <Formulaire handleSubmitPost={props.handleSubmitPost} />


        </>
    )
}
