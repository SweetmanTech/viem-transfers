import SearchInput from '../SearchInput';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <SearchInput />
    <a
      href="https://github.com/SweetmanTech/viem-transfers"
      target="_blank"
      className="flex justify-center items-center gap-5"
    >
      made with <img src="/images/zorb.png" width="50" /> by sweetman
    </a>
  </div>
);

export default LandingPageContent;
