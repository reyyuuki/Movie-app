import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Home" options={{ headerShown: false }} />
            <Stack.Screen name="Favourite" options={{ headerShown: false }} />
            <Stack.Screen name="Search" options={{ headerShown: false }} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}


export default Layout;