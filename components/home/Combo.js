import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import { combos } from '../../public/assets/data/home/Combo';



const Combo = () => {
    const settings = {
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "120px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          },
        
        ]
    }
    return (
        <div className='mb-[60px] lg:mb-[104px]'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-4'>
                    <h3
              className="text-primary text-[24px] lg:text-[48px]  font-nunito font-extrabold lg:leading-[56px] leading-[40px] lg:text-left text-center mb-[20px]"
            >
              Find the Perfect Combo 
            </h3>
            <p
              className="text-[#747474] text-[16px] font-nunito font-[600] leading-[20px] lg:text-left text-center"
            >
              Plan and Find your perfect package for next tour Plan and Find
              your perfect package for next tour Plan and Find your perfect
              package for next tour
            </p>

                    </div>
                    <div className='col-span-12 lg:col-span-8'>
                        <Slider {...settings}>
                        {
                             combos.map(({id,img})=> (
                                <div key={id} className="max-h-[408px] gap-2">
                             <div className='mx-2 '>
                             <Image
                               className=''
                               src={img}
                           
                               objectFit='cover'
                               alt=""
                               width={306} height={408}
                             />
                             </div>
                           </div>
                             ))
                        }

                        </Slider>

                    </div>

                </div>

            </div>

              
            
        </div>

        
    );
};

export default Combo;