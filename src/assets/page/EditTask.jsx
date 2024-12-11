import { useParams } from "react-router-dom"


const EditTask = () => {
  const {id}=useParams ()
  return (
    <div>EditTask -{id}</div>
  )
}

export default EditTask
