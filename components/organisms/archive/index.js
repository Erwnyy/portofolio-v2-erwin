import dynamic from "next/dynamic";

// const SectionHeader = dynamic(() => import("@/components/molecules/profile/header"));
const SectionTable = dynamic(() => import("@/components/molecules/archive/table"));


const Index = () => {
  return (
    <div className="flex flex-col w-full items-center h-fit bg-gray-background">
      <SectionTable/>
    </div>
  );
};

export default Index;