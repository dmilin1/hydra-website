import downloadButton from '../assets/download-button.svg';
import playDownloadButton from '../assets/play-download-button.svg';

export default function Navbar() {
    return (
        <nav className='w-full bg-white text-black border-t border-gray-200 mt-12'>
            <div className='max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-6 py-5'>
                <ul className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:text-base list-none p-0 m-0'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='https://www.reddit.com/r/HydraClient/'>/r/HydraClient</a></li>
                    <li><a href='https://github.com/dmilin1/hydra'>GitHub</a></li>
                    <li><a href='/privacy'>Privacy</a></li>
                    <li><a href='/support'>Support</a></li>
                </ul>
                <div className='flex items-center justify-center gap-4 shrink-0'>
                    <a href='https://apps.apple.com/us/app/hydra-read-upvote-comment/id6478089063'>
                        <img className='h-8' src={downloadButton} alt='Download on the App Store' />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.dmilin.hydra'>
                        <img className='h-8' src={playDownloadButton} alt='Get it on Google Play' />
                    </a>
                    <a href='https://discord.gg/ypaD4KYJ3R'>
                        <img className='h-8' src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c1c2d8d50382c7df8a_636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg' alt='Join our Discord' />
                    </a>
                </div>
            </div>
        </nav>
    );
}