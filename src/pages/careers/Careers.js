import { useLoaderData, Link } from 'react-router-dom'

const Careers = () => {

    const careers = useLoaderData()
    return ( 
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id} key={careers.id}>
                    <p>{career.title}</p>
                    <p>{career.location}</p>
                </Link>
            ))}
        </div>
     );
}

//loader function
export const careersLoader = async() => {
    const res = await fetch('http://localhost:8001/careers')
    console.log(res);
    if(res.status === 400){
        throw Error("URL to fetch the resource is not available");
    }
    if(res.status === 404){
        throw Error("Cound not fetch the careers");
    }
    return res.json();
    
}
 
export default Careers;