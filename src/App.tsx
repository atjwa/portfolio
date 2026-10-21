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
import type { PageProps } from './utility/propTypes';
import { NavigationBar } from './components';

function App() {
  const [pageName, setPageName] = useState<PageName>(PageNames.Overview);
  const pageProps: PageProps = {
    setPageName: setPageName,
  }
  const [currentPage, setCurrentPage] = useState(<Overview {...pageProps}/>);

  useEffect(() => {
    switch ( pageName ) {
        case PageNames.Overview:
            setCurrentPage(<Overview {...pageProps} />);
            break;
        case PageNames.Skills:
            setCurrentPage(<Skills {...pageProps} />);
            break;
        case PageNames.Education:
            setCurrentPage(<Education {...pageProps} />);
            break;
        case PageNames.Experience:
            setCurrentPage(<Experience {...pageProps} />);
            break;
        default:
            setCurrentPage(<Overview {...pageProps} />);
    }
  }, [pageName]);

  return (
    <main>
        <NavigationBar {...pageProps} />
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
