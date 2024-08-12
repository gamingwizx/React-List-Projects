import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, inputValue: "123" },
    { id: 2, inputValue: "12345" },
    { id: 3, inputValue: "1234567" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems((itemMap) => [...itemMap, { id: itemMap.length + 1, inputValue }]);
  };
  const itemList = () => {
    return document.querySelectorAll(".item");
  };
  const afterItem = (e, itemList) => {
    return [...itemList].reduce(
      (children, item) => {
        const size = item.getBoundingClientRect();
        const offset = e.clientY - size.top - size.height / 2;
        if (offset < 0 && offset > children.offset) {
          return { element: item, offset: offset };
        } else {
          return children;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: itemList[itemList.length - 1],
      }
    ).element;
  };
  const handleOnDrop = (e) => {
    const itemLists = itemList();
    const afterItems = afterItem(e, itemLists);
    const draggedElementId = Number(e.dataTransfer.getData("id"));
    const afterElementId = Number(afterItems.dataset.id);
    const copy = items.slice().filter((item) => item.id !== draggedElementId);

    const getItem = items.slice().find((item) => item.id === draggedElementId);
    const getLastElement = items.slice()[items.length - 1];

    const draggedElementIndex = items
      .slice()
      .findIndex((item) => item.id === draggedElementId);
    const afterElementIndex = items
      .slice()
      .findIndex((item) => item.id === afterElementId);
    if (afterElementIndex === items.length - 1) {
      copy.push(getItem);
    } else {
      copy.splice(afterElementIndex, 0, getItem);
    }

    setItems(copy);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input onChange={(e) => setInputValue(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
      <div
        className="item-list"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleOnDrop(e)}
      >
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
}

function Item({ item }) {
  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("id", item.id);
  };
  const handleDragEnter = (e) => {
    console.log("Hello");
  };
  const style = { backgroundColor: "lightblue", padding: "1em", margin: "1em" };
  return (
    <motion.div
      layout
      layoutId={item.id}
      key={item.id}
      style={style}
      data-id={item.id}
      className="item"
      draggable="true"
      onDragEnter={(e) => handleDragEnter(e)}
      onDragStart={(e) => handleOnDragStart(e)}
    >
      {item.inputValue}
    </motion.div>
  );
}
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function App() {
//   return (
//     <div className="h-screen w-full bg-neutral-900 text-neutral-50">
//       <Board />
//     </div>
//   );
// }

// const Board = () => {
//   const [cards, setCards] = useState(DEFAULT_CARDS);

//   return (
//     <div className="flex h-full w-full gap-3 overflow-scroll p-12">
//       <Column
//         title="Backlog"
//         column="backlog"
//         headingColor="text-neutral-500"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="TODO"
//         column="todo"
//         headingColor="text-yellow-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="In progress"
//         column="doing"
//         headingColor="text-blue-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="Complete"
//         column="done"
//         headingColor="text-emerald-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <BurnBarrel setCards={setCards} />
//     </div>
//   );
// };

// const Column = ({ title, headingColor, cards, column, setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragStart = (e, card) => {
//     e.dataTransfer.setData("cardId", card.id);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setActive(false);
//     clearHighlights();

//     const indicators = getIndicators();
//     const { element } = getNearestIndicator(e, indicators);

//     const before = element.dataset.before || "-1";

//     if (before !== cardId) {
//       let copy = [...cards];

//       let cardToTransfer = copy.find((c) => c.id === cardId);
//       if (!cardToTransfer) return;
//       cardToTransfer = { ...cardToTransfer, column };

//       copy = copy.filter((c) => c.id !== cardId);

//       const moveToBack = before === "-1";

//       if (moveToBack) {
//         copy.push(cardToTransfer);
//       } else {
//         const insertAtIndex = copy.findIndex((el) => el.id === before);
//         if (insertAtIndex === undefined) return;

//         copy.splice(insertAtIndex, 0, cardToTransfer);
//       }

//       setCards(copy);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     highlightIndicator(e);
//   };

//   const clearHighlights = (els) => {
//     const indicators = els || getIndicators();

//     indicators.forEach((i) => {
//       i.style.opacity = "0";
//     });
//   };

//   const highlightIndicator = (e) => {
//     const indicators = getIndicators();

//     const el = getNearestIndicator(e, indicators);

//     el.element.style.opacity = "1";
//   };

//   const getNearestIndicator = (e, indicators) => {
//     const DISTANCE_OFFSET = 50;

//     const el = indicators.reduce(
//       (closest, child) => {
//         const box = child.getBoundingClientRect();

//         const offset = e.clientY - (box.top + DISTANCE_OFFSET);

//         if (offset < 0 && offset > closest.offset) {
//           return { offset: offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );

//     return el;
//   };

//   const getIndicators = () => {
//     return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//   };

//   const filteredCards = cards.filter((c) => c.column === column);

//   return (
//     <div className="w-56 shrink-0">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className={`font-medium ${headingColor}`}>{title}</h3>
//         <span className="rounded text-sm text-neutral-400">
//           {filteredCards.length}
//         </span>
//       </div>
//       <div
//         onDrop={handleDragEnd}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//       >
//         {filteredCards.map((c) => {
//           return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
//         })}
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, id, column, handleDragStart }) => {
//   return (
//     <>
//       <DropIndicator beforeId={id} column={column} />
//       <motion.div
//         layout
//         layoutId={id}
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, { title, id, column })}
//         className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
//       >
//         <p className="text-sm text-neutral-100">{title}</p>
//       </motion.div>
//     </>
//   );
// };

// const DropIndicator = ({ beforeId, column }) => {
//   return (
//     <div
//       data-before={beforeId || "-1"}
//       data-column={column}
//       className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
//     />
//   );
// };

// const BurnBarrel = ({ setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setActive(true);
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setCards((pv) => pv.filter((c) => c.id !== cardId));

//     setActive(false);
//   };

//   return (
//     <div
//       onDrop={handleDragEnd}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
//         active
//           ? "border-red-800 bg-red-800/20 text-red-500"
//           : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
//       }`}
//     ></div>
//   );
// };

// const DEFAULT_CARDS = [
//   // BACKLOG
//   { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
//   { title: "SOX compliance checklist", id: "2", column: "backlog" },
//   { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
//   { title: "Document Notifications service", id: "4", column: "backlog" },
//   // TODO
//   {
//     title: "Research DB options for new microservice",
//     id: "5",
//     column: "todo",
//   },
//   { title: "Postmortem for outage", id: "6", column: "todo" },
//   { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

//   // DOING
//   {
//     title: "Refactor context providers to use Zustand",
//     id: "8",
//     column: "doing",
//   },
//   { title: "Add logging to daily CRON", id: "9", column: "doing" },
//   // DONE
//   {
//     title: "Set up DD dashboards for Lambda listener",
//     id: "10",
//     column: "done",
//   },
// ];
