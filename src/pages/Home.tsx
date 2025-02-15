import icon from '../assets/icon.webp';
import downloadButton from '../assets/download-button.svg';
import screenshot1 from '../assets/screenshots/screenshot_1.webp';
import screenshot2 from '../assets/screenshots/screenshot_2.webp';
import screenshot3 from '../assets/screenshots/screenshot_3.webp';
import screenshot4 from '../assets/screenshots/screenshot_4.webp';
import screenshot5 from '../assets/screenshots/screenshot_5.webp';
import screenshot6 from '../assets/screenshots/screenshot_6.webp';

const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
];

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-8 max-w-[1200px] my-12'>
        <div className='flex gap-6'>
            <img
                className='w-32 rounded-[25%]'
                src={icon}
            />
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='text-5xl font-medium text-black'>Hydra</div>
                <div className='text-gray-600 text-center'>
                    <div>The best way to </div>
                    <div>browse Reddit</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 text-black mx-12'>
            <div>Hydra is a Reddit client built from the feedback of thousands of passionate Reddit users looking for the best possible experience.</div>
            <div>It features a beautifully designed, native iOS experience that feels right at home on your device. Hydra is the best way to browse Reddit, with a gorgeous image and video viewer, multireddit support, favorite subreddits, multiple account support, and much more.</div>
            <div>Hydra is the Reddit client you've been waiting for.</div>
        </div>
        <a href="https://apps.apple.com/us/app/hydra-for-reddit/id6478089063">
            <img
                className='w-48 cursor-pointer'
                src={downloadButton}
            />
        </a>
        <div className='max-w-full flex flex-wrap justify-center gap-6 mx-4'>
            {screenshots.map((screenshot, index) => (
                <img
                    key={index}
                    className='rounded-2xl max-w-[300px]'
                    src={screenshot}
                />   
            ))}
        </div>
    </div>
  )
}