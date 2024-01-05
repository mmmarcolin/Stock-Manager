import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>In stock</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} units</td>
            <td>{item.category}</td>
            <td>
              <Link to={`/items/${item.id}`} className="button is-primary is-small">
                Details
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-small">
                Update
              </Link>
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}