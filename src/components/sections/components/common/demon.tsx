"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import Style from "./demon.module.scss";

export default function Demon() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = [leftPupilRef.current, rightPupilRef.current];

      pupils.forEach((pupil) => {
        if (!pupil) {
          return;
        }

        const rect = pupil.getBoundingClientRect();
        const x = (e.clientX - rect.left) / 150 + "px";
        const y = (e.clientY - rect.top) / 150 + "px";
        pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={Style.demon}>
      <Image src="/img/satan.png" alt="Demon" width={350} height={350} />
      <div ref={eyesRef} className={Style.demon__eyes_wrapper}>
        <div className={`${Style.demon__eyes} ${Style.demon__eyes_left}`}>
          <div
            ref={leftPupilRef}
            className={`${Style.demon__pupil} ${Style.demon__pupil_left}`}
          ></div>
        </div>
        <div className={`${Style.demon__eyes} ${Style.demon__eyes_right}`}>
          <div
            ref={rightPupilRef}
            className={`${Style.demon__pupil} ${Style.demon__pupil_right}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
