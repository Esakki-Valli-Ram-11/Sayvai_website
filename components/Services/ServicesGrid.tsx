"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  tag: string;
  image?: string;
  alt?: string;
  imageWidth?: number;
  imageHeight?: number;
  newTab?: boolean; // <-- add this line
};

export default function ServicesGrid({ services }: { services: ServiceItem[] }) {
  // Prefer the explicit "Phone Call" service for base sizing; fallback to the first service
  const phoneService =
    services.find((s) => s.title?.toLowerCase() === "phone call") || services[0];
  const baseWidth = phoneService?.imageWidth || 1200;
  const baseHeight = phoneService?.imageHeight || 800;

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
      {services.map((s, idx) => {
        const isExternal = s.newTab && s.href.startsWith("http");
        const Wrapper = isExternal ? "a" : Link;
        const wrapperProps = isExternal
          ? {
              href: s.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "group block overflow-hidden rounded-sm bg-white shadow-one ring-1 ring-stroke transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:ring-stroke-dark",
            }
          : {
              href: s.href,
              className:
                "group block overflow-hidden rounded-sm bg-white shadow-one ring-1 ring-stroke transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:ring-stroke-dark",
            };

        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Wrapper {...wrapperProps}>
              {s.image && (
                <div
                  className="relative w-full overflow-hidden bg-white"
                  style={{ aspectRatio: `${baseWidth} / ${baseHeight}` }}
                >
                  <Image
                    src={s.image}
                    alt={s.alt || s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 2}
                  />
                </div>
              )}

              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-dark dark:bg-gray-800 dark:text-white">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-dark transition-colors group-hover:text-[#45988e] dark:text-white">
                  {s.title}
                </h3>
                <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                  {s.description}
                </p>
              </div>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  );
}
