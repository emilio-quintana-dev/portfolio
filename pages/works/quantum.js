export const runtime = "experimental-edge";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Quantum">
    <Container>
      <Title>
        Quantum Digital <Badge>2023</Badge>
      </Title>
      <P>
        A corporate website for Quantum Digital, a digital marketing agency based in Delaware, US.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.quantumdigital.tech/">
            https://www.quantumdigital.tech/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js / Vite / Netlify / Formspree</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/quantum_01.png" alt="Quantum" />
      <WorkImage src="/images/works/quantum_02.png" alt="Quantum" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
