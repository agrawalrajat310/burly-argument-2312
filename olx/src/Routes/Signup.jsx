import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";

function Signup() {
  const navigate = useNavigate();
  const { setData } = useContext(AppContext);
  const [text, setText] = useState({ email: "", password: "" });

  const handleSignup = () => {
    setData({ email: text.email, password: text.password });
    setText({ email: "", password: "" });
    goToLogin();
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Box mb={7}>
      <VStack gap={3}>
        <Input
          autoFocus={true}
          value={text.email}
          onChange={(e) => setText({ ...text, email: e.target.value })}
          type="email"
          variant="flushed"
          borderColor="rgb(111, 111, 111)"
          focusBorderColor="rgb(176, 80, 255)"
          placeholder="E-mail"
          w="333px"
        />
        <Input
          value={text.password}
          onChange={(e) => setText({ ...text, password: e.target.value })}
          type="password"
          variant="flushed"
          borderColor="rgb(111, 111, 111)"
          focusBorderColor="rgb(176, 80, 255)"
          placeholder="Password"
          w="333px"
        />
        <Text fontSize="sm" color="lightgray">
          By proceeding you agree to our <span>Terms of Service</span> & <br />
          <span>Privacy Policy</span>
        </Text>
        <Button
          disabled={text.email === "" || text.password === ""}
          onClick={handleSignup}
          w="333px"
          h="47px"
          variant="outline"
          borderColor="rgb(111, 111, 111)"
          _hover="transparent"
          color="gray"
        >
          Sign up
        </Button>
        <Text fontSize="sm" color="whitesmoke">
          Already Registered? <span onClick={goToLogin}>Login</span>
        </Text>
      </VStack>
    </Box>
  );
}

export default Signup;
