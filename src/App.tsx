import { useEffect, useState } from 'react';
import './App.css'
import {
    Education,
    Experience,
    Skills,
    Footer,
    Overview,
} from './pages'
import { PageNames } from './utility';
import type { PageName } from './utility';
import type { NavigationBarProps } from './components';
import { NavigationBar } from './components';

function App() {
    const [pageName, setPageName] = useState<PageName>(PageNames.Overview);
    const overviewPageProps = {
        setPageName: setPageName,
    }
    const [currentPage, setCurrentPage] = useState(<Overview {...overviewPageProps} />);
    const navigationBarProps: NavigationBarProps = {
        pageName: pageName,
        setPageName: setPageName
    };

    useEffect(() => {
        switch ( pageName ) {
            case PageNames.Overview:
                setCurrentPage(<Overview {...overviewPageProps} />);
                break;
            case PageNames.Skills:
                setCurrentPage(<Skills />);
                break;
            case PageNames.Education:
                setCurrentPage(<Education />);
                break;
            case PageNames.Experience:
                setCurrentPage(<Experience />);
                break;
            default:
                setCurrentPage(<Overview {...overviewPageProps} />);
        }
    }, [pageName]);

    return (
        <main>
            <NavigationBar {...navigationBarProps} />
            
            {currentPage}
            <hr />
            <Footer />
        </main>
    )
}

export default App
