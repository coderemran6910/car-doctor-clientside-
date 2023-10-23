import aboutImg from "../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-32 mb-44">
            <div className="relative">
                <img src={aboutImg} className=" w-[460px] h-[473px] object-cover rounded-xl" alt="" />
                <img src={aboutImg2} className="absolute right-[10%] -bottom-20  w-80 h-80  border-8 border-white  rounded-xl" alt="" />
            </div>

            <div>
                <span className="text-orange-600 font-bold mb-5">ABOUT US</span>
                <h2 className=" font-bold text-5xl w-[376px] mb-8" >We are qualified & of experience in this field</h2>
                <p className="mb-8"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                 <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mt-20 ">Get More Info</button>
            </div>
            
        </div>
    );
};

export default About;