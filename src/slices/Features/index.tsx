import Bounded from "@/componenets/bounded";
import Heading from "@/componenets/heading";
import { BargraphIcon, CalenderIcon, CloverIcon, HourglassIcon } from "@/componenets/logo";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";




const componenets: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({children}) => (
    <Heading as="h3" size="sm" className="mb-3 font-medium sm:text-left text-center">
      {children}
    </Heading>
  ),
  paragraph: ({children}) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  )
}

const icons = {
  calender: <CalenderIcon />,
  bargraph: <BargraphIcon />,
  hourglass: <HourglassIcon />,
  clover: <CloverIcon />,

}
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={componenets}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
      {slice.primary.featurescontent.map((item, index) => (
        <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
          {item.icon && (
            <div className="mb-5">{icons[item.icon]}</div>
          )}
          <PrismicRichText field={item.title} components={componenets}></PrismicRichText>
          <PrismicRichText field={item.description} components={componenets}/>
        </div>
      ))}
      </div>
    </Bounded>
  );
};

export default Features;
