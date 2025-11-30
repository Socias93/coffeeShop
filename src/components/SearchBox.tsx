interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ onChange, value }: Props) {
  const color = "#e5e7eb";

  return (
    <form className="d-flex ms-auto" style={{ color }} role="search">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control ms-3 bg-dark text-light placeholder-white"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBox;
