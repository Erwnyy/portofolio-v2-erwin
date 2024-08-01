import dynamic from "next/dynamic";

const SectionHero = dynamic(() => import("@/components/molecules/dashboard/hero"));
const SectionPortofolio = dynamic(() => import("@/components/molecules/dashboard/portofolio"));
const SectionHobi = dynamic(() => import("@/components/molecules/dashboard/hobi"));

const Index = () => {
  return (
    <div className="flex flex-col mr-15 w-full h-fit bg-gray-background">
      <SectionHero/>
      <SectionPortofolio/>
      <SectionHobi/>
    </div>
  );
};


export default Index;
