import React, { FC, useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Appbar, DataTable } from 'react-native-paper';
import Loader from 'src/components/loader';

import Paragraph from 'src/components/text/paragraph';
import Title from 'src/components/text/title';
import BookApi from 'src/services/fetch';
import { DeviceUtils } from 'src/utils/device';

const styles = StyleSheet.create({
  topContent: { flexDirection: 'row' },
  topRightContent: { flex: 1 },
  backIconCover: {
    borderRadius: 50,
    padding: 10,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555',
    position: 'absolute',
    marginLeft: 20,
  },
  backIcon: { tintColor: 'white' },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  row: { flexDirection: 'row' },
  title: {
    marginTop: 8,
    fontSize: 18,
  },
  description: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '400',
  },
});

const RenderRow = ({ title, value }: { title: string; value: string }) => (
  <DataTable.Row>
    <DataTable.Cell>{title}</DataTable.Cell>
    <DataTable.Cell onPress={() => DeviceUtils.openUrl(value)}>{value}</DataTable.Cell>
  </DataTable.Row>
);

interface IBookState {
  key: string;
  uri?: string;
  title: string;
  author?: string;
  publishDate?: string;
  description: string;
  links: { title: string; url: string }[];
  subtitle: string;
  languages: string[];
}

const BookDetails: FC<any> = ({ navigation, route }) => {
  const item: IBook = useRef(route.params?.item).current;
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IBookState>({
    key: item.key,
    uri: item?.isbn && item?.isbn[0] ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg` : undefined,
    title: item.title,
    author: item.author_name.join(' '),
    publishDate: item?.publish_date?.[item.publish_date?.length - 1] || undefined,
    description: '',
    links: [],
    subtitle: '',
    languages: [],
  });

  const size = width / 2;
  useEffect(() => {
    setIsLoading(true);
    BookApi.getBook(item.key)
      .then(res => {
        setData({
          ...data,
          description: res.description.value,
          links: res?.links.map(l => ({ title: l.title, url: l.url })) || [],
          subtitle: res.subtitle,
        });
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={data.title} subtitle={data.author} />
      </Appbar.Header>
      <View style={styles.topContent}>
        {!!data.uri && (
          <Image resizeMode="contain" style={[{ height: size, width: size }]} source={{ uri: data.uri }} />
        )}
        <View style={styles.topRightContent}>
          {!!data.subtitle && <Paragraph>"{data.subtitle}"</Paragraph>}
          {!!data.publishDate && (
            <Paragraph>
              First published in <Text>{data.publishDate}</Text>
            </Paragraph>
          )}
        </View>
      </View>
      <Title>Summary</Title>
      {!!data.description && <Paragraph>{data.description}</Paragraph>}

      {isLoading && <Loader />}

      <Title>Links</Title>
      {!!data.links && data.links.length > 0 && (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>type</DataTable.Title>
            <DataTable.Title>url</DataTable.Title>
          </DataTable.Header>
          {data.links.map(l => (
            <RenderRow key={l.title} title={l.title} value={l.url} />
          ))}
        </DataTable>
      )}
    </ScrollView>
  );
};

export default BookDetails;
