import { AiOutlineArrowRight } from "react-icons/ai";

const SIngleService = ({service}) => {
    const {img,price, service_id, title, description  }= service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className=" w-full h-3/4"><img src={img}  className="w-full h-full" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
          <h2 className=" text-orange-600 text-xl font-bold">Price: ${price}</h2>
          <div className="text-xl text-orange-600"><AiOutlineArrowRight></AiOutlineArrowRight> </div>
          </div>
        
        </div>
      </div>
    );
};

export default SIngleService;