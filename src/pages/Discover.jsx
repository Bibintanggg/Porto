import CardImage from "../components/CardImage";
import TextSkills from "../components/TextSkills";
import Activity from "../components/Activity";
import Data from "../data/ProjectData";
import EduColumn from "../components/EduColoumn";

function Discover() {
  return (
    <div>
        <CardImage/>
        <EduColumn/>

        <div className="flex mx-auto justify-center mt-[-14%]">
        <TextSkills/>
        </div>

        <h1 className="font-poppins font-bold text-center text-4xl mt-28">Activity</h1>
        <div className="flex w-full justify-center gap-14 mx-auto bg-cover mt-10">
          {Data.map(spill => (
          <Activity
          key={spill.id}
          name={spill.name}
          description={spill.description}
          image={spill.image}/>
        ))}
        </div>
    </div>
  );
}

export default Discover;
