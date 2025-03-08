import SiteLayout from "@/components/LayoutSite";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "flowbite-react";
import Image from "next/image";
import topo from "./../assets/img/topo.webp";
import { Hero } from "@/components/Hero";
import { SearchProperty } from "@/components/SearchProperty";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />

      <div className="listings md:px-4 gap-8 lg:gap-4 justify-center  grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-12">
          <PropertyCard />
        </div>
      </div>
    </SiteLayout>
  );
}
