import { useEffect, useState } from 'react';
import './App.css'
import {
    Education,
    Experience,
    Skills,
    Footer,
    Overview,
} from './pages'
import { PageNames } from './utility/pageNames';
import type { PageName } from './utility/pageNames';
import type { NavigationBarProps } from './components';
import { NavigationBar } from './components';

function App() {
    const [currentPage, setCurrentPage] = useState(<Overview />);
    const [pageName, setPageName] = useState<PageName>(PageNames.Overview);
    const navigationBarProps: NavigationBarProps = {
        pageName: pageName,
        setPageName: setPageName
    }

    useEffect(() => {
        switch ( pageName ) {
            case PageNames.Overview:
                setCurrentPage(<Overview />);
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
                setCurrentPage(<Overview />);
        }
    }, [pageName]);

    return (
        <main>
            <NavigationBar {...navigationBarProps} />
            <h1 className="nameHeader">
                Athan Walker
            </h1>
            <h2 style={{ marginTop: '15px'}}>
                Full Stack Web Developer
            </h2>
            <img src="src/images/athan_walker.jpeg" alt="Athan Walker" width="210" height="230"/>
            <p>
                Frontend-leaning software engineer with backend REST API experience. I'm passionate about building durable, user-friendly and modern web applications.
            </p>
            <hr />
            {currentPage}
            <hr />
            <Footer />
        </main>
    )
}

export default App
