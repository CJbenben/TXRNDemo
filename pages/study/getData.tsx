/* 
语法： 
fetch(参数) 
.then(完成的回调函数) 
.catch(失败的回调函数) 

fetch(url,opts) 
.then((response) => { 
 //请求成功后返回的对象response 
 //例如：json、text等 
return response.text(); 
return response.json(); 
}) 
.then((responseData) => { 
 //处理请求得到的数据 
}) 
.catch((error) => { 
 //网络请求失败执行该回调函数，得到错误信息 
}) 
 * */ 


/*
	参考文章：
	https://blog.csdn.net/superbiglw/article/details/54574161
	https://www.jianshu.com/p/4ca2df7350e6
 */

import React, { Component, useState } from 'react';  
import {  
    AppRegistry,  
    StyleSheet,  
    Text,  
    View,  
    TouchableOpacity,  
    Alert
} from 'react-native';  
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

var getUrl = "http://v.juhe.cn/toutiao/index?type=top&key=ad2908cae6020addf38ffdb5e2255c06";
var postUrl = "http://v.juhe.cn/toutiao/index";

function GetDataDemo(): React.JSX.Element {
    const [data, setData] = useState(null);

    // function getRequest(url: string | URL | Request) {
    //     let data: any = { "ket": "value" }
    //     setData(data);
    // }

    function getRequest(url: string | URL | Request) {
        var opts = {  
            method: "GET"  
        }
        fetch(url, opts)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.reason) {
                    setData(data);
                    console.log(data.toString());
                    Alert.alert(JSON.stringify(data)); // 使用 JSON.stringify 来查看完整的对象
                }
            })
            .catch(error => {
                Alert.alert(error.toString());
                
            });
    }

    function postRequest(url: string | URL | Request){  
        /* 方案一：
        let formData = new FormData();  
        formData.append("type","top");  
        formData.append("key","ad2908cae6020addf38ffdb5e2255c06");  
        var opts = {  
            method:"POST",  
            body:formData,
        }
		*/

        // 官网方案
        var opts = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                type: 'top',
                key: 'ad2908cae6020addf38ffdb5e2255c06',
            })
        }

        fetch(url, opts)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.reason) {
                    setData(data);
                    console.log(data.toString());
                    Alert.alert(JSON.stringify(data)); // 使用 JSON.stringify 来查看完整的对象
                }
            })
            .catch(error => {
                Alert.alert(error.toString());
                
            });



		// fetch(requestURL,map)
        // .then((result)=>result.json()) // 返回带有json格式的Promise
        // .catch((error)=>{   // 捕获错误
        //     console.log(error);  
        // })
        // .then((responseData)=>{   // 输出json数据
        //     console.log(responseData);
        // });

    }

    return(  
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text>{ JSON.stringify(data) }</Text>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity onPress={() => getRequest(getUrl)}>  
                        <View style={styles.btn}>  
                            <Text>GET</Text>  
                        </View>  
                    </TouchableOpacity>  

                    <TouchableOpacity onPress={() => postRequest(postUrl)}>  
                        <View style={styles.btn}>  
                            <Text>POST</Text>  
                        </View>  
                    </TouchableOpacity>  
                </View>
            </ScrollView>
        </SafeAreaView>  
    );  
}  
const styles = StyleSheet.create({  
    container: {
        backgroundColor:"cyan",  
        flexDirection: "column",
        justifyContent: 'center',
        flex: 1
    },
    content: {
        margin: 40
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 40,
    },
    btn: { 
        width:60,  
        height:30,  
        borderWidth:1,  
        borderRadius:3,  
        borderColor:"black",  
        backgroundColor:"yellow",  
        justifyContent:"center",  
        alignItems:"center"
    }  
});

export default module.exports = GetDataDemo;  

