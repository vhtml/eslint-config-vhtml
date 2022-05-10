interface Item {
  name: string,
  value: number
}

export const items: Item[] = [{
  name: 'hh',
  value: 1
}]

export type ItemType = {
  ref: {
    scroll(item: Item): void
  }
}
