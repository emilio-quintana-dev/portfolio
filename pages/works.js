export const runtime = "experimental-edge";
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbQuantum from '../public/images/works/quantum_01.png'
import thumbLatitudeMedia from '../public/images/works/latitude_01.png'
import quickRails from '../public/images/works/quick_rails.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="quantum" thumbnail={thumbQuantum} title="Quantum Digital">
            Commercial website of an elite marketing agency based in Delaware.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="latitude" thumbnail={thumbLatitudeMedia} title="Latitude Media">
            Commercial website of a tech company based in Madrid.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="quick-rails" thumbnail={quickRails} title="Quick Rails">
            Boilerplate to create SaaS apps using Ruby on Rails and React.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
