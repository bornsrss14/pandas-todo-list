export const ProgressReport = ({ objetoItems }) => {
  const totalNumItems = objetoItems.length;
  const numPackedItems = objetoItems.filter((item) => item.packed).length;

  const average = (totalNumItems, numPackedItems) => {
    const percentage =
      totalNumItems === 0
        ? 0
        : ((numPackedItems * 100) / totalNumItems).toFixed(1);

    return percentage < 100 ? (
      <p>
        You have <span>{objetoItems.length}</span> items in your list, and you
        already packed <span>{numPackedItems} </span> items. (That’s{" "}
        <span>{percentage}%</span>){" "}
      </p>
    ) : (
      "You got everything! Ready to go 🛩️"
    );
  };
  return (
    <div className="message-report">
      <div>{average(totalNumItems, numPackedItems)}</div>
    </div>
  );
};
