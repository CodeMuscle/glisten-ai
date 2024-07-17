import Bounded from "@/components/Bounded";

import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
} from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      className="mx-auto text-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Hero;
