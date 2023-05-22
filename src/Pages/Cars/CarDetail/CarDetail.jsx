import { useParams } from 'react-router-dom';
import './CarDetail.scss';
import { useFetch } from 'Services/Hooks';
import { useEffect, useState } from 'react';

export default function CarDetail() {
  const [carData, setCarData] = useState({});
  // const {pid} = useParams();
  const product = useParams();
  // const api = useFetch('cars/' + pid);
  console.log(product);
  useEffect(() => {
    // api.get().then(({data}) => setCarData(data));
  }, []);
  return (
    <h2>
      {/* {carData.name} */}
    </h2>
  )
}
