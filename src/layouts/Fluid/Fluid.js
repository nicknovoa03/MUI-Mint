import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import NoSsr from '@mui/material/NoSsr';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Footer } from './components';

const Fluid = ({
  children,
  colorInvert = false,
}) => {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <Box id="js--fluid-top" >
      <TopNav colorInvert={colorInvert}/>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={2}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('js--fluid-top')}
            role="presentation"
            sx={{ position: 'fixed', bottom: 24, right: 32 }}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  );
};

Fluid.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Fluid;
