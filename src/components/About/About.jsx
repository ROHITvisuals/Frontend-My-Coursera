import {
  Avatar,
  // Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';




// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';



const Founder = () => (

  <>

    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          // src="https://rohit-verma-ui-design.netlify.app/Bbbbbbbbbb10.jpg"
          src="https://64cbb5c9b759fc01b362ca31--comforting-blancmange-c845e2.netlify.app/296797380_602897224539089_5669174717627555083_n.jpeg"
          boxSize={['40', '48']}
        />

        <Text children="Rohit Verma" opacity={0.9} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Rohit Verma " size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`Hi, I am a full-stack developer .   This is an Subscription based wesbite made by @meRohitVerma. Only with the purpose to learn MERN Stack. `}
        // Our mission is to provide quality content at reasonable price.`}
        />
      </VStack>
      <br />
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading className="our_brands" component="h1">Our Brands</Heading>
        <br />
        <Link to="https://github.com/ROHITvisuals" target="blank">
          {/* <GitHubIcon className="githubSvgIcon" /> */}
          <i class="fa-brands fa-github fa-2xl"></i>
        </Link>
        <br />
        <Link to="https://www.linkedin.com/in/rv171614/" target="blank" >
          {/* <LinkedInIcon className="linkedinSvgIcon" /> */}
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/rv171614/" target="blank" >
          {/* <LinkedInIcon className="linkedinSvgIcon" /> */}
          <i class="fa-brands fa-youtube fa-2xl "></i>
        </Link>
      </VStack>
    </Stack>

  </>
);




const About = () => {
  // const {  loading } = useSelector(state => state.user) 

  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>


      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;


// "@material-ui/core": "^4.12.4",
// "@material-ui/icons": "^4.11.3",
// "@mui/icons-material": "^5.11.9",
// "@mui/material": "^5.11.9",
// "@mui/styles": "^5.11.9",