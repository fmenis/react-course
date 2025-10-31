export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={props.onClick}
      >
        {children}
      </button>
    </li>
  );
}
