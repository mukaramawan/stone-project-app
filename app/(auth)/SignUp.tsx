import AuthDivider from "@/components/auth/AuthDivider";
import AuthInputField from "@/components/auth/AuthInputField";
import AuthSocialButtons from "@/components/auth/AuthSocialButtons";
import AuthSwitchRow from "@/components/auth/AuthSwitchRow";
import SignUpProfileRow from "@/components/auth/SignUpProfileRow";
import AuthTermsRow from "@/components/auth/TermsRow";
import AuthPrimaryButton from "@/components/PrimaryButton";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {};

  const handleGoogleSignUp = () => {};

  const handleFacebookSignUp = () => {};

  const handleLogin = () => {
    router.push("/Login");
  };

  const handleUploadProfilePicture = () => {};

  return (
    <View style={styles.content}>
      <Text style={styles.heading}>Sign Up</Text>
      <SignUpProfileRow onPress={handleUploadProfilePicture} />

      <View style={styles.formContainer}>
        <AuthInputField
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          containerStyle={styles.signUpInputGroup}
        />

        <AuthInputField
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          containerStyle={styles.signUpInputGroup}
        />

        <AuthInputField
          label="E-Mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          containerStyle={styles.signUpInputGroup}
        />

        <AuthInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={styles.signUpInputGroup}
        />
      </View>

      <AuthPrimaryButton label="Sign Up" onPress={handleSignUp} />

      <AuthSwitchRow
        prefixText="Already have an account? "
        actionText="Login"
        onPress={handleLogin}
      />

      <AuthDivider />

      <AuthSocialButtons
        onGooglePress={handleGoogleSignUp}
        onFacebookPress={handleFacebookSignUp}
      />

      <AuthTermsRow
        checked={termsAccepted}
        onToggle={() => setTermsAccepted(!termsAccepted)}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  signUpInputGroup: {
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
