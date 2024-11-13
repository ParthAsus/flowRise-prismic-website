import Bounded from "@/componenets/bounded";
import Heading from "@/componenets/heading";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage} from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const componenets: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-9 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
      {children}
    </p>
  ),
};

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = async ({
  slice,
}: TestimonialProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonial = await Promise.all(
    slice.primary.testimonialcontent.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );
  // console.log(slice.primary.testimonialcontent);
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={componenets} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {testimonial.map(
        (item, index) =>
          item && (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
            >
              <PrismicRichText
                field={item.data.quote}
                components={componenets}
              />
              <div className="flex items-center">
                <PrismicNextImage
                  field={item.data.avatar}
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                  imgixParams={{ ar: "1:1", fit: "crop" }}
                />
                <div>
                  <p className="text-base font-medium text-slate-700">{item.data.name}</p>
                  <p className="text-base text-slate-600">{item.data.job_title}</p>
                </div>
              </div>
            </div>
          )
      )}
      </div>
    </Bounded>
  );
};

export default Testimonial;
