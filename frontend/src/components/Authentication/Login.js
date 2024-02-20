import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack  } from '@chakra-ui/react';
import React,{useState} from 'react'

const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show);
    const submitHandler = () => {}

  
  return (
    <VStack spacing="5px" color="black"> 
          
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
          <Button
              colorScheme='purple'
              w="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}
          >
              Login 
      </Button>
       <Button
              colorScheme='red'
              w="100%"
              style={{ marginTop: 5 }}
              onClick={() => {
                  setEmail("gust@example.com");
                  setPassword("123456");
              }}
          >Gust User
              
          </Button>

    </VStack>
  )
}

export default Login
