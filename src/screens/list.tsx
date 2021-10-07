import React, { FC, useEffect, useRef, useState } from 'react';

import { FlatList, ListRenderItem, Pressable, StyleSheet, useWindowDimensions, Image, View } from 'react-native';
import FontAwesome5icons from 'react-native-vector-icons/FontAwesome5';

import BookApi from 'src/services/fetch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchInput from 'src/components/search-input';
import usePrevious from 'src/hooks/use-previous';
import Text from 'src/components/text/text';
import useStateRef from 'src/hooks/use-state-ref';
import Loader from 'src/components/loader';
import { Appbar, Snackbar } from 'react-native-paper';

const styles = StyleSheet.create({
  inputCover: {
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 50,
  },
  header: { height: 70 },
  input: { width: '100%' },
  touchFilter: {
    position: 'absolute',
    right: 0,
    height: 48,
    width: 48,
    padding: 13,
  },
  list: { marginHorizontal: 10 },
  item: {
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  noImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alcoholIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 25,
    width: 25,
  },
  content: {
    padding: 10,
    paddingTop: 5,
  },
});

const filterList = (list: IBook[] = [], name?: string) => {
  if (!name) return list;
  const parsedSearch = name.toLocaleLowerCase();
  return list.filter(book => book.title.toLowerCase().includes(parsedSearch));
};

const App: FC<any> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const safeAreas = useSafeAreaInsets();

  const [bookList, setBookList] = useState<IBook[]>([]);
  const [filteredList, setFilteredList] = useState(bookList);
  const retriesRef = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [inputValue, setInputValue, inputRef] = useStateRef('');
  const queryDelay = useRef<NodeJS.Timeout>();
  const prevInput = usePrevious(inputValue);

  const reloadFilteredContent = (res = bookList) => {
    setFilteredList(filterList(res, inputValue));
  };

  const reloadContent = async () => {
    const charSearch = inputRef.current;
    const checkedRetries = charSearch === (prevInput || '') ? retriesRef.current : 0;

    if (charSearch.length && (charSearch !== inputValue || (!isLoading && !bookList.length))) {
      setIsLoading(true);
      const res = (await BookApi.search(charSearch)) || [];
      if (typeof res === 'string') {
        // error, check if retry again
        if (checkedRetries < 3) {
          reloadContent();
          retriesRef.current = checkedRetries + 1;
        } else {
          setModalMessage('Error finding books, try again');
          setIsLoading(false);
          retriesRef.current = 0;
        }
      } else {
        retriesRef.current = 0;
        setBookList(res);
        reloadFilteredContent();
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // update list when input changes
    // only query if search is bigger or if no items loaded
    if (inputValue.length && (inputValue.length > prevInput.length || !bookList.length)) {
      if (queryDelay.current) clearTimeout(queryDelay.current);
      queryDelay.current = setTimeout(() => reloadContent(), 500);
    }
  }, [inputValue]);

  useEffect(reloadFilteredContent, [inputValue, bookList.length]);

  const size = width / 2 - 32;
  const renderItem: ListRenderItem<IBook> = ({ item }) => {
    return (
      <Pressable
        style={[styles.item, { width: size + 2 }]}
        onPress={() => navigation.navigate('DetailsScreen', { item })}
      >
        {item?.isbn && item?.isbn[0] ? (
          <Image
            style={[styles.image, { height: size, width: size }]}
            source={{ uri: `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg` }}
          />
        ) : (
          <View style={[styles.noImage, { height: size, width: size }]}>
            <FontAwesome5icons name="book" size={size / 2} />
          </View>
        )}
        <View style={styles.content}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <Appbar.Header style={styles.header}>
        <SearchInput style={styles.input} onChangeText={setInputValue} value={inputValue} />
      </Appbar.Header>
      {isLoading && <Loader />}
      <FlatList
        style={[styles.list, { paddingBottom: safeAreas.bottom }]}
        data={filteredList}
        numColumns={2}
        renderItem={renderItem}
      />
      <Snackbar visible={modalMessage !== ''} onDismiss={() => setModalMessage('')}>
        {modalMessage}
      </Snackbar>
    </View>
  );
};

export default App;
