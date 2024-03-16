import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';

const getEnsName = async (address: string) => {
  console.log('SWEETS address', address);

  const ensName = await ethPublicClient.getEnsName({
    address: normalize(address as string) as any,
  });
  return ensName;
};

export default getEnsName;
