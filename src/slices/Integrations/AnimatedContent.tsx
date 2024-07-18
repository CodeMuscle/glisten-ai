"use client";

import StylizedLogoMark from "./StylizedLogoMark";
import { Content } from "@prismicio/client";
import clsx from "clsx";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  FaDigitalOcean,
  FaGithub,
  FaCloudflare,
  FaNpm,
  FaFly,
  FaFigma,
} from "react-icons/fa6";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.IntegrationsSlice;
}) {
  const icons = {
    cloudflare: <FaCloudflare />,
    digitalocean: <FaDigitalOcean />,
    github: <FaGithub />,
    npm: <FaNpm />,
    fly: <FaFly />,
    figma: <FaFigma />,
  };

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "power2.inOut",
        },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 1,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            {
              backgroundPosition: "0% 0%",
            },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div>
      <div
        ref={container}
        className="mt-20 flex flex-col items-center md:flex-row"
      >
        {slice.items.map((item, index) => (
          <React.Fragment key={index}>
            {index === Math.floor(slice.items.length / 2) && (
              <>
                <StylizedLogoMark />
                <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
            <div className="pulsing-icon aspect-sqaure flex shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              {item.icon && icons[item.icon]}
            </div>

            {index !== slice.items.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(slice.items.length / 2)
                    ? "rotate-180"
                    : "rotate-0",
                )}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
