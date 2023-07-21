
import { useParams } from "react-router-dom";
const Category = () => {

    let { id } = useParams();
    console.log(id)

    return (
        <div className="main-secondary-pages">
            {id}
        </div>
    )
}

export default Category
