
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Loading({ onComplete, duration = 3000 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime;

    const updateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const percentage = Math.min(
        Math.round((elapsed / duration) * 200),
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        frame = requestAnimationFrame(updateProgress);
      } else if (onComplete) {
        onComplete();
      }
    };

    let frame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(frame);
  }, [duration, onComplete]);

  const circumference = 2 * Math.PI * 48;

  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#16070C] px-5 text-white">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#800020]/30 blur-[100px]" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#800020]/25 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="absolute left-[12%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-[#D9A5AE]" />
        <div className="absolute right-[15%] top-[28%] h-1.5 w-1.5 animate-ping rounded-full bg-white/50" />
        <div className="absolute bottom-[22%] left-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#D9A5AE]" />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* Brand */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative flex h-[86px] w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-[#FFF8E7] px-5 shadow-[0_12px_60px_rgba(128,0,32,0.3)] sm:h-[96px] sm:w-[210px]">
            <img
              src={logo}
              alt="DK Sports Goods"
              className="max-h-[70px] max-w-full object-contain sm:max-h-[78px]"
            />

            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#16070C] bg-[#800020]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>

          <p className="mt-5 text-[11px] font-bold uppercase tracking-[4px] text-[#E9C4CB]">
            DK SPORTS GOODS
          </p>

          <p className="mt-2 text-[9px] font-medium uppercase tracking-[3px] text-white/40">
            PERFORMANCE STARTS HERE
          </p>
        </div>

        {/* Circular progress and bouncing ball */}
        <div className="relative flex h-48 w-48 items-center justify-center sm:h-52 sm:w-52">

          {/* Outer decorative ring */}
          <div className="absolute inset-1 rounded-full border border-white/[0.06]" />

          <div className="absolute inset-3 rounded-full border border-dashed border-white/10 animate-[spin_24s_linear_infinite]" />

          {/* Progress ring */}
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full -rotate-90"
            aria-label={`Loading ${ progress }% `}
            role="img"
          >
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="3"
            />

            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#D9A5AE"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference * (1 - progress / 100)
              }
              className="transition-[stroke-dashoffset] duration-150 ease-linear"
            />
          </svg>

          {/* Center content */}
          <div className="relative flex flex-col items-center justify-center">

            {/* Bouncing sports ball */}
            <div className="relative mb-3 h-[62px] w-[62px] animate-[dkBounce_0.85s_ease-in-out_infinite]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-[#B51243] via-[#800020] to-[#410014] shadow-[0_8px_25px_rgba(128,0,32,0.5)]">

                <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-white/30 blur-[2px]" />

                <div className="absolute -left-[26px] top-[5px] h-[52px] w-[52px] rounded-full border-[2px] border-white/70" />

                <div className="absolute -right-[26px] top-[5px] h-[52px] w-[52px] rounded-full border-[2px] border-white/70" />

                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rotate-[30deg] bg-white/50" />

                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/10" />
              </div>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-[36px] font-extrabold leading-none tracking-tight tabular-nums text-white sm:text-[40px]">
                {progress}
              </span>

              <span className="text-lg font-medium text-[#D9A5AE]">
                %
              </span>
            </div>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[2px] text-white/45">
              {progress === 100 ? 'Ready to play' : 'Loading'}
            </p>
          </div>

          {/* Ground shadow */}
          <div className="absolute bottom-7 h-1.5 w-10 animate-[dkShadow_0.85s_ease-in-out_infinite] rounded-full bg-[#D9A5AE]/50 blur-sm" />
        </div>

        {/* Loading status */}
        <div className="mt-7 w-full max-w-[280px]">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {progress === 100 ? (
              <span className="text-[#E9C4CB]">Ready for the game!</span>
            ) : (
              <>
                Gear up
                <span className="font-serif font-normal italic text-[#D9A5AE]">
                  {' '}for greatness.
                </span>
              </>
            )}
          </h1>

          <p className="mt-2 text-xs leading-6 text-white/45 sm:text-sm">
            {progress === 100
              ? 'Everything is ready. Let’s get moving.'
              : 'Preparing your sports essentials...'}
          </p>

          {/* Progress bar */}
          <div
            className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#800020] via-[#D9A5AE] to-[#FFF8E7] transition-[width] duration-150 ease-linear"
              style={{ width: `${ progress }% ` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[2px] text-white/35">
              Please wait
            </span>

            <span className="text-[10px] font-bold tabular-nums text-[#D9A5AE]">
              {progress.toString().padStart(2, '0')} / 100
            </span>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-px w-8 bg-white/15" />

          <p className="text-[9px] font-semibold uppercase tracking-[2.5px] text-white/35">
            PLAY YOUR GAME. YOUR WAY.
          </p>

          <div className="h-px w-8 bg-white/15" />
        </div>
      </section>

      {/* Animation keyframes */}
      <style>{`
@keyframes dkBounce {
  0 %, 100 % {
    transform: translateY(0) rotate(0deg);
  }
  45 % {
    transform: translateY(17px) rotate(160deg);
  }
  65 % {
    transform: translateY(5px) rotate(260deg);
  }
}

@keyframes dkShadow {
  0 %, 100 % {
    transform: scaleX(1);
    opacity: 0.65;
  }
  45 % {
    transform: scaleX(0.55);
    opacity: 0.2;
  }
  65 % {
    transform: scaleX(0.8);
    opacity: 0.4;
  }
}

@media(prefers - reduced - motion: reduce) {
          .animate -\\[spin_24s_linear_infinite\\],
          .animate -\\[dkBounce_0\\.85s_ease -in -out_infinite\\],
          .animate -\\[dkShadow_0\\.85s_ease -in -out_infinite\\] {
    animation: none!important;
  }
}
`}</style>
    </main>
  );
}
