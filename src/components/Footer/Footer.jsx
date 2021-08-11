import { Flex, Box, Text } from "rebass";
import { footer } from "../../constants/constant";
import { HyperLink } from "../Styles";

const Footer = () => {
  return (
    <Flex sx={{ background: "#2196F3" }} p={15} flexWrap="wrap" color="white">
      <Box width={1 / 3} px={2}>
        <Text p={1} bg="primary">
          {footer.linkStack1.map((item) => {
            return (
              <Box>
                <HyperLink href={item.link} target="_blank" rel="noreferrer">
                  {item.text}
                </HyperLink>
              </Box>
            );
          })}
        </Text>
      </Box>
      <Box width={1 / 3} px={2}>
        <Text p={1} bg="primary">
          Half
        </Text>
      </Box>
      <Box width={1 / 3} px={2}>
        <Text p={1} bg="primary">
          {footer.linkStack2.map((item) => {
            return (
              <Box>
                <HyperLink href={item.link} target="_blank" rel="noreferrer">
                  {item.text}
                </HyperLink>
              </Box>
            );
          })}
        </Text>
      </Box>
      <Box width={1} px={2} pt={30} pb={40}>
        <Text p={1} bg="primary">
          {footer.copyright}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
