import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import api from "../../utils/api";

export default function ReposComponent({ user }) {
  const [reposInfo, setReposInfo] = useState([]);
  const [sortOption, setSortOption] = useState('stars');

  const sortOptions = [
    { label: 'Estrelas', value: 'stars' },
    { label: 'Ordem Alfabética', value: 'alphabetical' },
  ]

  useEffect(() => {
    if (user) {
      api.get('users/' + user + '/repos')
        .then((response) => {
          let sortedRepos = response.data;

          if (sortOption === 'stars') {
            // Classificar por estrelas em ordem decrescente
            sortedRepos = sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
          } else if (sortOption === 'alphabetical') {
            // Classificar alfabeticamente por nome
            sortedRepos = sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
          }

          setReposInfo(sortedRepos);
        })
        .catch((error) => console.error('Error fetching user info:', error));
    }
  }, [user, sortOption]);

  return (
    <Container className="p-5" style={{ backgroundColor: '#141D2F', color: 'white' }}>
      <Row>
        <h1>Repositórios</h1>
        <Card className="mx-auto mt-5 p-5" style={{ backgroundColor: '#1E2A47', color: 'white' }}>
          Ordenar por:
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption} style={{ backgroundColor: '#1f2d4e', color: 'white', borderRadius: '16px' }}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {reposInfo.map((repo) => (
            <Card.Body key={repo.id}>
              <Container>
                <Row>
                  <Col>
                    <a href={'/' + repo.full_name}><strong>{repo.name}</strong></a>
                  </Col>
                  <Col className="text-end">
                    <a href={'http://github.com/' + repo.full_name}>github</a>
                    {'   '}🌟{repo.stargazers_count}

                  </Col>

                </Row>
              </Container>
            </Card.Body>
          ))}
        </Card>
      </Row>
    </Container>
  );
}
