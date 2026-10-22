import type { NavigationButtonProps } from "./navigationProps";

const NavigationButton = ({ pageName, buttonPageName, setPageName }: NavigationButtonProps) => {
    const className = pageName === buttonPageName ? "navigationButtonSelected" : "navigationButton";
    return (
        <button className={className} onClick={() => setPageName(buttonPageName)}>
            {buttonPageName}
        </button>
    );
}

export default NavigationButton;
