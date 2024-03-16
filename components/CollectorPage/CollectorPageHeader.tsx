const CollectorPageHeader = ({ collectorId }: any) => (
  <div
    style={{ display: 'flex' }}
    className="space-y-3 flex flex-col"
    tw="flex flex-col items-center text-center w-[1000px] mb-3"
  >
    <p className="text-4xl font-bold tracking-tighter sm:text-5xl" tw="text-7xl font-black m-0">
      {collectorId}
    </p>
    <p className="max-w-[600px] text-md md:text-xl font-bold" tw="text-2xl font-bold m-0">
      showing purchases from past 30 days.
    </p>
  </div>
);

export default CollectorPageHeader;
