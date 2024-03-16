import getSnapshot from '@/lib/getSnapshot';
import { ethPublicClient, optimismPublicClient } from '@/lib/publicClient';
import { useEffect, useState } from 'react';
import { isAddress, parseAbiItem, zeroAddress } from 'viem';
import { normalize } from 'viem/ens';
import useCollectorId from './useCollectorId';
import getErc721TransferEvents from '@/lib/getErc721TransferEvents';
import formatErc721Events from '@/lib/formatErc721Events';
import get30DayBlockRange from '@/lib/get30DayBlockRange';

const useSnapshot = (collectorId: string) => {
  const [snapshot, setSnapshot] = useState([] as any);
  const { collectorAddress } = useCollectorId(collectorId);

  useEffect(() => {
    const fetchSnapshot = async () => {
      const { fromBlock, toBlock } = await get30DayBlockRange();
      const filteredLogs = await getErc721TransferEvents(
        [null, collectorAddress],
        fromBlock,
        toBlock,
      );
      const result = formatErc721Events(filteredLogs);
      setSnapshot(result);
    };

    if (!collectorAddress) return;
    fetchSnapshot();
  }, [collectorAddress]);

  return { snapshot };
};

export default useSnapshot;
