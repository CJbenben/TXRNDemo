// types.ts
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

// 定义导航参数类型
export type RootStackParamList = {
  Home: { post: string }; // 定义 Home 屏幕需要的参数
  Next: { itemId: number }; // 如果还有其他屏幕，继续定义
  Button: {};
  Image: {};
  List: {};
  Other: {};
  GetData: {};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
