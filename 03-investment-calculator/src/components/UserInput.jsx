export default function UserInput({ label, initialValue, onChangeValue }) {
  return (
    <li id="input-group">
      <label id="user-input label" htmlFor="html" className="">
        {label}
      </label>
      <input
        id="user-input input"
        onChange={(event) =>
          onChangeValue({ label, value: event.target.value })
        }
        type="number"
        defaultValue={initialValue}
      />
    </li>
  );
}
