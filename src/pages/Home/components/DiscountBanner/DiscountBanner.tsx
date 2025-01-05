import banner from '@/assets/images/DiscountBannar.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const DiscountBanner = () => {
  return (
    <section className="container">
      <div className='relative'>
        <img src={banner} alt="discount banner" className='w-full h-[22.5rem]'/>
        <div className="absolute top-12 right-[12%] text-white">
            <p className='uppercase'>Summer Sale</p>
            <p className='uppercase text-6xl py-5'><span className='font-semibold text-[#ff8a00]'>37%</span> off</p>
            <p className='font-normal text-gray-400'>Free on all your order, Free Shipping and <br /> 30 days money-back guarantee</p>
            <Link
                to="/products"
                className="text-primary-foreground shadow-xl px-8 py-3 bg-primary rounded-full font-semibold inline-block mt-6"
              >
                Shop now
                <ArrowRight className="inline-block ml-2" />
              </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
