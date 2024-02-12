import type { Edpk } from "~/types/responses";

const FineTableItem = ({ brojNaloga, opazen, pozNaBr, zaUplatu }: Edpk) => {
  return (
    <tr className="hover">
      <td>{brojNaloga}</td>
      <td>{new Date(opazen).toLocaleString('sr-RS')}</td>
      <th>{pozNaBr}</th>
      <td>{zaUplatu}</td>
    </tr>
  );
};

export default FineTableItem;
