import Snapshot from '../Snapshot';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <Snapshot />
    <a
      href="https://github.com/SweetmanTech/viem-snapshot"
      target="_blank"
      className="flex justify-center items-center gap-5"
    >
      made with <img src="/images/zorb.png" width="50" /> by sweetman
    </a>
  </div>
);

export default LandingPageContent;
