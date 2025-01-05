import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type BannerItemProps = {
	title?: string; // Title of the banner
	description?: string; // Description text
	imageUrl?: string; // URL of the image to be displayed
	type?: 'right' | 'left'; // Layout type to control the position of the image
};

const BannerItem = ({
	title,
	description,
	imageUrl,
	type = 'left',
}: BannerItemProps) => {
	return (
		<section className='container flex flex-col items-center justify-between pt-10 lg:flex-row lg:py-5'>
			{/* Text Section */}
			<div
				className={`flex flex-col justify-center text-center lg:py-12 lg:text-left lg:w-6/12 xl:w-6/12 xl:py-24 ${
					type === 'right' ? 'lg:order-2' : ''
				}`}
			>
				<p className='font-semibold uppercase tracking-wide text-primary'>
					Welcome to shop
				</p>

				{title && (
					<h1 className='mb-7 text-4xl font-bold sm:text-4xl lg:text-5xl lg:mb-8'>
						{title}
					</h1>
				)}

				{description && (
					<p className='mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg'>
						{description}
					</p>
				)}

				{/* Call-to-Action Button */}
				<div className='flex justify-center gap-2.5 sm:flex-row lg:justify-start'>
					<Link
						to='/products'
						className='inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground outline-none transition duration-100 hover:bg-primary/80 focus-visible:ring active:bg-green-600 md:text-base'
					>
						Shop now
						<ArrowRight className='inline-block ml-2' />
					</Link>
				</div>
			</div>

			{/* Image Section */}
			<div
				className={`relative px-5 flex items-center sm:px-0 lg:h-auto lg:w-7/12 xl:w-8/12 ${
					type === 'right' ? 'lg:order-1 lg:right-10' : ''
				}`}
			>
				{imageUrl && (
					<img
						src={imageUrl}
						loading='lazy'
						alt='Vegetables'
						className='w-full'
					/>
				)}
			</div>
		</section>
	);
};

export default BannerItem;
