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
import ThoughtHarvesterImage from "../assets/ThoughtHarvester-screenshot.png.png";
import SoundQuestImage from "../assets/SoundQuest-screenshot.png";
import HoriseonImage from "../assets/Horiseon-screenshot.png";

export default function Portfolio() {
  return (
    <div>
      <div>
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
          deployedLink="https://holdenmg.github.io/sound-quest/"
        />
        <PortfolioCard
          image={ThoughtHarvesterImage}
          title="ThoughtHarvester"
          repoLink="https://github.com/arnald18/ThoughtHarvester"
          deployedLink="https://secret-cliffs-31610-1cfd2b52332b.herokuapp.com/"
        />
        <PortfolioCard
          image={ThoughtHarvesterImage}
          title="ThoughtHarvester"
          repoLink="https://github.com/arnald18/ThoughtHarvester"
          deployedLink="https://secret-cliffs-31610-1cfd2b52332b.herokuapp.com/"
        />
        <PortfolioCard
          image={ThoughtHarvesterImage}
          title="ThoughtHarvester"
          repoLink="https://github.com/arnald18/ThoughtHarvester"
          deployedLink="https://secret-cliffs-31610-1cfd2b52332b.herokuapp.com/"
        />
      </div>
    </div>
  );
}
