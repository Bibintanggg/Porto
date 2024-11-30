import CardImage from "../components/CardImage";
import TextSkills from "../components/TextSkills";
import Activity from "../components/Activity";
import Data from "../data/ProjectData";

function Discover() {
  return (
    <div>
        <CardImage/>
        <div className="flex w-full justify-center gap-10 mx-auto bg-cover">
          {Data.map(spill => (
          <Activity
          key={spill.id}
          name={spill.name}
          description={spill.description}
          image={spill.image}/>
        ))}
        </div>

        <div className="flex mx-auto justify-center">
        <TextSkills/>
        </div>
    </div>
  );
}

export default Discover;
