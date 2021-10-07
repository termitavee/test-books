import React, { FC, useEffect, useState } from 'react';
import { GestureResponderEvent, Pressable, StatusBar, StyleSheet, View } from 'react-native';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { TextInput, useTheme } from 'react-native-paper';

// import NoAlcoholSVG from 'src/assets/no-alcohol.svg';

const styles = StyleSheet.create({
  inputCover: {
    flexDirection: 'row',
  },
  input: {},
  touchFilter: {
    position: 'absolute',
    right: 0,
    height: 48,
    width: 48,
    padding: 13,
  },
});

const SearchInput: FC<Omit<TextInputProps, 'theme'>> = ({ onChangeText, value = '', ...props }) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState(value);

  const onChange = (newVal: GestureResponderEvent | string) => {
    const parsed = typeof newVal === 'string' ? newVal : '';
    if (onChangeText) onChangeText(parsed);
    setInputValue(parsed);
  };
  useEffect(() => {
    if (value !== inputValue) setInputValue(value);
  }, [value]);

  return (
    <View style={[styles.inputCover]}>
      <TextInput
        theme={theme}
        onChangeText={onChange}
        value={inputValue}
        style={styles.input}
        placeholder="filter"
        underlineColorAndroid="transparent"
        {...props}
      />
      <Pressable style={styles.touchFilter} onPress={onChange}>
        {/* <Image source={sortBy ? filterImage : noFilterImage} /> */}
      </Pressable>
    </View>
  );
};

export default SearchInput;
