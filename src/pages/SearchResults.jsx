import { useParams } from "react-router-dom"
import ReposComponent from "../components/ReposComponent"
import SearchComponent from "../components/SearchComponent"
import UserComponent from "../components/UserComponent"

export default function SearchResults() {

  let { id } = useParams()

  return (
    <>
      <SearchComponent />
      <UserComponent user={id} />
      <ReposComponent user={id} />
    </>
  )
}