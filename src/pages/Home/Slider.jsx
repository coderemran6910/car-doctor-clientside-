import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'
const Slider = () => {
    return (
        <div className="carousel w-full mt-10 rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide4" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 



  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide1" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide3" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 




  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide2" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 


  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide3" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide5" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 



  <div id="slide5" className="carousel-item relative w-full">
    <img src={banner5} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide4" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide6" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 



  <div id="slide6" className="carousel-item relative w-full">
    <img src={banner6} className="w-full" />

    <div className="absolute flex  items-center  h-full top-0 left-0 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 bottom-10">
      <div className='text-white pl-24  '>
      <h2 className='text-3xl md:text-6xl text-white font-bold mb-6 w-96'>Affordable Price For Car Servicing</h2>
      <p className='mb-10'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
      <div>
      <button className="btn w-40 h-14 bg-orange-600 border-none outline-none text-white font-extrabold mr-10">Discover More</button>
      <button className="btn w-40 h-14 btn-outline border-white text-white">Latest Project</button>
      </div>
      </div>
    </div>

    <div className="absolute flex  transform -translate-y-1/2  right-10 bottom-10 ">
      <a href="#slide5" className="btn btn-circle mr-10 active:bg-orange-700 active:text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle active:bg-orange-700 active:text-white ">❯</a>
    </div>
  </div> 

</div>
    );
};

export default  Slider;