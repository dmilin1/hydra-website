import downloadButton from '../assets/download-button.svg';

export default function Navbar() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 h-16 bg-white text-black mb-16'>
            <div className='flex items-center justify-evenly gap-4 w-full sm:w-auto text-md'>
                <a href='/'>Home</a>
                <a href='https://www.reddit.com/r/HydraApp/'>/r/HydraApp</a>
                <a href='/privacy'>Privacy</a>
                <a href='/support'>Support</a>
            </div>
            <div className='flex gap-4 justify-center'>
                <a href='https://apps.apple.com/us/app/hydra-for-reddit/id6478089063'>
                    <img className='h-8' src={downloadButton} />
                </a>
                <a href='https://discord.gg/ypaD4KYJ3R'>
                    <img className='h-8' src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c1c2d8d50382c7df8a_636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg' />
                </a>
            </div>
        </div>
    );
}