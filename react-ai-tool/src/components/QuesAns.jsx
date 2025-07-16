import Answer from "./Answer";
const QuesAns = ({ item, index = { index } }) => {
  return (
    <>
      <div
        className={item.type == "q" ? "flex justify-end" : ""}
        key={index + Math.random()}
      >
        {item.type === "q" ? (
          <li
            key={index + Math.random()}
            className="text-right p-1 border-8 dark:bg-zinc-700  bg-red-100 bg dark:border-zinc-700
            border-red-100 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit "
          >
            <Answer
              ans={item.text}
              totalResult={1}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={index + Math.random()} className="text-left p-1 ">
              <Answer
                key={ansIndex}
                ans={ansItem}
                totalResult={item.length}
                index={ansIndex}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};
export default QuesAns;
