import AuthDivider from "@/components/auth/AuthDivider";
import AuthInputField from "@/components/auth/AuthInputField";
import AuthSocialButtons from "@/components/auth/AuthSocialButtons";
import AuthSwitchRow from "@/components/auth/AuthSwitchRow";
import AuthTermsRow from "@/components/auth/TermsRow";
import AuthPrimaryButton from "@/components/PrimaryButton";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/Home");
  };

  const handleGoogleLogin = () => {};

  const handleFacebookLogin = () => {};

  const handleSignUp = () => {
    router.push("/SignUp");
  };

  const handleForgotPassword = () => {};

  return (
    <View style={styles.content}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.formContainer}>
        <AuthInputField
          label="E-Mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          containerStyle={styles.signinInputGroup}
        />

        <AuthInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          forgotText="Forget Password ?"
          onForgotPress={handleForgotPassword}
        />
      </View>

      <AuthPrimaryButton label="Login" onPress={handleLogin} />

      <AuthSwitchRow
        prefixText="Don't have an account? "
        actionText="Signup"
        onPress={handleSignUp}
      />

      <AuthDivider />

      <AuthSocialButtons
        onGooglePress={handleGoogleLogin}
        onFacebookPress={handleFacebookLogin}
      />

      <AuthTermsRow
        checked={termsAccepted}
        onToggle={() => setTermsAccepted(!termsAccepted)}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  signinInputGroup: {
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 80,
    paddingBottom: 46,
  },
  heading: {
    fontSize: 36,
    lineHeight: 50,
    color: colors.white,
    fontFamily: "Jura",
    marginBottom: 40,
  },
});
