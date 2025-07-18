import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import img1 from '../../src/images/logo.png'

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const endTime = new Date("December 20, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = endTime - now;

    const timeLeft = difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <Breadcrumb pageName="Coming Soon" /> */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-6 overflow-hidden">
        {/* Background Grids */}
        <div className="absolute right-0 top-0 -z-10 w-full max-w-[250px] xl:max-w-[450px]">
          <img src="src/images/shape/grid-01.svg" alt="grid" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
          <img src="src/images/shape/grid-01.svg" alt="grid" />
        </div>

        <div className="mx-auto w-full max-w-[460px] text-center">
          <a href="/" className="inline-block mb-6">
            {/* <img className="dark:hidden" src="src/images/logo/logo.svg" alt="Logo" />
            <img className="hidden dark:block" src="src/images/logo/logo-dark.svg" alt="Logo" /> */}
            <img className="w-90 h-30" src={img1} alt="Logo" />
          </a>

          <h1 className="mb-3 font-bold text-gray-800 text-3xl dark:text-white/90 xl:text-4xl">
            Coming Soon
          </h1>

          <p className="text-base text-gray-500 mb-9 dark:text-gray-400">
            Our website is currently under construction, enter your email  to
            get the latest updates and notifications about the website.
          </p>

          {/* Countdown */}
          <div className="mb-10 flex justify-center gap-2 text-lg font-bold text-brand-500 dark:text-brand-400">
            <div className="timer-box">{String(timeLeft.days).padStart(2, '0')}</div>:
            <div className="timer-box">{String(timeLeft.hours).padStart(2, '0')}</div>:
            <div className="timer-box">{String(timeLeft.minutes).padStart(2, '0')}</div>:
            <div className="timer-box">{String(timeLeft.seconds).padStart(2, '0')}</div>
          </div>

          <p className="mb-5 text-sm text-gray-700 dark:text-gray-400">
            Don’t want to miss updates? Subscribe now
          </p>

          <form>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-[320px]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg h-11 shadow placeholder:text-gray-400 focus:border-brand-300 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600 sm:w-auto"
              >
                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7497 2.29248C10.7497 1.87827 10.4139 1.54248 9.99967 1.54248C9.58546 1.54248 9.24967 1.87827 9.24967 2.29248V2.83613C6.0823 3.20733 3.62467 5.9004 3.62467 9.16748V14.4591H3.33301C2.91879 14.4591 2.58301 14.7949 2.58301 15.2091C2.58301 15.6234 2.91879 15.9591 3.33301 15.9591H16.6663C17.0806 15.9591 17.4163 15.6234 17.4163 15.2091C17.4163 14.7949 17.0806 14.4591 16.6663 14.4591H16.3747V9.16748C16.3747 5.9004 13.9171 3.20733 10.7497 2.83613V2.29248ZM14.8747 14.4591V9.16748C14.8747 6.47509 12.6921 4.29248 9.99967 4.29248C7.30729 4.29248 5.12467 6.47509 5.12467 9.16748V14.4591H14.8747ZM7.99967 17.7085C7.99967 18.1228 8.33546 18.4585 8.74967 18.4585H11.2497C11.6639 18.4585 11.9997 18.1228 11.9997 17.7085C11.9997 17.2943 11.6639 16.9585 11.2497 16.9585H8.74967C8.33546 16.9585 7.99967 17.2943 7.99967 17.7085Z"
                    fill=""
                  />
                </svg>
                Notify Me
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <p className="mb-6 mt-20 text-center text-base text-gray-500 dark:text-gray-400">
                Follow Us On
            </p>
            <div className="flex items-center justify-center gap-5">
                {/* Telegram */}
                <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M9.993 16.38l-.39 4.144c.56 0 .803-.24 1.096-.528l2.63-2.503 5.46 3.978c1 .552 1.72.263 1.975-.923l3.58-16.755c.328-1.539-.56-2.144-1.52-1.77L.745 9.37c-1.5.6-1.48 1.44-.255 1.83l5.755 1.8L18.45 5.512c.648-.432 1.236-.192.75.24L9.993 16.38z"/>
                </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.919.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
                </a>

                {/* X (Twitter) */}
                <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.5 2h-3.4L12 9.2 4.9 2H1l8.4 8.4L1 22h3.4l7.1-7.5L19 22h3.4l-8.5-9L22.5 2z"/>
                </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 dark:hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
                </svg>
                </a>

            </div>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;
