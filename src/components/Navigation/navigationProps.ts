import type { PageName } from "../../utility/pageNames";

export type NavigationBarProps = {
    pageName: PageName;
    setPageName: React.Dispatch<React.SetStateAction<PageName>>;
}


export type NavigationButtonProps = {
    pageName: PageName;
    buttonPageName: PageName;
    setPageName: React.Dispatch<React.SetStateAction<PageName>>;
}
