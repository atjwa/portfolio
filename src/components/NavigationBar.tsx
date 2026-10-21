import type { PageProps } from "../utility/propTypes";
import PageNames from "../utility";

const NavigationBar = ({ setPageName }: PageProps) => {
    return (
        <nav className="navigationBar">
            <a onClick={() => setPageName(PageNames.Overview)}>Overview</a>
            <a onClick={() => setPageName(PageNames.Skills)}>Skills</a>
            <a onClick={() => setPageName(PageNames.Education)}>Education</a>
            <a onClick={() => setPageName(PageNames.Experience)}>Experience</a>
        </nav>
    );
};

export default NavigationBar;