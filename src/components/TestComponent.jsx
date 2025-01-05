import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import colors from '../constants/color';

const width = Dimensions.get('window').width; // Chiều rộng màn hình

const TestComponent = () => {
  return (
    <View style={styles.container}>
      <NotesView />
    </View>
  );
};

const NotesView = ({
  title = "Default title",
}) => {
  return (
    <View style={styles.noteView}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={notes}
        numColumns={4} // 4 cột
        keyExtractor={(item, index) => index.toString()} // Khóa duy nhất
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item}</Text>
          </View>
        )}
        nestedScrollEnabled={true} // Cho phép cuộn bên trong FlatList
      />
    </View>
  );
};

const notes = ['Ít cafe', 'Đậm trà', 'Không kem', 'Nhiều cafe', 'Ít sữa', 'Nhiều sữa', 'Nhiều kem'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  noteView: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    gap: 4,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  noteItem: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 4,
    paddingVertical: 4,
    margin: 4,
    borderRadius: 6,
    elevation: 4, // Hiệu ứng đổ bóng trên Android
    shadowColor: colors.black, // Hiệu ứng đổ bóng trên iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
});

export default TestComponent;
