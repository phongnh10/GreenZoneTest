import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../constants/color';
import GLOBAL_KEYS from '../constants/globalKeys';


const TestComponent = () => {
  const [selectedNotes, setSelectedNotes] = useState([]); // Danh sách các note được chọn

  const onToggleNote = (note) => {
    if (selectedNotes.includes(note)) {
      // Nếu đã được chọn, bỏ chọn
      setSelectedNotes(selectedNotes.filter((item) => item !== note));
    } else {
      // Nếu chưa được chọn, thêm vào danh sách
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  return (
    <View style={styles.container}>
      <NotesList
        selectedNotes={selectedNotes}
        onToggleNote={onToggleNote}
      />
    </View>
  );
};

const NotesList = ({ selectedNotes, onToggleNote, title = "Default title" }) => {
  return (
    <View style={styles.noteView}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={notes}
        numColumns={4} // 4 cột
        keyExtractor={(item, index) => index.toString()} // Khóa duy nhất
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.noteItem,
              selectedNotes.includes(item) && { backgroundColor: colors.milk }, // Đổi màu nếu được chọn
            ]}
            onPress={() => onToggleNote(item)} // Gọi hàm onToggleNote khi bấm
          >
            <Text style={styles.noteText}>{item}</Text>
          </TouchableOpacity>
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
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
  },
  noteView: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    gap: 4,
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
  title: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    marginBottom: GLOBAL_KEYS.PADDING_DEFAULT,
    color: colors.black,
  },
  noteItem: {
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    paddingVertical: 4,
    margin: 4,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    elevation: 3, // Hiệu ứng đổ bóng trên Android
    shadowColor: colors.black, // Hiệu ứng đổ bóng trên iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noteText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    color: colors.black,
    textAlign: 'center',
  },
});

export default TestComponent;
