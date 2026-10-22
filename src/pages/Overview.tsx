const Overview = () => {
    return (
        <article className="mainArticle">
            <section className="mainSectionLeft">
                <h2>
                    <ins>Skills</ins>
                </h2>
                <dl>
                    <dt>
                        Languages
                    </dt>
                    <dd>
                        JavaScript, TypeScript, Java
                    </dd>
                    <dt>
                        Frontend
                    </dt>
                    <dd>
                        React, Redux, HTML, CSS, WCAG, WAI-ARIA
                    </dd>
                    <dt>
                        Backend
                    </dt>
                    <dd>
                        REST API design, JWT-based authentication, business logic
                    </dd>
                    <dt>
                        Development Tools
                    </dt>
                    <dd>
                        Git, GitHub, GitHub Copilot, Cursor, Jira, Confluence, Postman
                    </dd>
                </dl>
            </section>
            <section className="mainSectionCenter">
                <h2>
                    <ins>Experience</ins>
                </h2>
                <h3>
                    Software Engineer III
                    <br />
                    <small>
                        @ American Express
                    </small>
                </h3>
                <dl>
                    <dt>
                        Developments
                    </dt>
                    <ul>
                        <li>
                            Internal applications for onboarding middle to large corporate clients
                        </li>
                        <li>
                            Client facing portal for corporate clients to manage their accounts
                        </li>
                    </ul>
                    <dt>
                        Languages
                    </dt>
                    <dd>
                        JavaScript, TypeScript, Java
                    </dd>
                </dl>
            </section>
            <section className="mainSectionRight">
                <h2>
                    <ins>Education</ins>
                </h2>
                <dl>
                    <dt>
                        Master of Science in Computer Science
                    </dt>
                    <dd>
                        University of Arizona
                    </dd>
                    <dd>
                        August 2020 - May 2022
                    </dd>
                </dl>
                  <dl>
                    <dt>
                        Bachelor of Science in Computer Science
                    </dt>
                    <dd>
                        University of Arizona
                    </dd>
                    <dd>
                        August 2016 - May 2020
                    </dd>
                </dl>
            </section>
        </article>
    );
};

export default Overview;