import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { productMarketingInfo, userLandingData } from "@/data/data";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icon";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section className="text-black">
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <img src="/snake-1.png" alt="png" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  {productMarketingInfo.map((item) => (
                    <li
                      key={item.id}
                      className="item-left flex items-center gap-1.5"
                    >
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {item.description}
                    </li>
                  ))}
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  {userLandingData.map((person) => (
                    <img
                      key={person.id}
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                      src={person.url}
                      alt={`${person.id}`}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    {Array.from(Array(5).keys()).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-green-600 text-green-600"
                      />
                    ))}
                  </div>
                  <p className="">
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative bg-black md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <img
                src="/line.png"
                className="absolute -bottom-6 -left-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc={"/testimonials/2.jpg"} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/*  value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="pointer-events-none absolute inset-x-0 bottom-6 hidden text-green-500" />
              </span>{" "}
              say
            </h2>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
