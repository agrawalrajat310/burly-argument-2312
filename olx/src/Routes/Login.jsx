import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";

function Login() {
  const navigate = useNavigate();
  const { data, setIsLogin } = useContext(AppContext);
  const [text, setText] = useState({ email: "", password: "" });

  const handleLogin = () => {
    if (text.email === data.email && text.password === data.password) {
      setIsLogin(true);
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
      setText({ email: "", password: "" });
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <Box mb={7}>
      <VStack gap={4}>
        <Input
          type="email"
          autoFocus={true}
          value={text.email}
          onChange={(e) => setText({ ...text, email: e.target.value })}
          variant="flushed"
          borderColor="rgb(111, 111, 111)"
          focusBorderColor="rgb(176, 80, 255)"
          placeholder="E-mail"
          w="333px"
        />
        <Input
          type="password"
          value={text.password}
          onChange={(e) => setText({ ...text, password: e.target.value })}
          variant="flushed"
          borderColor="rgb(111, 111, 111)"
          focusBorderColor="rgb(176, 80, 255)"
          placeholder="Password"
          w="333px"
        />
        <Text fontSize="sm" color="rgb(176, 80, 255)">
          Forgot Password?
        </Text>
        <Button
          disabled={text.email === "" || text.password === ""}
          onClick={handleLogin}
          w="333px"
          h="47px"
          variant="outline"
          borderColor="rgb(111, 111, 111)"
          _hover="transparent"
          color="gray"
        >
          Login
        </Button>
        <Text fontSize="sm" color="lightgray">
          New to OLX? <span onClick={goToSignup}>Register</span>
        </Text>
      </VStack>
    </Box>
  );
}

export default Login;
