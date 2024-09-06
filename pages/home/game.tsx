import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, useColorScheme, StyleSheet, Text, View, ScrollView, StatusBar, Button, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const { width } = Dimensions.get('window');
const SIZE = (width - 40 - 12) / 4;

enum Direction {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

const GameScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const [postText, setPostText] = React.useState('');
  const [board, setBoard] = useState(generateInitialBoard());

  function generateInitialBoard() {
    const newBoard = Array(4).fill(null).map(() => Array(4).fill(0));
    // 在随机位置生成两个初始方块
    return addRandomTile(addRandomTile(newBoard));
  }
  
  function addRandomTile(board: Array<Array<number>>) {
      const emptyTiles = [];
      for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
              if (board[r][c] === 0) emptyTiles.push([r, c]);
          }
      }
      if (emptyTiles.length === 0) return board;

      const [r, c] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[r][c] = Math.random() < 0.9 ? 2 : 4;
      return board;
  }

  function renderTile(value: number, r: number, c: number) {
      return (
          <View key={`${r}-${c}`} style={[styles.item, { top: 100 + r * (SIZE + 4), left: c * (SIZE+4), backgroundColor: getTileColor(value) }]}>
              <Text style={styles.itemTitle}>{value !== 0 ? value : ''}</Text>
          </View>
      );
  }

  function getTileColor(value: number) {
      switch (value) {
          case 2: return '#eee4da';
          case 4: return '#ede0c8';
          case 8: return '#f2b179';
          case 16: return '#f59563'; // 深橙色
          case 32: return '#f67c5f'; // 更深的橙色
          case 64: return '#f65e3b'; // 暗红色
          case 128: return '#f9e379'; // 黄色
          case 256: return '#f2b179'; // 更深的黄色
          case 512: return '#f4a300'; // 黄金色
          case 1024: return '#edc22f'; // 浅金色
          case 2048: return '#edc22f'; // 金色
          default: return '#cdc1b4'; // 默认颜色
      }
  }
  
  function onGestureEvent(event: any) {
    const { translationX, translationY } = event.nativeEvent;
    
    if (Math.abs(translationX) >= Math.abs(translationY)) {
        // 左右滑动
        if (translationX >= 0) {
            handleMove(Direction.Right);
        } else {
            handleMove(Direction.Left);
        }
    } else {
        // 上下滑动
        if (translationY >= 0) {
            handleMove(Direction.Down);
        } else {
            handleMove(Direction.Up);
        }
    }
  }

  function handleMove(direction: Direction) {
    // 处理移动逻辑
    console.log('移动方向:', direction);
    console.log('原始值：', board);
    /*
      合并逻辑：
      1. 先按照移动方向，将数组移到同一方向
      2. 将相邻两个相同数字进行合并
    */
    var newBoard: Array<Array<number>> = board
    if (direction == Direction.Left) {
      newBoard = moveToLeft(board)
      newBoard = mergeBoardLeft(newBoard)
    } else if (direction == Direction.Right) {
      newBoard = moveToRight(board)
      newBoard = mergeBoardRight(newBoard)
    } else if (direction == Direction.Up) {
      newBoard = transpose(board)
      newBoard = moveToLeft(newBoard)
      newBoard = mergeBoardLeft(newBoard)
      newBoard = transpose(newBoard)
    } else if (direction == Direction.Down) {
      newBoard = transpose(board)
      newBoard = moveToRight(newBoard)
      newBoard = mergeBoardRight(newBoard)
      newBoard = transpose(newBoard)
    }
    setBoard(newBoard)
    console.log('最终值: ', newBoard);
    
    if (hasEmptyCell(newBoard)) {
      newBoard = addRandomTile(newBoard);
    }

    var isGameOver: boolean = false
    if (hasEmptyCell(newBoard)) {

    } else {
      if (canMerge(newBoard)) {
        
      } else {
        console.log('游戏结束');
        isGameOver = true
        Alert.alert(
          'Game Over!',
          '重新开始?',
          [{
            text: 'Cancel',
            style: 'cancel'
          }, {
            text: 'OK',
            onPress: () => setBoard(generateInitialBoard()),
            style: 'default'
          }]
        )
      }
    }

    if (arraysEqual(board, newBoard) && !isGameOver) {
      console.log('两个数组相同，不可滑动');
      Alert.alert('当前方向不可滑动!')
    } else {
      
    }
  }
  
  const arraysEqual = (arr1: Array<Array<number>>, arr2: Array<Array<number>>) => {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((row, rowIndex) => 
      row.length === arr2[rowIndex].length &&
      row.every((item, colIndex) => item === arr2[rowIndex][colIndex])
    );
  };

  const moveToLeft = (board: Array<Array<number>>) => {
    return board.map(row => {
      // 过滤掉大于0的数字
      const nonZero = row.filter(num => num > 0);
      // 生成以0填充的数组
      const zeros = new Array(row.length - nonZero.length).fill(0);
      // 合并非零数字和零数组
      return nonZero.concat(zeros);
    });
  };

  const mergeBoardLeft = (newBoard: Array<Array<number>>) => {
    return newBoard.map(row => mergeRowLeft(row));
  };

  const mergeRowLeft = (row: Array<number>) => {
    let newRow = [0, 0, 0, 0];
    let insertPos = 0; // 插入非零元素的位置

    for (let i = 0; i < row.length; i++) {
      if (row[i] !== 0) {
        if (insertPos > 0 && newRow[insertPos - 1] === row[i]) {
          // 合并相邻相同的元素
          newRow[insertPos - 1] *= 2;
        } else {
          // 将当前元素放置在 insertPos 位置
          newRow[insertPos] = row[i];
          insertPos++;
        }
      }
    }
    return newRow;
  };

  const moveToRight = (board: Array<Array<number>>) => {
    return board.map(row => {
      // 过滤掉大于0的数字
      const nonZero = row.filter(num => num > 0);
      // 生成以0填充的数组
      const zeros = new Array(row.length - nonZero.length).fill(0);
      // 合并非零数字和零数组
      return zeros.concat(nonZero);
    });
  };

  const mergeBoardRight = (newBoard: Array<Array<number>>) => {
    return newBoard.map(row => mergeRowRight(row));
  };
  
  const mergeRowRight = (row: Array<number>) => {
    const result = Array(row.length).fill(0); // 初始化结果数组
    let insertPosition = row.length - 1; // 插入位置指针，从右侧开始
    const merged = Array(row.length).fill(false); // 记录每个位置是否已经合并过

    for (let i = row.length - 1; i >= 0; i--) {
      if (row[i] !== 0) {
        // 判断是否可以合并
        if (insertPosition < row.length - 1 && result[insertPosition + 1] === row[i] && !merged[insertPosition + 1]) {
          // 合并相邻相同值
          result[insertPosition + 1] *= 2;
          merged[insertPosition + 1] = true; // 标记为已合并
        } else {
          // 如果当前位置的值已经非零且不等于当前值，则将当前值放置在新位置
          result[insertPosition] = row[i];
          insertPosition--;
        }
      }
    }
    return result;
  };

  const transpose = (matrix: Array<Array<number>>) => {
  // 通过 map 和 reduce 函数对矩阵进行转置
    return matrix[0].map((_, colIndex) => 
      matrix.map(row => row[colIndex])
    );
  };


  // 检查是否还有空白格子
  const hasEmptyCell = (board: Array<Array<number>>) => {
    return board.some(row => row.includes(0));
  };

  const canMerge = (board: Array<Array<number>>) => {
    const size = board.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const current = board[i][j];
        if (current === 0) continue;

        // Check right
        if (j < size - 1 && current === board[i][j + 1]) return true;

        // Check down
        if (i < size - 1 && current === board[i + 1][j]) return true;
      }
    }
    return false;
  };

  return (
    <PanGestureHandler onEnded={onGestureEvent}>
      <View style={styles.container}>
        {board.flat().map((value: any, index: number) => renderTile(value, Math.floor(index / 4), index % 4))}
      </View>
    </PanGestureHandler>
  );
};

const Game = ({ navigation }: any): React.JSX.Element => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const route = useRoute();

		
  return (
    <SafeAreaView style={backgroundStyle}>
      <GameScreen navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
    // backgroundColor: '#faf8ef',
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // padding: 100,
  },
  item: {
    width: SIZE,
    height: SIZE,
    borderRadius: 5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#776e65',
  },
});

export default module.exports = Game;