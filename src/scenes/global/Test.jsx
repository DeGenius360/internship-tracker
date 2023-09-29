import {Box, Container } from '@mui/material';

const Test = () => {
  return (
    <div>
      <Container maxWidth="lg"
      style={{ borderStyle: "dashed", borderColor: "red"}}>
        <Box
        display="flex"
        flexDirection="row"
        style={{ borderStyle: "solid"}}
        justifyContent="space-between"  
        >
            <Box order={1} p={1} m={1}>
                Hello
            </Box>
            <Box order={2}  p={1} m={1}>
                Max
            </Box>
            <Box order={3} p={1} m={1}>
                Learning
            </Box>
            <Box order={4} p={1} m={1}>
                MaterialUI
            </Box>
            <Box order={5} p={1} m={1}>
                Damn!
            </Box>
        </Box>
        </Container>
    </div>
  )
}

export default Test;
