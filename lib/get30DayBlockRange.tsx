import { optimismPublicClient } from './publicClient';

const get30DayBlockRange = async () => {
  const block = await optimismPublicClient.getBlock({
    blockTag: 'latest',
  });
  console.log('SWEETS block', block.number);
  const toBlock = block.number;
  const blocksPerMonth = 1296000n;
  const fromBlock = toBlock - blocksPerMonth;
  console.log('SWEETS fromBlock', fromBlock);
  return { fromBlock, toBlock };
};

export default get30DayBlockRange;
