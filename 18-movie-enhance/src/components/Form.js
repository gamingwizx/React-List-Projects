export default function Form({ children, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      {children}
    </form>
  );
}
