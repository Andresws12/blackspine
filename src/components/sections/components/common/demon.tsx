"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./demon.module.scss";

export default function Demon() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movePupils = (clientX: number, clientY: number) => {
      const pupils = [leftPupilRef.current, rightPupilRef.current];

      pupils.forEach((pupil) => {
        if (!pupil) return;

        const rect = pupil.getBoundingClientRect();
        const x = (clientX - rect.left) / 150 + "px";
        const y = (clientY - rect.top) / 150 + "px";
        pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      movePupils(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        movePupils(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className={styles.demon}>
      <Image src="/img/satan.png" alt="Demon" width={350} height={350} />
      <div className={styles.demon__eyes_wrapper}>
        <div className={`${styles.demon__eyes} ${styles.demon__eyes_left}`}>
          <div
            ref={leftPupilRef}
            className={`${styles.demon__pupil} ${styles.demon__pupil_left}`}
          />
        </div>
        <div className={`${styles.demon__eyes} ${styles.demon__eyes_right}`}>
          <div
            ref={rightPupilRef}
            className={`${styles.demon__pupil} ${styles.demon__pupil_right}`}
          />
        </div>
      </div>
    </div>
  );
}
