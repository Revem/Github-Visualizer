import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import api from "../utils/api";

export default function RepositoryInfo() {

  let { id, repo } = useParams()
  const [repoInfo, setRepoInfo] = useState()
  console.log("id:" + id + " repo: " + repo)

  useEffect(() => {
    if (repo) {
      api.get('/repos/' + id + '/' + repo)
        .then((response) => {
          setRepoInfo(response.data)
          console.log(repoInfo)
        })
        .catch((error) => console.error('Error fetching repository info:', error));
    }
  }, [repo])

  return (
    <div className="p-3">
      <SearchComponent />
      <Container className="p-5" style={{ marginTop: '8vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#1E2A47', borderRadius: '16px' }}>
        {repoInfo ? (
          <Row xs lg={2} className="mx-auto">
            <Row >
              <Col xs={12} md={6} className="my-auto mx-auto">
                <Image src={repoInfo.owner.avatar_url} roundedCircle fluid />
              </Col>
            </Row>
            <Row xs>
              <h3><a href={'../' + repoInfo.owner.login}>{repoInfo.owner.login}</a></h3>
              <h3 style={{ color: 'white' }}>
                🐣{repoInfo.name}
              </h3>
              <Row className="p-1">
                <Col>
                  <p style={{ color: 'white' }}>
                    💻{repoInfo.language}
                  </p>
                </Col>
                <Col>
                  <h5 style={{ color: 'white' }}>
                    🌟 {repoInfo.stargazers_count}
                  </h5>
                </Col>
              </Row>
              {repoInfo.description ? (<p style={{ color: 'white' }}>
                📃Descrição: <br />{repoInfo.description}
              </p>) : (<p style={{ color: 'white' }}>Esse projeto não possui descrição.</p>)}


              <h5><a href={repoInfo.html_url}> github link</a></h5>
            </Row>
          </Row>) : (
          <div>Carregando...</div>
        )}
      </Container>
    </ div >
  );
}