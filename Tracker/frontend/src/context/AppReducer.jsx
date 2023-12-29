// Delete Transaction Function
const deleteTrans = async (id) => {
  try {
    const res = await fetch(`https://tracker-backend-sigma.vercel.app/api/v1/transactions/${id}`, {
      method: "delete"
    })

    const data = await res.json()
    console.log(data.data)
  } catch (error) {
    console.log(error.message);
  }
}
// Add Transaction Function
const AddTrans = async (transaction) => {
  console.log(transaction)
  const res = await fetch(`https://tracker-backend-sigma.vercel.app/api/v1/transactions`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  })

  const data = await res.json()
  console.log(data.data)
}



export default function AppReducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {

        ...state,
        transactions: deleteTrans(action.payload),
      }
    case 'ADD_TRANSACTION':
      return {
        transactions: AddTrans(action.payload)
      }
      case "GET_TRANSACTIONS":
    return {
      ...state,
      transactions: action.payload,
    };
    default:
      return state;

  }
}
