import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

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
            <img className="dark:hidden" src="src/images/logo/logo.svg" alt="Logo" />
            <img className="hidden dark:block" src="src/images/logo/logo-dark.svg" alt="Logo" />
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
            {/* Insert social link icons or components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
