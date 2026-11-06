import { SecondaryHeader, Subsection } from "../../components";
import { PageNames } from "../../utility";

const Experience = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Experience} />
        <Subsection
            hasDivider={false}
            className="subsection-center"
            imgSrc="./src/images/travelersLogo1.jpg"
            altText="Travelers"
        >
            <p>
                <strong>Start Date:</strong> November 2026
            </p>
        </Subsection>
        <Subsection
            hasDivider={false}
            className="subsection-center"
            imgSrc="./src/images/amexLogo1.jpg"
            altText="American Express"
        >
            <p>
                <strong>Start Date:</strong> August 22nd, 2022
                <br />
                <strong>End Date:</strong> August 21st, 2026
            </p>
        </Subsection>
        <Subsection
            hasDivider={false}
            className="subsection-center"
            imgSrc="./src/images/freefallLogo1.jpg"
            altText="FreeFall Aerospace"
        >
            <p>
                <strong>Start Date:</strong> June 2018
                <br />
                <strong>End Date:</strong> August 2018
            </p>
            <img src="./src/images/freefallSpace.jpg" alt="Inflatable Antenna" />
        </Subsection>
    </>);
};

export default Experience;