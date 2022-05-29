import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import global from '../styles/global';

const Home = () => {

    return (
        <View style={global.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        </View>
    );
};

export default Home;