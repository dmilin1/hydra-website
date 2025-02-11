import privacyImg from '../assets/privacy.svg';


export default function Privacy() {
  return (
    <div className='flex flex-col items-center gap-8 max-w-[1200px] my-12'>
        <img
            className='w-32'
            src={privacyImg}
        />
        <div className='text-3xl font-bold'>Hydra Privacy Policy</div>
        <div className='flex flex-col gap-4 text-black mx-8 sm:mx-12'>
            <div>Hydra and its developer take your privacy very seriously. Hydra does not sell or rent your data, and anonymous information is only collected to help make the app better. If you want a privacy-first app for Reddit, Hydra is a very safe bet.</div>
            <div>Hydra uses the Reddit API to function, therefore Reddit is able to see requests made and use that information (such as, as with all Internet requests, your IP address, and if you sign in to Reddit within Hydra, your account ID, for instance) as they see fit (for advertising or something of the like, as an example). By using Hydra, you're subject to <a href='https://www.redditinc.com/policies/privacy-policy'>Reddit's Privacy Policy</a> as well as any other services/websites you visit/encounter/use within the app.</div>
            <div>For crash reporting Hydra uses <a href='https://sentry.io/welcome/'>Sentry</a>. This is purely to be able to catch crashes so I can fix them, and collect some information that can help me make better development decisions for Hydra, for instance by knowing which which screens users are crashing on, or what settings lead to bugs, that kinda thing. You're completely free to turn off crash reporting and analytics entirely via Settings {'>'} Privacy {'>'} Allow Hydra to report errors.</div>
            <div>For push notifications, your session token is synced between Hydra (the app) as well as the server. The server only stores enough information to function, which includes the ID of the most recent inbox item (if inbox alerts are enabled, so it knows not to send anything from that point or earlier), plus your Reddit account ID(s) and the Apple Push Notification Service token (an ID for the iOS or Mac device that Hydra sends notifications to so Apple can deliver them). Removing this is simple, if you remove your account from the app it will be erased from the server. Otherwise if you delete the app upon sending the next notification the server will receive an error that the device is now unreachable and it will delete it 30 days from that point (to allow a grace period in case you just toggled off notifications temporarily, for instance).</div>
            <div>If you have questions or concerns about any of the above please contact <a href="mailto:dmilinovichiii@gmail.com">dmilinovichiii@gmail.com</a></div>
        </div>
    </div>
  )
}