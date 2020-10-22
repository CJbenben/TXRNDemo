
import React from 'react';
import { Text, View, Alert } from 'react-native';
import {WebView} from 'react-native-webview';
//import SplashScreen from 'react-native-splash-screen';
//SplashScreen.hide();
//注意换一个有空场的资源链接
const uri = 'https://m.mtime.cn/#!/onlineticket/614532488/';
const INJECT_JS = (window, document) => {
    let submitBtn;
    function waitForBtnRender() {
        submitBtn = document.getElementById('submitBtn');
        if (!submitBtn) {
            //暗号：技术为生活服务
            setTimeout(waitForBtnRender, 2000);
        } else {
            submitBtn.onclick = () => {
                const seats = [];
                document.querySelectorAll('.seat_selected').forEach((node) => {
                    seats.push(node.getAttribute('name'));
                });
                window.ReactNativeWebView.postMessage(seats.join(','));
            }
        }
    }
    waitForBtnRender();
};

export default function App() {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screensssssssss2222222</Text>
        // </View>
        <WebView
            style={{ flex: 1 }}
            source={{ uri }}
            injectedJavaScript={`(${INJECT_JS.toString()})(window,document)`}
            onMessage={(e) => {
                Alert.alert('您选中的座位是:' + e.nativeEvent.data);
            }}
        />
    );
}