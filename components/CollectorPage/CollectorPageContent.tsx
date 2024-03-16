import MadeBySweets from '../MadeBySweets';
import CollectorPageHeader from './CollectorPageHeader';
import Results from './Results';

const CollectorPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <CollectorPageHeader />
    <Results />
    <MadeBySweets />
  </div>
);

export default CollectorPageContent;