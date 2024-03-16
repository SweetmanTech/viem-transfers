import CollectorPageHeader from '@/components/CollectorPage/CollectorPageHeader';
import LandingPageHeader from '@/components/LandingPage/LandingPageHeader';
import getEnsName from '@/lib/getEnsName';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const regularFont = fetch(new URL('/public/assets/HelveticaNeueMedium.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);
const boldFont = fetch(new URL('/public/assets/HelveticaNeueBold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET(req: NextRequest) {
  const [regularFontData, boldFontData] = await Promise.all([regularFont, boldFont]);
  const queryParams = req.nextUrl.searchParams;
  const address: any = queryParams.get('address');
  console.log('SWEETS PASS PROP TO HTML', address);
  const collectorId = await getEnsName(address);
  const { ImageResponse } = await import('@vercel/og');
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          fontFamily: '"HelveticaBold"',
        }}
        tw="flex gap-3"
      >
        <CollectorPageHeader collectorId={collectorId} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Helvetica',
          data: regularFontData,
          weight: 400,
        },
        {
          name: 'HelveticaBold',
          data: boldFontData,
          weight: 700,
        },
      ],
    },
  );
}
