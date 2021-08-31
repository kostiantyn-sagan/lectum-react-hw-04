import { useParams } from 'react-router';

export function Secret() {
  const { value } = useParams();

  return <p>My Secret: {value}</p>;
}
