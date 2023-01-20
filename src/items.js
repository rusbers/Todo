function addItem(items, newItem) {
  return [...items, newItem];
}

function deleteItem(items, id) {
  return items.filter((item) => item.id !== id);
}

function completeItem(items, id, isCompleted) {
  return [...items].map((item) => {
    if (item.id === id) {
      return { ...item, completed: isCompleted };
    }

    return item;
  });
}

function editItemDescription(items, id, text) {
  return [...items].map((item) => {
    if (item.id === id) {
      return { ...item, task: text };
    }

    return item;
  });
}

export { addItem, deleteItem, completeItem, editItemDescription };
