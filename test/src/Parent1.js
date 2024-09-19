import { useTest } from "./Context/TestContext";
import { memo } from "react";
const Parent1 = memo(function Parent1() {
  const { posts } = useTest();
  return <>{posts && posts.map((post) => <p>Hello</p>)}</>;
});

export default Parent1;
