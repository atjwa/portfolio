import { SecondaryHeader, Subsection } from "../../components";
import { PageNames } from "../../utility";

const Experience = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Experience}/>
        <Subsection
            hasDivider={false}
            className="subsection-left"
            imgSrc="./src/images/travelersLogo1.jpg"
            altText="American Express"
        ></Subsection>
        <Subsection
            hasDivider={false}
            className="subsection-left"
            imgSrc="./src/images/amexLogo1.jpg"
            altText="American Express"
        ></Subsection>
        <Subsection
            hasDivider={false}
            className="subsection-left"
            imgSrc="./src/images/freefallLogo1.jpg"
            altText="FreeFall Aerospace"
        ></Subsection>
    </>);
};

export default Experience;