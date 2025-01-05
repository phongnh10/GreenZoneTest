import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Thêm icon
import colors from '../constants/color';
import GLOBAL_KEYS from '../constants/globalKeys';
import CustomSearchBar from './inputs/CustomSearchBar';

const TestComponent = () => {
  const [selectedNotes, setSelectedNotes] = useState([]); // Danh sách các note được chọn
  const [searchQuery, setSearchQuery] = useState(''); // Nội dung tìm kiếm

  const onToggleNote = (note) => {
    if (selectedNotes.includes(note)) {
      // Nếu đã được chọn, bỏ chọn
      setSelectedNotes(selectedNotes.filter((item) => item !== note));
    } else {
      // Nếu chưa được chọn, thêm vào danh sách
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Lọc danh sách theo nội dung tìm kiếm

  return (
    <View style={styles.container}>
      {/* SearchBar và Bản đồ */}
      <View style={styles.searchBarContainer}>
        <CustomSearchBar
          placeholder="Tìm kiếm ghi chú..."
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClearIconPress={() => setSearchQuery('')}
          leftIcon="magnify"
          rightIcon="close"
          style={{ flex: 1, marginRight: 16, elevation: 3 }}
        />
        {/* Text Bản đồ và Icon Map */}
        <View style={styles.mapContainer}>
          <Icon name="map-marker" size={24} color={colors.primary} style={styles.mapIcon} />
          <Text style={styles.mapText}>Bản đồ</Text>

        </View>

        {/* CustomSearchBar */}

      </View>

      {/* Danh sách ghi chú */}
      <NotesList
        selectedNotes={selectedNotes}
        onToggleNote={onToggleNote}
        notes={filteredNotes} // Chỉ hiển thị các ghi chú đã lọc
      />
    </View>
  );
};

const NotesList = ({ selectedNotes, onToggleNote, notes, title = "Danh sách ghi chú" }) => {
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 16,
    color: colors.primary,
    marginRight: 8,
    fontWeight: 'bold',
  },
  mapIcon: {
    marginRight: 8,
  },
  noteView: {
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
    elevation: 3,
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
