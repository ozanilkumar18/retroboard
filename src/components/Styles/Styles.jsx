import { Text } from "rebass";

export const HyperLink = ({ href, ...rest }) => {
  return (
    <>
      <Text
        onClick={() => window.open(href)}
        {...rest}
        sx={{
          color: "white",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      ></Text>
    </>
  );
};
