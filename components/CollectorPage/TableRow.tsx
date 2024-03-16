import getArweaveLink from '@/lib/getArweaveLink';

const TableRow = ({ item }: any) => (
  <tr tw="flex justify-between" className="text-left border border-gray-950 rounded">
    <td className="flex items-center">
      {item?.metadata?.image && (
        <div className="pr-3">
          <img
            height={50}
            width={50}
            src={getArweaveLink(item?.metadata?.image)}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col w-[350px]">
        <div className="font-bold">{item?.metadata?.title || item.address}</div>
        <div className="text-xs">{item?.metadata?.artist || ''}</div>
      </div>
    </td>
    <td className="text-center">{item.numberOfEditions}</td>
  </tr>
);

export default TableRow;
