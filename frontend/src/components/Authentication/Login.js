import React, { useEffect, useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState()

    const handleClick = () => setShow(!show)
    const postDetails = (pics) => { };

    const submitHandler = () => { };

    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' focusBorderColor='teal.400'
                    onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Enter Your Password'
                        focusBorderColor='teal.400' onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme='teal'
                width={'100%'}
                style={{ marginTop: 15 }}
                onClick={submitHandler}>Login</Button>

        </VStack>
    )
}

export default Login