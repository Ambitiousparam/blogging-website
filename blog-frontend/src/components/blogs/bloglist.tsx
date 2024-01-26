import { Blogtype} from "../../types/types"

type Props ={
     blogs:Blogtype[];
}
const Bloglist = (props:Props) => {
    console.log(props.blogs);
  return (
    <div>bloglist</div>
  )
}

export default Bloglist