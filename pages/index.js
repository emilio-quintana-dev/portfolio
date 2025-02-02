import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software developer based in Chicago!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Emilio Quintana
          </Heading>
          <p>Digital Craftsman ( Developer / Designer / Entrepreneur )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/emilio.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a full-stack developer based in Chicago with a
          passion for building digital services/products. I&apos;m passionate
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code.
        </Paragraph>

        <Paragraph>Currently building the next-gen Ruby on Rails + React boilerplate to ship startups fast.</Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Guayaquil, Ecuador.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Bachelor&apos;s Program in Computer Information Systems at <Link href="https://www.lindenwood.edu">Lindenwood University</Link>.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed a Fullstack Software Engineering Bootcamp at <Link href="https://www.flatiron.com">Flatiron School</Link>.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed a Master&apos;s Program in Financial Technology at <Link href="https://www.ntu.edu">Nanyang Technological University Singapore</Link>.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working as a full stack developer at{" "} <Link href="https://www.commonlit.org/" target="_blank">@Commonlit
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/emilio-quintana-dev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @emilio-quintana-dev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
