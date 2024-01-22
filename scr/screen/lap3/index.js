import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
const ViewComponent = () =>{
  return(
    <View style = {styles.container}>

      {/* {Line 1} */}
      <Text style = {styles.baseText}>
        Em vào đời bằng(' ')
        <Text style = {[styles.boldText, colorText('red')]}>vang đỏ</Text> anh vào đời bằng {' '}
        <Text style = {[styles.boldText, colorText('yellow')]}>nước trà</Text>
      </Text>
      {/* {Line 2} */}
      <Text style = {styles.baseText}>
        Bằng cơn mưa thơm{" "}
        <Text style ={[styles.boldText,sizeText(20),style.italicText]}>
          mùi đất{' '}
        </Text>{' '}
        và{' '}
        <Text style={[sizeText(10), styles.italicText]}>
          bằng hoa dại mọc trước nhà
        </Text>
      </Text>
      {/* {Line 3} */}
      <Text 
      style={[
        styles.baseText,
        styles.italicText,
        styles.boldText,
        colorText('gray'),
      ]}>
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
      {/* {Line 4} */}
      <Text style={[styles.baseText]}>
        Lý trí em là{' '}
        <Text 
        style={styleText({
          textDecorationLine: 'underline',
          letterSpacing: 20,
          fontWeight: 'bold',
        })}>
          {' '}
          công cụ{' '}
        </Text>
        còn trái tim anh là
        <Text 
        style = {styleText({
          textDecorationLine: 'underline',
          letterSpacing: 20,
          fontWeight: 'bold',
        })}>
          {' '}
          động cơ{' '}
        </Text>
      </Text>
      {/* {Line 5} */}
      <Text style={[styles.baseText, styleText({textAlign: 'right'})]}>
        Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
      </Text>
      {/* {Line 6} */}
      <Text
      style={[
      styles.baseText,
      styleText({
        textAlign:'center',
        fontWeight: 'bold',
        color:'orange',
      }),
      ]}>
        Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
      </Text>
      {/* {Line 7} */}
      <Text
      style={[
        styles.baseText,
        styleText({
          fontWeight:'bold',
          color:'black',
        }),
      ]}>
        Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text>
        em vào đời bằng <Text style={colorText('yellow')}>nắng xanh</Text>
      </Text>
      <Text
      style={[
        styles.baseText,
        styleText({
          fontWeight:'bold',
          color:'black',
        }),
      ]}>
        Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text>
        và con đường đó giờ <Text style={colorText('white')}>vắng anh</Text>
      </Text>
    </View>
  );
};
export default ViewComponent;
const colorText = color =>({
  color,
});
const sizeText = size =>({
  fontSize: size,
});
const style = (props: style) =>({
  ...props,
})
const styleText = (props: TextStyle) =>({
  ...props,
});


