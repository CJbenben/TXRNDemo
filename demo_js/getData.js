  
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

import React, { Component } from 'react';  
import {  
    AppRegistry,  
    StyleSheet,  
    Text,  
    View,  
    TouchableOpacity  
} from 'react-native';  

var getUrl = "http://v.juhe.cn/toutiao/index?type=top&key=ad2908cae6020addf38ffdb5e2255c06";
var postUrl = "http://v.juhe.cn/toutiao/index";

class getData extends Component{  
    getRequest(url){  
        /*网络请求的配置*/  
        var opts = {  
            method:"GET"  
        }  
        fetch(url,opts)  
            .then((response) => {  
            	console.log(response);
                return response.text();  
            })  
            .then((responseText) => {  
                alert(responseText);  
            })  
            .catch((error) =>{  
                alert(error);  
            })  
    }  
    postRequest(url){  
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

		fetch(url, opts).then(function(response) {
		  if(response.ok) {
		  	alert(response.status);
		    return response.json();
		  } else {
		    _handleError(`Oops, something went wrong: ${response.status}, ${response.statusText}`);
		  }
		}).then(function(data) {
		   if(data) {
		     console.log('success', data);
		   }
		}).catch(function(error) {
		  _handleError(`There has been a problem with your fetch operation: ${error.message}`);
		});



		fetch(requestURL,map)
     .then((result)=>result.json()) // 返回带有json格式的Promise
     .catch((error)=>{   // 捕获错误
           console.log(error);  
     })
     .then((responseData)=>{   // 输出json数据
           console.log(responseData);
     });

    }  
    render(){  
        return(  
            <View style={styles.container}>  
                <TouchableOpacity onPress={this.getRequest.bind(this,getUrl)}>  
                    <View style={styles.btn}>  
                        <Text>GET</Text>  
                    </View>  
                </TouchableOpacity>  

                <TouchableOpacity onPress={this.postRequest.bind(this,postUrl)}>  
                    <View style={styles.btn}>  
                        <Text>POST</Text>  
                    </View>  
                </TouchableOpacity>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container:{  
        backgroundColor:"cyan",  
        flexDirection:"row",  
        justifyContent:"space-around",  
        alignItems:"center",  
        flex:1  
    },  
    btn:{  
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
module.exports = getData;  

