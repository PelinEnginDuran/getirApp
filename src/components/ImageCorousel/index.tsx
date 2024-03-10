import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function Index({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<string>>(null);

  const renderItem = ({ item }: { item: string }) => (
    <Image
      source={{ uri: item }}
      style={styles.image}
    />
  );

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        style={styles.flatList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width*0.5}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        ref={flatListRef}
        pagingEnabled
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === currentIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: height * 0.25,
  },
  flatList: {
    width: width * 0.5,
    height: height * 0.25,
  },
  image: {
    width: width * 0.5,
    height: height * 0.25,
    resizeMode: "stretch",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#595959",
    marginHorizontal: 8,
  },
});
