import type  { PageName } from "../../utility";
const SecondaryHeader = ({ pageName }: { pageName: PageName }) => {
    return (
        <div className="secondaryHeader">
            <img src="src/images/athan_walker.jpeg" alt="Athan Walker" width="136" height="150"/>
            <div className="secondaryHeaderText">
                <h1 className="secondaryNameHeader">
                    Athan Walker
                </h1>
                <h1 className="secondaryPageHeader">
                    {pageName}
                </h1>
            </div>
        </div>
    );
};

export default SecondaryHeader;
