import axios from "axios";
import { useQuery } from "react-query";

interface ICountry {
  name: string;
  avgEarning: number;
  currency: string;
}

export default function App() {
  const { data, isLoading } = useQuery(["top-ten"], async function () {
    const result = await axios
      .get<{ data: ICountry[] }>("http://localhost:3000/countries/top-ten")
      .then((response) => response.data.data);
    return result;
  });
  if (isLoading || !data) return <div>loading...</div>;
  return (
    <div>
      <table>
        <thead>
          <tr>name</tr>
          <tr>earnings</tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.avgEarning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
