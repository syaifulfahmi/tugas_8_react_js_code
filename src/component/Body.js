import React from 'react';
import {Button, ListGroup, Col, Row, Jumbotron} from 'react-bootstrap';
import PageLogin from './PageLogin'

function Body() {
	return(
		<>
			<Row>				
				<Col sm={3}>
					<ListGroup as="ul">
						<ListGroup.Item as="li" active>Liga 1 Indonesia</ListGroup.Item>
						<ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
						<ListGroup.Item as="li" disabled>Divisi Primera</ListGroup.Item>
						<ListGroup.Item as="li">Seri A</ListGroup.Item>
						<ListGroup.Item as="li">Ligue 1</ListGroup.Item>
						<ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col sm={6}>
					<Jumbotron>
						<h1>Divisi Primera</h1>
						<p>Main untuk Catalunya, Gerard Pique Minta Dihormati</p>
						<p>
							<Button variant="primary">Read more</Button>
						</p>
					</Jumbotron>
				</Col>
				<Col sm={3}>									    
					<PageLogin />
				</Col>
			</Row>		
		</>
	)
}

export default Body;