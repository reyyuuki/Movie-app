import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="homepage" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
