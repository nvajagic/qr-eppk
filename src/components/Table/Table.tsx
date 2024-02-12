import type { PropsWithChildren } from "react";

type TableProps = PropsWithChildren<{
  headers: string[];
  hasButton?: boolean;
}>;

const Table = ({ headers, children, hasButton }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={`table-header-${index}`}>{header}</th>
            ))}
            {hasButton ? <th></th> : null}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr> */}
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
