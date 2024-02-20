import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
import React, { useState} from 'react'

const Signup = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conformpassword, setConformpassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => { }
    const submitHandler = () => {}


  return (
      <VStack spacing="5px" color="black"> 
          <FormControl id='first-name' isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                  placeholder='Enter Your Name'
                  onChange={(e) => setName(e.target.value)}
              />
              
          </FormControl>
          
          <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                  placeholder='Enter Your Email'
                  onChange={(e) => setEmail(e.target.value)}
              />
              
          </FormControl>
          

          <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show? "text": "password"}
                  placeholder='Enter Your Password'
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement w="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {Show ? "Hide" : "Show"}
                      </Button>
                  
                  </InputRightElement>
              </InputGroup>
              
              
          </FormControl>
          
          <FormControl id='password' isRequired>
              <FormLabel>Conform Password</FormLabel>
              <InputGroup>
                <Input
                  type={show? "text": "password"}
                  placeholder='ConForm Your Password'
                  onChange={(e) => setConformpassword(e.target.value)}
                  />
                  <InputRightElement w="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {Show ? "Hide" : "Show"}
                      </Button>
                  
                  </InputRightElement>
              </InputGroup>
              
              
          </FormControl>
          
          <FormControl id='pic' isRequired>
              <FormLabel>Upload Picture</FormLabel>
              <Input
                  type='file'
                  p={1.5}
                  accept='image/*'
                  onChange={(e) => postDetails(e.target.files[0])}
              />
              
          </FormControl>
          <Button
              colorScheme='purple'
              w="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}
          >Sign Up
              
          </Button>
          

    </VStack>
  )
}

export default Signup
