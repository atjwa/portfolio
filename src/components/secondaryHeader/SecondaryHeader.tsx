import type  { PageName } from "../../utility";
const SecondaryHeader = ({ pageName }: { pageName: PageName }) => {
    return (
        <div className="secondaryHeader">
            <div className="secondaryHeaderImage-div">
                <img className="secondaryHeaderImage" src="src/images/athan_walker.jpeg" alt="Athan Walker" width="136" height="150"/>
                <h1 className="secondaryNameHeader">
                    Athan Walker
                </h1>
            </div>
            <h1 className="secondaryPageHeader">
                {pageName}
            </h1>
        </div>
    );
};

export default SecondaryHeader;
