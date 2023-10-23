import { useEffect, useState } from "react";
import axios from "axios";
import SIngleService from "./SIngleService";

const Service = () => {

    const  [serviceData , setSeviceData] = useState([])

    useEffect(()=>{
        axios.get('/services.json')
        .then(res =>{
            console.log(res.data);
            setSeviceData(res.data)
        })

    } ,[])

    return (
        <div>
            <div className="text-center ">
            <span className="text-orange-600 font-bold mb-6 text-xl">Service</span>
            <h2 className="text-5xl font-bold mb-6 ">Our Service Area </h2>
            <p className="mb-10 ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {
            serviceData.map(service => <SIngleService key={service.id} service={service}></SIngleService>  )
        }
            </div>
        </div>
    );
};

export default Service;