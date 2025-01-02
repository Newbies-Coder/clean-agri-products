import Autoplay from 'embla-carousel-autoplay';

import { bannerItems } from '@/mocks/banner';
import BannerItem from './BannerCustom';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/UI/carousel';

const Banner = () => {
	return (
		<Carousel
			opts={{
				align: 'start', // Align slides to the start
				loop: true, // Enable infinite looping
			}}
			plugins={[
				Autoplay({
					delay: 2000, // Time between slides in milliseconds
					stopOnInteraction: false, // Continue autoplay even on user interaction
				}),
			]}
			className='bg-slate-100'
		>
			<CarouselContent>
				{bannerItems.map((item, index) => (
					<CarouselItem key={index}>
						<BannerItem
							title={item.title}
							description={item.description}
							imageUrl={item.imageUrl}
							type={index % 2 === 0 ? 'left' : 'right'} // Alternate layout for each slide
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default Banner;
