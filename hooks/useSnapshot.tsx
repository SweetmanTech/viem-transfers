import getSnapshot from '@/lib/getSnapshot';
import { useEffect, useState } from 'react';

const useSnapshot = () => {
  const [snapshot, setSnapshot] = useState([] as any);

  useEffect(() => {
    const fetchSnapshot = async () => {
      const snapshotData = await getSnapshot();
      if (Array.isArray(snapshotData) && snapshotData.length) {
        const addressList = snapshotData.map((item) => item.result);
        setSnapshot(addressList);
      }
    };

    fetchSnapshot();
  }, []);

  return { snapshot };
};

export default useSnapshot;
