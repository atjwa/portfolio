import { SecondaryHeader, Subsection } from "../../components";
import { PageNames } from "../../utility";

const Skills = () => {
    return (<>
        <SecondaryHeader pageName={PageNames.Skills}/>
        <Subsection
            title="Front-End Development"
            hasDivider={false}
            className="subsection-left"
            description="Experienced in building responsive and interactive web applications using modern front-end technologies."
        >
            <Subsection className="subsection-center" title="Languages">
                <Subsection
                    title="TypeScript"
                    className="subsection-right"
                    description="Proficient in TypeScript, including type safety, interfaces, and integration with modern development tools."
                >
                    <p></p>
                </Subsection>
                <Subsection
                    title="JavaScript"
                    className="subsection-right"
                    description="Proficient in JavaScript, including ES6+ features, asynchronous programming, and DOM manipulation."
                >
                    <p></p>
                </Subsection>
                <Subsection title="HTML" className="subsection-right" description="Proficient in HTML, including semantic markup and accessibility best practices.">
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection className="subsection-center" title="Styling">
                <Subsection
                    title="CSS"
                    className="subsection-right"
                    description="Proficient in CSS, including modern layout techniques and responsive design."
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection className="subsection-center" title="Frameworks & Libraries">
                <Subsection
                    title="React"
                    className="subsection-right"
                    description="Proficient in React, including component-based architecture, state management, and integration with modern development tools."
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Accessibility"
                className="subsection-center"
            >
                <Subsection
                    title="WCAG"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
                <Subsection
                    title="WAI-ARIA"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
        </Subsection>
        <Subsection
            title="Back-End Development"
            hasDivider={false}
            className="subsection-left"
            description="Skilled in server-side development, database management, and API integration."
        >
            <Subsection
                title="Languages"
                className="subsection-center"
            >
                <Subsection
                    title="Java"
                    className="subsection-right"
                >
                    <p>Java, Spring, Hibernate, SQL</p>
                </Subsection>
            </Subsection>
            <Subsection
                title="API Design"
                className="subsection-center"
            >
                <Subsection
                    title="REST API Design & Development"
                    className="subsection-right"
                >
                    <p>Validate, Read, Save, Submit</p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Authentication & Security"
                className="subsection-center"
            >
                <Subsection
                    title="JWT Authentication"
                    className="subsection-right"
                    description="Experienced in implementing JWT-based authentication for RESTful APIs."
                >
                    <p>Java, Spring, Hibernate, SQL</p>
                </Subsection>
            </Subsection>
        </Subsection>
        <Subsection
            title="Deployment and DevOps"
            hasDivider={false}
            className="subsection-left"
            description="Familiar with DevOps practices and cloud platforms for deployment and management."
        >
            <Subsection
                title="CI/CD & Build Automation"
                className="subsection-center"
            >
                <Subsection
                    title="GitHub Actions"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
                <Subsection
                    title="Jenkins"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Release & Deployment Orchestration"
                className="subsection-center"
            >
                <Subsection
                    title="XLR (XL Release)"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Monitoring & Observability"
                className="subsection-center"
            >
                <Subsection
                    title="Splunk"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Product Analytics & User Behavior"
                className="subsection-center"
            >
                <Subsection
                    title="FullStory"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
            <Subsection
                title="Feature Management & Controlled Releases"
                className="subsection-center"
            >
                <Subsection
                    title="Feature flags"
                    className="subsection-right"
                >
                    <p></p>
                </Subsection>
            </Subsection>
        </Subsection>
    </>);
};

export default Skills;