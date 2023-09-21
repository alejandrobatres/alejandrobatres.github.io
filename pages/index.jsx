import Head from "next/head";
import { Box, ChakraProvider, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { Experience } from "../components/experience";
import { theme } from "../utils/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Alejandro Batres</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box py="115px" px={4} maxWidth={512} mx="auto">
        <Grid fluid mb={10} templateColumns="repeat(4, 1fr)" alignItems="center">
          <GridItem colSpan={1}>
            <Image
              borderRadius="full"
              width={{ base: '80%', lg: 'full' }}
              src="/profile.png"
              alt="Alejandro Batres"
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Alejandro Batres
              </Heading>
              <Text>Data Engineering & ML</Text>
            </Box>
          </GridItem>
        </Grid>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            About
          </Heading>
          <Text>
            Hello 👋 I'm Alejandro. I am currently working as a Data Engineer working on exciting projects
            involving data pipelines and cloud services. I also enjoy my time playing around with General Adversarial Networks
            and Computer Vision when I'm not going for long rides on my bike.
          </Text>
        </Box>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Work Experience
          </Heading>
          <Experience
            side="2022-Present"
            title="Data Engineer - TransUnion"
            desc=""
            href="https://www.transunion.com"
            stack="
          <Experience
            side="2021-2022"
            title="App Dev Intern - Allevia"
            desc=" Developed an interactive user-faced mobile application using the React Native and Expo frameworks for deployment on
            both IOS and Android with a concentration on accessibility and ease of use."
            href="https://allevia.us/"
            stack="React Native • AWS"
          />
          <Experience
            side="2015-2019"
            title="Production Intern - Batres CS"
            desc="Created of a set of internal web applications that centralized current and historical job ticket information, as well as
            organized assets stored in a local network attached storage device."
            href="http://www.batrescs.com/"
            stack="Graphic & Web Design • HTML/CSS • JS/PHP"
          />
        </Box>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Education
          </Heading>
          <Experience
            side="2018-2022"
            title="New York University"
            desc="B.S. Mathematics, Minor in Computer Science"
            stack="Algorithms • OOP • ML • Probability/Statistics ..."
          />
          <Experience
            side="2022"
            title="Codepath"
            desc="Advanced Software Engineering"
            stack="Data Structures • Algorithms"
          />
        </Box>
        
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Projects
          </Heading>
          <Experience
            side="2020"
            title="Wildlife Severity Classifier"
            href="https://github.com/alejandrobatres/wildfire-classification"
            desc="Supervised learning model for classification of wildfire severity based on the burn level of surrounding vegetation."
            stack="Scikit-Learn • Pandas • Numpy"
          />
          <Experience
            side="2022"
            title="Airline Reservation System"
            href="https://github.com/alejandrobatres/airline-reservation-system"
            desc="Model airline reservation system for users and staff to create and book flights and track tickets."
            stack="Flask • SQL"
          />
          <Experience
            side="2019"
            title="School Scheduling System"
            desc="Command-line application for scheduling students into classes using a SAT Solver."
            stack="Google OR-Tools • Python"
          />
        </Box>
        <Box my={10}>
          <Experience
            side="Resume"
            title="PDF"
            href="batres-alejandro-resume.pdf"
          />
          <Experience
            side="Github"
            title="alejandrobatres"
            href="https://github.com/alejandrobatres"
          />
          <Experience
            side="LinkedIn"
            title="Alejandro Batres"
            href="https://www.linkedin.com/in/alejandro-batres/"
          />
          <Experience
            side="This Site"
            title="Repo"
            href="https://github.com/alejandrobatres/alejandrobatres.github.io"
          />
        </Box>
      </Box>
    </ChakraProvider>
  )
}
