import { FARCASTER_ID_REGISTRY } from '../consts';
import { optimismPublicClient } from '../publicClient';
import abi from '@/lib/abi/farcaster-id-registry.json';

const getCustodyOf = async (fid: any) => {
  const address = await optimismPublicClient.readContract({
    address: FARCASTER_ID_REGISTRY,
    abi,
    functionName: 'custodyOf',
    args: [fid],
  });
  return address;
};

export default getCustodyOf;
