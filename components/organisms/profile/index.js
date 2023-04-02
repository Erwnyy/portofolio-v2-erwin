import dynamic from "next/dynamic";

const SectionHeader = dynamic(() => import("@/components/molecules/profile/header"));
const SectionBody = dynamic(() => import("components/molecules/profile/body"));


const Index = () => {
  return (
    <div className="flex w-full justify-center h-fit bg-gray-background">
      <div className="w-[100vh] sm:w-full bg-neutral-50 flex flex-col mb-[3rem]">
        <SectionHeader/>
        <SectionBody/>
      </div>
    </div>
  );
};

export default Index;
