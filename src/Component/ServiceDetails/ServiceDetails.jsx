import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const detailsData = useLoaderData() ;
    // const {id} = useParams() ;
    const {service_image, service_name, service_description, service_price, service_area} = detailsData ;
    // console.log(detailsData, 'details page')
    return (
        <div>
            <h1> Hello i am from serive details </h1>
            <p>{service_area}</p>
            <p>{service_description}</p>
            <p> {service_name} </p>
            <p> {service_price} </p>
            <img src={service_image} alt="" />
        </div>
    );
};

export default ServiceDetails;