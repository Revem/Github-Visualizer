import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import api from '../../utils/api';

export default function UserComponent({ user }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user) {
      api.get('users/' + user)
        .then((response) => setUserInfo(response.data))
        .catch((error) => console.error('Error fetching user info:', error));
    }
  }, [user]);

  if (!userInfo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='p-3'>
      <Container className='mt-5 text-white p-5' style={{ backgroundColor: '#1E2A47', borderRadius: '24px' }}>
        <Row xs lg={2}>
          <Row>
            <Col className='my-auto mx-auto' xs={6} md={12}>
              <Image src={userInfo.avatar_url} alt="User Avatar" roundedCircle fluid />
            </Col>
          </Row>
          <Col>
            <Container className='mt-5'>
              <Row>
                <Col>
                  <h3>{userInfo.name}</h3>
                  <h5>{userInfo.login}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{userInfo.bio}</p>
                </Col>
              </Row>
              {userInfo.email ? (
                <Row>
                  <Col>
                    <p><strong><a href={userInfo.email}>{userInfo.email}</a></strong></p>
                  </Col>
                </Row>
              ) : (<></>)}
              {userInfo.blog ? (
                <Row>
                  <Col>
                    <p><strong><a href={userInfo.blog}>{userInfo.blog}</a></strong></p>
                  </Col>
                </Row>
              ) : (<></>)}

              <Row>
                <Col>
                  <p>Seguidores: <strong>{userInfo.followers}</strong></p>
                </Col>
                <Col>
                  <p>Seguindo: <strong>{userInfo.following}</strong></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
