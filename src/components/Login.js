import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from 'react-bootstrap';

export default function Login(params) {
	return(
		<Container>
			<Row className='justify-content-center align-content-center'>
				<Card>
					<CardHeader>
						<Col>
							<h1>Login</h1>
						</Col>
					</CardHeader>
					<CardBody>
						<Col>
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Form.Group controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Remember me" />
								</Form.Group>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
							<p>Or Sign In using</p>
							<div>
								<Button variant="primary" type="submit">
									Google
								</Button>
								<Button variant="primary" type="submit">
									Github
								</Button>
							</div>
						</Col>
					</CardBody>
				</Card>
			</Row>
		</Container>
	);
};
