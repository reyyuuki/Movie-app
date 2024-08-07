import { Redirect } from 'expo-router';

export default function redirect() {
  return (
    <Redirect href={"/Home/homepage"}></Redirect>
  );
}