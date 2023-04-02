import dynamic from "next/dynamic";

const SectionDetail = dynamic(() => import("components/molecules/detail-portofolio/body"));

const Index = ({query}) => {
  console.log(query, 'tak')
  return (
    <div className="flex flex-col mr-15 w-full h-fit bg-gray-background">
      <SectionDetail/>
    </div>
  );
};


export default Index;
