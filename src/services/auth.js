import * as Google from "expo-google-app-auth";

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: Expo.Constants.manifest.extra.androidClientId,
      scopes: Expo.Constants.manifest.extra.scopes,
    });
    if (result.type === "success") {
      return result;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true, message: e };
  }
};
