import React from 'react';
import {View} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {GoogleSignin, User} from '@react-native-community/google-signin';
import awaitTo from 'async-await-error-handling';

const configureGoogle = async () => {
  GoogleSignin.configure({
    webClientId:
      '756070644908-frbs4jskdr7lbonic2i74mcuhhfo8a8r.apps.googleusercontent.com',
  });
};

const LoginModal = () => {
  configureGoogle();

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    // @ts-ignore
    const [err, data]: [string, User] = await awaitTo(GoogleSignin.signIn());

    if (err) {
      console.log(err);
      return;
    }

    const {user} = data;

    console.log(user);

    // const [loggedInUser, error] = await AuthService.signUpUser({
    //     email: user.email,
    //     firstName: user.givenName,
    //     lastName: user.familyName,
    //     fbId: user.id,
    //     profilePicUrl: user.photo,
    //     signupType: ESignupType.GMAIL,
    //     extra: {}
    // });

    // if (error) {
    //     GenUtil.handleError(error);
    // } else {
    //     updateLoginUser(loggedInUser);
    // }
  };
  return (
    <View>
      <SocialIcon
        title="Sign In With Google"
        button
        raised={false}
        type="google"
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};

export default LoginModal;
