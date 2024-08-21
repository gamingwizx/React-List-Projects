const addLineBreak = (str) =>
  str.split("\n").map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

export { addLineBreak };
