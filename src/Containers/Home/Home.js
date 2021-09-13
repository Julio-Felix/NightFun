import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Image } from 'react-bootstrap';
export default function Home() {
    const facebookData = useSelector((state) => state.login.facebookData);
    
    return(
        <div>
            <h3>Home</h3>
            <Card.Body>
                <Card.Header>
                    <Image src={facebookData.picture.data.url} roundedCircle />
                </Card.Header>
                <Card.Title>{facebookData.name}</Card.Title>
                <Card.Text>
                    {facebookData.email}
                </Card.Text>
            </Card.Body>
        </div>
        
    );
}