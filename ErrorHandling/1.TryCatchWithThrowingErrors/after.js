// Before
function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    showErrorMessage("No transactions provided!");
    return;
  }

  // process logic here...
}

// After
function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    const error = new Error("No transactions provided!");
    throw error;
  }

  // ... continue processing
}

try {
  processTransactions(transactions);
} catch (error) {
  showErrorMessage(error.message);
}
