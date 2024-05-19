/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import ComponentForm from './component';

export default function Home() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     (function (d, s, id) {
  //       var js;
  //       if (d.getElementById(id)) {
  //         return;
  //       }
  //       js = d.createElement(s);
  //       js.id = id;
  //       js.src = 'https://embedsocial.com/cdn/ef.js';
  //       d.getElementsByTagName('head')[0].appendChild(js);
  //     })(document, 'script', 'EmbedSocialFormsScript');
  //   }, 1000); // 1000 milliseconds = 1 second
  // }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <a href='#payment'>
        <button className=' fixed right-2 top-2 z-[9999999999] rounded-full border border-[#3a3a3a] bg-[#FCBCBD] px-12 py-2 font-medium'>
          Register Now
        </button>
      </a>
      <div className=' relative flex h-dvh w-full items-center justify-center bg-[#37BE88]'>
        <Image
          fill
          className=' absolute z-10 mx-auto aspect-[357.5/340.5] max-w-[357.5px] object-contain object-center'
          src='/head.png'
        ></Image>
        <Image
          fill
          className=' hidden object-contain object-center md:block'
          src='/bg.png'
        ></Image>
        <Image
          fill
          className=' block object-contain object-center md:hidden'
          src='/mobile.png'
        ></Image>
      </div>
      <div className=' m-auto flex  w-full max-w-6xl flex-col items-center justify-center  gap-4 py-12 md:flex-row md:gap-10'>
        <div className=' flex  w-[340px] items-center  justify-center rounded-full bg-[#FFA629] py-2 font-display text-lg font-bold md:text-2xl '>
          21st May 2024
        </div>
        <div className=' flex w-[340px] items-center justify-center rounded-full  bg-[#FFA629] py-2 font-display text-lg font-bold md:text-2xl  '>
          6 PM
        </div>
        <div className=' flex w-[340px] items-center justify-center rounded-full bg-[#FFA629]  py-2 font-display text-lg font-bold  md:text-2xl'>
          FLO, Church Street
        </div>
      </div>

      <div className=' mx-auto flex  max-w-6xl flex-col items-center justify-center gap-5  py-10 md:flex-row'>
        <img
          src='/dadadad.png'
          className=' main-h-[400px] aspect-[335/300] h-full'
        ></img>
        <div className=' text-center font-display text-5xl font-bold  leading-[120%] md:text-left md:text-7xl md:leading-[150%]'>
          Send Off is the unofficial graduation party for fourth-year SMI
          students.
        </div>
      </div>

      <div className='relative flex overflow-x-hidden bg-[#FCBCBD]'>
        <div className='animate-marquee whitespace-nowrap py-6 '>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
        </div>

        <div className='absolute top-0 animate-marquee2 whitespace-nowrap py-6 '>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
          <span className='mx-1 text-2xl'>
            Any B.Des and B.Voc student from the 2020-2024 batch from SMI can
            attend.
          </span>
        </div>
      </div>
      <div className=' w-full bg-[#3777DA] '>
        <div className=' mx-auto flex  max-w-6xl flex-col items-center justify-center gap-5  py-10 md:flex-row'>
          <div className=' text-center font-display text-5xl font-bold leading-[120%]  text-white md:text-left md:text-7xl md:leading-[150%]'>
            With live music and performances from our own batch mates{' '}
            <span className=' text-[#FFA629]'>
              , we are hoping for a solid Send-Off!
            </span>
          </div>
          <img
            src='/guitar.png'
            className=' main-h-[400px] aspect-[420/403] h-full object-center'
          ></img>
        </div>
      </div>
      <br />
      <br />
      <div className=' mx-auto flex max-w-6xl  flex-col items-center justify-center gap-5 px-3  py-10 md:flex-row'>
        <div className='   text-lg font-normal  text-black  md:text-2xl '>
          Just a little heads-up: Only you can sign yourself up. Pay directly to
          the upi ID.
        </div>
        <img
          src='/step1.png'
          className=' main-h-[130px] aspect-[210/129.17] h-full object-center'
        ></img>
      </div>
      <div className=' mx-auto flex max-w-6xl  flex-col-reverse items-center justify-center gap-5 px-3  py-10 md:flex-row'>
        <img
          src='/step2.png'
          className=' main-h-[130px] aspect-[186.85/191.24] h-full object-center'
        ></img>
        <div className='   text-lg font-normal  text-black  md:text-2xl '>
          Then Fill the attached form. Upon submition and verification you will
          receive the ticket on mail.
        </div>
      </div>
      <div className=' mx-auto flex max-w-6xl  flex-col items-center justify-center gap-5 px-3  py-10 md:flex-row'>
        <div className='   text-lg font-normal  text-black  md:text-2xl '>
          Cost of 750rs per person, 699 of that will be redeemable in the club.
        </div>
        <img
          src='/step3.png'
          className=' main-h-[130px] aspect-[136.31/191] h-full object-center'
        ></img>
      </div>

      <div className=' w-full bg-[#37BE88] '>
        <div className=' mx-auto flex  max-w-6xl flex-col items-center justify-center gap-9  py-10'>
          <span className=' text-wrap text-center font-display text-6xl font-bold text-white'>
            UPI ID for Payment
          </span>
          <div className=' flex w-[340px] items-center justify-center rounded-full bg-[#FFA629]  py-2 font-display text-lg font-bold  md:text-2xl'>
            7019086805@ybl
          </div>
        </div>
      </div>

      <div id='payment'>
        <div data-paperform-id='xejweytv' />
      </div>
      <div className=' h-16 w-full bg-[#3A3A3A]'></div>
    </main>
  );
}
