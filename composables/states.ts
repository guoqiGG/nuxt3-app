export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<number>('color', () => 'pink')