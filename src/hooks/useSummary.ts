import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, crr) => {
      if (crr.type === 'income') {
        acc.income += crr.price
        acc.total += crr.price
      } else {
        acc.outcome += crr.price
        acc.total -= crr.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )
  return summary
}
