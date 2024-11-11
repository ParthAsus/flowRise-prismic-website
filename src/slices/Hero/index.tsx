import Bounded from "@/componenets/bounded";
import Button from "@/componenets/button";
import Heading from "@/componenets/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const componenets: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 place-items-center text-center">
            <PrismicRichText
              field={slice.primary.heading}
              components={componenets}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={componenets}
            />
            <Button
              field={slice.primary.button_link}
              className="mb-8 md:mb-12 "
            >
              {slice.primary.button}
            </Button>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </Bounded>
      )}

      {slice.variation === "horizontal" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="grid grid-rows-[1fr,auto,auto] h-fit">
              <PrismicRichText
                field={slice.primary.heading}
                components={componenets}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={componenets}
              />
              <Button
                field={slice.primary.button_link}
                className="mb-8 md:mb-12 "
              >
                {slice.primary.button}
              </Button>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="drop-shadow-xl max-w-4xl w-full"
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;
