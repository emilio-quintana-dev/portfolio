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
  <Layout title="Quick Rails">
    <Container>
      <Title>
        Quick Rails <Badge>2024</Badge>
      </Title>
      <P>
        A Boilerplate made to create SaaS apps using Ruby on Rails and React.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.quick-rails.com/">
            https://www.quick-rails.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js / Vite / Ruby on Rails / Material UI /Heroku</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/quick_rails.png" alt="Quick Rails" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
