import { Code, Flex, Text } from 'ui/chakra-ui'

export function HomePage(): React.ReactElement {
  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh">
      <Text>
        Edit <Code>apps/web/pages/index.tsx</Code> and save to reload.
      </Text>
    </Flex>
  )
}
