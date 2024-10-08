import {Container, Toolbar, Typography, Button, AppBar, Link,Box} from "@mui/material";
import Head from 'next/head';
import {SignIn} from '@clerk/nextjs'



export default function SignUpPage(){
    return (<Container maxWifth = "100vw">

        <AppBar position="static" sx={{backgroundColor:"#3f51b5"}}>
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow:1
                }}
                >
                    Flashcard AI
                </Typography>
                <Button color = "inherit">
                    <Link href="/sign-in" passHref sx={{ color: "white", textDecoration: 'none' }}>
                        Login
                    </Link>
                </Button>

                <Button color = "inherit">
                    <Link href="/sign-up" passHref sx={{ color: "white", textDecoration: 'none' }}>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h4">Sign In</Typography>
            <SignIn/>

        </Box>
    </Container>)
}