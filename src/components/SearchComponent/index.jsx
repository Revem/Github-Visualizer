import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export default function SearchComponent({ onSearch }) {
  const [username, setUsername] = useState('')


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location.href = `/${username}`;
    }
  }

  return (
    <Form style={{ width: '100%', marginTop: '3vh', maxWidth: '1200px' }} className='mx-auto searchForm'>
      <InputGroup className='search'>

        <Form.Control
          className='searchTerm'
          style={{ height: '2rem', backgroundColor: '#1E2A47', border: '2px solid #1E2A47' }}
          placeholder='Nome de Usuário do Github'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <a href={'/' + username} className='searchButton' style={{ height: '2rem', fontSize: '1rem', width: '5rem', textDecoration: 'none' }} > <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} /></a>
      </InputGroup>
    </Form>
  )
}
