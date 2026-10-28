import { SecondaryHeader } from "../../components";
import { PageNames } from "../../utility";
import Subsection from "./Subsection";

const Skills = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Skills}/>
        <Subsection
            title="Front-End Development"
            hasDivider={true}
            className="subsection-left"
            description="Experienced in building responsive and interactive web applications using modern front-end technologies."
        >
            <Subsection
                title="React"
                className="subsection-right"
                description="Proficient in React, including component-based architecture, state management, and integration with modern development tools."
            >
                <p></p>
            </Subsection>

            <Subsection
                title="JavaScript"
                className="subsection-right"
                description="Proficient in JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation."
            >
                <p>HTML, CSS, JavaScript, React</p>
            </Subsection>
            <Subsection
                title="TypeScript"
                className="subsection-right"
                description="Proficient in TypeScript, including type safety, interfaces, and integration with modern development tools."
            >
                <p></p>
            </Subsection>
            <Subsection
                title="HTML & CSS"
                className="subsection-right"
                description="Proficient in HTML and CSS, including modern layout techniques and responsive design."
            >
                <p></p>
            </Subsection>
            <Subsection
                title="Accessibility"
                className="subsection-right"
                description="Proficient in creating accessible web applications that comply with WCAG and WAI-ARIA guidelines."
            >
                <p></p>
            </Subsection>
        </Subsection>
        <Subsection
            title="Back-End Development"
            hasDivider={true}
            className="subsection-left"
            description="Skilled in server-side development, database management, and API integration."
        >
            <Subsection
                title="Java"
                className="subsection-right"
                description="Experienced in Java, including object-oriented programming, data structures, and algorithms."
            >
                <p>Java, Spring, Hibernate, SQL</p>
            </Subsection>
            <Subsection
                title="REST API Design & Development"
                className="subsection-right"
                description="Experienced in designing and developing RESTful APIs using Java and related technologies."
            >
                <p>Validate, Read, Save, Submit</p>
            </Subsection>
            <Subsection
                title="JWT Authentication"
                className="subsection-right"
                description="Experienced in implementing JWT-based authentication for RESTful APIs."
            >
                <p>Java, Spring, Hibernate, SQL</p>
            </Subsection>
        </Subsection>
        <Subsection
            title="Deployment and DevOps"
            hasDivider={false}
            className="subsection-left"
            description="Familiar with DevOps practices and cloud platforms for deployment and management."
        >
            <Subsection
                title="Docker"
                className="subsection-right"
                description="Experienced in containerizing applications using Docker for consistent deployments."
            >
                <p>Docker, Kubernetes, AWS, Azure</p>
            </Subsection>
        </Subsection>
    </>);
};

export default Skills;