import React from 'react';

const signIn = () =>{
    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account!</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Submit</FormButton>
                            <Text>Forget password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default signIn;