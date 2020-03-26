import { formatBytes } from "../utils/utils";
const Table = ({ response, clear }) => {
  const { name = "", status = "", size = "" } = response;
  const onDownload = e => {
    const url = window.encodeURIComponent(name);
    window.location.href = `/download/${url}`;
    clear();
  };
  return (
    <>
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Size</th>
            <th className="text-left p-3 px-5">Status</th>
            <th className="text-right p-3 px-5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-orange-100 bg-gray-100">
            <td className="p-3 px-5 truncate block" style={{ width: "300px" }}>
              {name}
            </td>
            <td className="p-3 px-5">{formatBytes(size)}</td>
            <td className="p-3 px-5">{status}</td>
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                onClick={onDownload}
                className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;
