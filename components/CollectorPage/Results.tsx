import { useCollectorProvider } from '@/providers/CollectorProvider';

const Results = () => {
  const { snapshot } = useCollectorProvider();

  return (
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Number of Editions</th>
        </tr>
      </thead>
      <tbody>
        {(snapshot as any).map((item: any, index: number) => (
          <tr key={index}>
            <td>{item.address}</td>
            <td>{item.numberOfEditions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
