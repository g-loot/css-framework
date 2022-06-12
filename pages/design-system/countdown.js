import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const date = new Date().getUTCDate();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

const DSpage = () => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return(
  <>
    <h1 className='mb-2'>
      Countdown
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <span className="countdown">
                <span style={{"--value": timeLeft.seconds}}></span>
              </span>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/chnr8gbk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Typography */}
    <div className='mb-12' id='typography'>

      <h2 className='h3 mb-3'>
        Typography
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <span className="countdown text-7xl font-headings">
                <span style={{"--value": timeLeft.seconds}}></span>
              </span>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3c0gf9mx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Clock countdown */}
    <div className='mb-12' id='clock-countdown'>

      <h2 className='h3 mb-3'>
        Clock countdown
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            With colons
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <span className="countdown text-5xl font-headings">
                <span style={{"--value": timeLeft.hours}}></span>:
                <span style={{"--value": timeLeft.minutes}}></span>:
                <span style={{"--value": timeLeft.seconds}}></span>
              </span>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            With letters
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <span className="countdown text-5xl font-headings">
                <span style={{"--value": timeLeft.hours}}></span><small className='text-ui-300'>h</small>
                <span style={{"--value": timeLeft.minutes}}></span><small className='text-ui-300'>m</small>
                <span style={{"--value": timeLeft.seconds}}></span><small className='text-ui-300'>s</small>
              </span>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            With labels under
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 flex flex-wrap justify-center gap-5 text-center'>
              <div className="flex flex-col gap-1">
                <span className="countdown text-4xl font-headings">
                  <span style={{"--value": timeLeft.hours}}></span>
                </span>
                <small className='text-ui-300 text-sm uppercase leading-none'>hours</small>
              </div> 
              <div className="flex flex-col gap-1">
                <span className="countdown text-4xl font-headings">
                  <span style={{"--value": timeLeft.minutes}}></span>
                </span>
                <small className='text-ui-300 text-sm uppercase leading-none'>minutes</small>
              </div> 
              <div className="flex flex-col gap-1">
                <span className="countdown text-4xl font-headings">
                  <span style={{"--value": timeLeft.seconds}}></span>
                </span>
                <small className='text-ui-300 text-sm uppercase leading-none'>seconds</small>
              </div> 
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            In chip
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 flex flex-wrap justify-center gap-5 text-center'>
              <div className='chip chip-secondary'>
                <span className='icon icon-time-machine'></span>
                <span>
                  <span>
                    Resets in
                  </span>
                  <span className="countdown ml-1">
                    <span style={{"--value": timeLeft.hours}}></span>:
                    <span style={{"--value": timeLeft.minutes}}></span>:
                    <span style={{"--value": timeLeft.seconds}}></span>
                  </span>
                </span>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className=''>
          <h3 className='h4 mb-6 lg:mb-10'>
            In boxes
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 flex flex-wrap justify-center gap-5 text-center'>
              <div className='flex flex-wrap justify-center gap-5 text-center'>
                <div className="flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                  <span className="countdown text-4xl font-headings">
                    <span style={{"--value": timeLeft.hours}}></span>
                  </span>
                  <small className='text-ui-300 text-sm uppercase leading-none'>hours</small>
                </div> 
                <div className="flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                  <span className="countdown text-4xl font-headings">
                    <span style={{"--value": timeLeft.minutes}}></span>
                  </span>
                  <small className='text-ui-300 text-sm uppercase leading-none'>minutes</small>
                </div> 
                <div className="flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                  <span className="countdown text-4xl font-headings">
                    <span style={{"--value": timeLeft.seconds}}></span>
                  </span>
                  <small className='text-ui-300 text-sm uppercase leading-none'>seconds</small>
                </div> 
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;