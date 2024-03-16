import { ethPublicClient } from '@/lib/publicClient';
import { useEffect, useState } from 'react';
import { isAddress } from 'viem';
import { normalize } from 'viem/ens';

const useCollectorId = (collectorId: string) => {
  const [collectorAddress, setCollectorAddress] = useState('' as any);

  useEffect(() => {
    const fetchENSAddress = async () => {
      if (isAddress(collectorId)) {
        setCollectorAddress(collectorId);
      }
      if (collectorId.includes('.eth')) {
        try {
          const ensAddress = await ethPublicClient.getEnsAddress({
            name: normalize(collectorId),
          });
          setCollectorAddress(ensAddress);
        } catch (error) {
          console.error('Failed to get ENS address:', error);
        }
      }
    };

    fetchENSAddress();
  }, [collectorId]);

  return { collectorAddress };
};

export default useCollectorId;
