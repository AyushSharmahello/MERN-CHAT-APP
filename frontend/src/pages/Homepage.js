import React from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react" 
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box d="flex" justifyContent="center" p={3} w="100%" bg="white" m="40px 0 15px 0" borderRadius="1g" borderWidth="1px">
        <Text fontSize="4xl" textAlign="center" fontFamily="work sans" color="black">
          Entering
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} color="black" borderRadius="1g" >
        <Tabs variant='soft-rounded' colorScheme='purple'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
