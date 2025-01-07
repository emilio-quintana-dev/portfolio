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
  <Layout title="Latitude">
    <Container>
      <Title>
        Latitude Media <Badge>2024</Badge>
      </Title>
      <P>
        A corporate website for Latitude Media, a tech company based in Madrid.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.latitudemedia.tech/">
            https://www.latitudemedia.tech/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/latitude_01.png" alt="Latitude" />
      <WorkImage src="/images/works/latitude_02.png" alt="Latitude" />
      <WorkImage src="/images/works/latitude_03.png" alt="Latitude" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
