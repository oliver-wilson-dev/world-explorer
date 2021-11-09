import "./index.css";

const StatesList = ({ states }) => (
  <ul className="states-list">
    {states.map(({ name }) => (
      <li key={name} className="states-list-item">
        <a
          className="states-list-item-link"
          href={`https://www.google.com/search?q=${encodeURIComponent(name)}`}
        >
          {name}
        </a>
      </li>
    ))}
  </ul>
);

export default StatesList;
