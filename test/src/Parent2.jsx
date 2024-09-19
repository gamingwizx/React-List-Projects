import { useTest } from "./Context/TestContext";
export default function Parent2() {
  const {search, searchQuery} = useTest()
  return (
    <>
    <p>From parent 2</p>
    <input onChange={(e) => search(e.target.value)}></input>
    <p>{searchQuery}</p>
    </>
  );
}
