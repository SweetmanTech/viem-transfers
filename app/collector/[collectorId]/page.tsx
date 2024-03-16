import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { DEFAULT_FRAME, VERCEL_URL } from '@/lib/consts';
import CollectorPage from '@/components/CollectorPage';

const frameMetadata = { ...getFrameMetadata(DEFAULT_FRAME), 'of:accepts:xmtp': '2024-02-01' };

export const metadata: Metadata = {
  title: 'viem snapshot',
  description: 'viem snapshot',
  openGraph: {
    title: 'viem snapshot',
    description: 'viem snapshot',
    images: [`https://${VERCEL_URL}/api/og`],
  },
  other: {
    ...frameMetadata,
  },
};

const Page = ({ params }: { params: { collectorId: string } }) => (
  <>
    <CollectorPage collectorId={params.collectorId} />
  </>
);

export default Page;
