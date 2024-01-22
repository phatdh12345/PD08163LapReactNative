import React from "react";
import { styles } from "./styles";
import { Button, Image, Pressable, Text, View } from "react-native";
import Button from "../../compoments/button";

const Splash = () =>{
    return(
        <View style = {styles.container}>
            <Image
            resizeMode="contain">
            style = {styles.img}
            source = {require('../../assets/images/1.png')}
            </Image>
            <Text style = {styles.title}>you'll find</Text>
            <Text style = {[styles.title,styles.innerTitle]}>All you need</Text>
            <Text style = {styles.title}>Here!</Text>

            <Button title="Sign up"></Button>

            <Pressable>
                <Text style= {styles.footerText}>Sign in</Text>
            </Pressable>
        </View>

    );
};
export default Splash;