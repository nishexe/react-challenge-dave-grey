import "./TextField.css";
const TextField = ({ clr, setClr }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="type your color"
        className="inputClass"
        value={clr}
        onChange={(e) => setClr(e.target.value)}
      />
    </form>
  );
};
export default TextField;
