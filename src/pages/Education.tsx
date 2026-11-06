import { SecondaryHeader } from "../components";
import { PageNames } from "../utility";

const Education = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Education}/>
        <img src="./src/images/UofA.jpg" alt="Education" />
        <h1>Masters</h1>
        <p> in Computer Science</p>
        <h1>Bachelors</h1>
        <p> in Computer Science</p>
    </>);
};

export default Education;