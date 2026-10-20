import type { PageName } from "./pageNames";

export type PageProps = {
    setPageName: React.Dispatch<React.SetStateAction<PageName>>;
}
