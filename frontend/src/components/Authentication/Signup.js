import React, { useEffect, useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState()

    const handleClick = () => setShow(!show)
    const postDetails = (pics) => { };

    const submitHandler = () => { };

    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input focusBorderColor='teal.400' placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)} />
            </FormControl>

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

            <FormControl id='password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        focusBorderColor='teal.400'
                        onChange={(e) => setConfirmpassword(e.target.value)} />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic' isRequired>
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type='file'
                    p={1.5}
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>

            <Button
                colorScheme='teal'
                width={'100%'}
                style={{ marginTop: 15 }}
                onClick={submitHandler}>Sign Up</Button>
            <Button
                variant={'solid'}
                colorScheme='red'
                width={'100%'}

                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}>Get Guest User Credentials</Button>

        </VStack>
    )
}

export default Signup