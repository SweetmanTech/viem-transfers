const Results = ({ snapshot }: any) => (
  <table tw="w-[75vw] w-full flex flex-col">
    <thead>
      <tr tw="flex w-full border border-sky-500 justify-around">
        <th>Collection</th>
        <th>Number of Editions</th>
      </tr>
    </thead>
    <tbody tw="flex flex-col w-full border border-sky-500 justify-between">
      {(snapshot as any).map((item: any, index: number) => (
        <tr key={index} tw="flex justify-between border border-sky-500">
          <td>{item.address}</td>
          <td>{item.numberOfEditions}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Results;
