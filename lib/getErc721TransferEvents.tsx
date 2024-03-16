import { parseAbiItem } from 'viem';
import { optimismPublicClient } from './publicClient';

const getErc721TransferEvents = async (args: any, fromBlock: any, toBlock: any) => {
  const logs = await optimismPublicClient.getLogs({
    event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
    args: [null, '0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38'],
    fromBlock,
    toBlock,
  });
  const filteredErc721Logs = logs.filter((log) => log.args && log.args.length === 2);
  return filteredErc721Logs;
};

export default getErc721TransferEvents;
