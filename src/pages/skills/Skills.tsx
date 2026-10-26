import { SecondaryHeader } from "../../components";
import { PageNames } from "../../utility";
import Subsection from "./Subsection";

const Skills = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Skills}/>
        <Subsection
            title="JavaScript"
            hasDivider={true}
            className="subsection-left"
            description="Proficient in JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation."
        >
            <p>HTML, CSS, JavaScript, React</p>
        </Subsection>
    </>);
};

export default Skills;