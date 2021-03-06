/* eslint-disable default-case */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [...state.transactions, action.payload]
      }
    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
  }
}