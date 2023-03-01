import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
