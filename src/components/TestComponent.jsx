import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; // Chiều rộng màn hình

const TestComponent = () => {
  return (
    <View style={styles.container}>
      <NotesView />
    </View>
  );
};

const NotesView = () => {
  return (
    <View style={styles.noteView}>
      <Text style={styles.title}>Lưu ý cho món</Text>
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
    backgroundColor: '#ffffff',
    padding: 16,
  },
  noteView: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
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
    padding: 10,
    margin: 4,
    borderRadius: 8,
    elevation: 2, // Hiệu ứng đổ bóng trên Android
    shadowColor: '#000', // Hiệu ứng đổ bóng trên iOS
    shadowOffset: { width: 0, height: 2 },
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
