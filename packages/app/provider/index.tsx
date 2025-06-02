import { useColorScheme } from 'react-native'

import { PropsWithChildren } from 'react'

export function Provider({
  children,

}:  PropsWithChildren) {
  const colorScheme = useColorScheme()
  

  return children

  
}
