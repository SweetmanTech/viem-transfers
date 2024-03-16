import { FARCASTER_ID_REGISTRY, FRAME_INPUT_PLACEHOLDER, VERCEL_URL } from '@/lib/consts';
import getButtons from '@/lib/getButtons';
import getCreatorId from '@/lib/getCreatorId';
import { ethPublicClient, optimismPublicClient } from '@/lib/publicClient';
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import abi from "@/lib/abi/farcaster-id-registry.json"
import getCustodyOf from '@/lib/farcaster/getCustodyOf';

const getResponse = async (req: NextRequest): Promise<NextResponse> => {
  let address
  try {
    const body: FrameRequest = await req.json();
    const { untrustedData } = body;
    console.log("SWEETS use untrustedData to get fid", untrustedData)
    console.log("SWEETS use fid to get address", untrustedData)
    const {fid} = untrustedData
    console.log("SWEETS use fid to get address", fid)
    address = await getCustodyOf(fid)
  } catch (error) {
    console.error('Error parsing JSON from request', error);
  }
  console.log("SWEETS address to generate data", address)
  const buttons = getButtons();
  const frame = {
    buttons,
    image: {
      src: `${VERCEL_URL}/api/images/collector/collections?address=${address}`,
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any;

  return new NextResponse(getFrameHtmlResponse(frame));
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
