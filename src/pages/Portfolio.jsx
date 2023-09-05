/**
 *
 *^ 6 portfolio apllications
 *
 * Image
 * Title
 * -Link to the  deployed site
 * - Link to github repo
 *
 *
 */

import PortfolioCard from "../components/PortfolioCard";
import ThoughtHarvesterImage from "../assets/ThoughtHarvester-screenshot.png";
import SoundQuestImage from "../assets/SoundQuest-screenshot.png";
import HoriseonImage from "../assets/Horiseon-screenshot.png";
import FreshFuelImage from "../assets/freshfuel-screenshot.png";
import WorkDayMasterImage from "../assets/workdaymaster-screenshot.png";
import WeatherInsiderImage from "../assets/weatherinsider-screenshot.png";

export default function Portfolio() {
  return (
    <div className="flex flex-wrap justify-between gap-6 w-full pt-6">
      <PortfolioCard
        image={ThoughtHarvesterImage}
        title="ThoughtHarvester"
        repoLink="https://github.com/arnald18/ThoughtHarvester"
        deployedLink="https://secret-cliffs-31610-1cfd2b52332b.herokuapp.com/"
      />
      <PortfolioCard
        image={HoriseonImage}
        title="Horiseon"
        repoLink="https://github.com/arnald18/Horiseon"
        deployedLink="https://arnald18.github.io/Horiseon/"
      />
      <PortfolioCard
        image={SoundQuestImage}
        title="Sound Quest"
        repoLink="https://github.com/holdenmg/sound-quest"
        deployedLink="https://fresh-fuel-e5047e04b770.herokuapp.com/"
      />
      <PortfolioCard
        image={FreshFuelImage}
        title="Fresh Fuel"
        repoLink="https://github.com/WyattBensman/fresh-fuelr"
        deployedLink="https://secret-cliffs-31610-1cfd2b52332b.herokuapp.com/"
      />
      <PortfolioCard
        image={WorkDayMasterImage}
        title="WorkDayMaster"
        repoLink="https://github.com/arnald18/WorkDayMaster"
        deployedLink="https://arnald18.github.io/WorkDayMaster/"
      />
      <PortfolioCard
        image={WeatherInsiderImage}
        title="WeatherInsider"
        repoLink="https://github.com/arnald18/WeatherInsider"
        deployedLink="https://arnald18.github.io/WeatherInsider/"
      />
    </div>
  );
}
