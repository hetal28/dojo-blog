import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CareerDetails = () => {
    
    const { id } = useParams();
    const career = useLoaderData();
    const navigate = useNavigate();
    
    return ( 
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel dignissimos blanditiis magnam. Iusto possimus maiores quam neque voluptas saepe delectus nulla, architecto voluptatum magnam?</p>
            </div>
            <button onClick={() => navigate("/careers")}>Back</button>
        </div>
     );
}
 
export const careerDetailsLoader = async({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:8001/careers/" +id)
    console.log(res)
    if(res.status === 404){
        throw Error("Requested Career was not found!");
    }
    return res.json();
}
export default CareerDetails;