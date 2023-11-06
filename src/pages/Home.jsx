import SearchComponent from "../components/SearchComponent"

export default function Home({ doGetUser }) {
  return (
    <>
      <h1 style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>Github Search</h1>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <SearchComponent onSearch={doGetUser} />
      </div>
    </>
  )
}