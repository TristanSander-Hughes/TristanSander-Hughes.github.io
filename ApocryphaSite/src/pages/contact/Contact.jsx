import React from 'react';
import { Button, Form, Col} from 'react-bootstrap';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.ContactForm}>
            <div className={styles.Form}>
                <h1>Contact Us</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} sm="6" controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>    
                        <Form.Group as={Col} sm="6" controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} sm="12" controlId="formBasicSubject">
                            <Form.Label>Subject: </Form.Label>
                            <Form.Control type="text" placeholder="Enter subject of message" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} sm="12" controlId="formBasicMessage">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Message" />
                        </Form.Group>
                    </Form.Row>
                    <div className={styles.Button}>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
            </div>
            <div className={styles.ContactDetails}>
                <span className={styles.right}>Tel:</span><span>000 - 111 - 2222</span>
                <span className={styles.right}>Email:</span><span>home@apocrypha.co.za</span>
                <span className={styles.right}>Address:</span><span>Address 1</span>
                <span className={styles.right}></span><span>Address 2</span>
                <span className={styles.right}></span><span>Address 3</span>
                <span className={styles.right}></span><span>Address 4</span>
            </div>
        </div>
    );
}

export default Contact;