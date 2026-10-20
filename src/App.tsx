import { useEffect, useState } from 'react';
import './App.css'
import {
  Education,
  Experience,
  Skills,
  Footer,
  Highlights,
} from './pages'
import { PageNames } from './utility/pageNames';
import type { PageName } from './utility/pageNames';
import type { PageProps } from './utility/propTypes';

function App() {
  const [pageName, setPageName] = useState<PageName>(PageNames.Highlights);
  const pageProps: PageProps = {
    setPageName: setPageName,
  }
  const [currentPage, setCurrentPage] = useState(<Highlights {...pageProps}/>);

  useEffect(() => {
    switch ( pageName ) {
        case PageNames.Highlights:
            setCurrentPage(<Highlights {...pageProps} />);
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
            setCurrentPage(<Highlights {...pageProps} />);
    }
  }, [pageName]);

  return (
    <main>
        <h1 className="nameHeader">
            Athan Walker
        </h1>
        <h1>
            Full Stack Web Developer
        </h1>
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
