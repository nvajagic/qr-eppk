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
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
