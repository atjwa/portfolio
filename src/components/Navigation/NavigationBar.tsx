import type { NavigationBarProps } from "./navigationProps";
import { PageNames } from "../../utility";
import NavigationButton from "./NavigationButton";

const NavigationBar = ({ pageName, setPageName }: NavigationBarProps) => {
    return (
        <nav className="navigationBar">
            <NavigationButton pageName={pageName} buttonPageName={PageNames.Overview} setPageName={setPageName} />
            <NavigationButton pageName={pageName} buttonPageName={PageNames.Skills} setPageName={setPageName} />
            <NavigationButton pageName={pageName} buttonPageName={PageNames.Education} setPageName={setPageName} />
            <NavigationButton pageName={pageName} buttonPageName={PageNames.Experience} setPageName={setPageName} />
        </nav>
    );
};

export default NavigationBar;