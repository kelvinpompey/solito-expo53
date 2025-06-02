import { Text, View } from 'react-native'
import { useRouter } from 'solito/navigation'

export function UserDetailScreen({ id }: { id: string }) {
  const router = useRouter()
  if (!id) {
    return null
  }
  return (
    <View>
      <Text>User Detail</Text>
    </View>
  )
}
