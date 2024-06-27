import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const carouselImages = [
  
  'https://i.natgeofe.com/n/b73c0445-89bf-46bb-b02a-ccce5d237d6a/womens-right-human-rights-908059302_3x2.jpg',
  'https://devpolicy.org/wp-content/uploads/2012/10/Human-rights.jpg',
  'https://media.tehrantimes.com/d/t/2020/06/19/4/3479448.jpg',
  'https://img2.chinadaily.com.cn/images/202003/16/5e6f46cca3101282065dae34.jpeg',
  'https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FIJ3FXRKR3BJ2XMPHZY52TEGLCY.jpg',
  'https://www.ictj.org/sites/default/files/styles/legacy_scale_hero/public/ICTJ_Education_Sierra_Leone_Reparations.jpg'
];

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
      : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  outline: '1px solid',
  backgroundImage: `url(${
    theme.palette.mode === 'light'
      ? '/static/images/templates/templates-images/hero-light.png'
      : '/static/images/templates/templates-images/hero-dark.png'
  })`,
  backgroundSize: 'cover',
  outlineColor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 25%, 80%, 0.5)'
      : 'hsla(210, 100%, 80%, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
    }, 6000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
          Voice-4-Rights
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            "Our lives begin to end the day we become silent about things that matter." - Martin Luther King, Jr.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center">
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image"
         sx={{
          backgroundImage: `url(${carouselImages[currentImage]})`,
        }} />
      </Container>
    </Box>
  );
}
