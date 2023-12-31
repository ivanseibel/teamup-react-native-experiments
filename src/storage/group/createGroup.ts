import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { GROUP_COLLECTION } from '@storage/storageConfig'; 
import { getAllGroups } from './getAllGroups';

export type Group = {
  id: string;
  name: string;
}

export const createGroup = async (groupName: string) => {
  const id = new Date().getTime().toString();

  try {
    const groups = await getAllGroups();
    
    if (groups) {
      const parsedGroups = groups;
  
      if (parsedGroups.find((g: Group) => g.name === groupName)) {
        return Alert.alert('Ooops!', 'This group already exists.');
      }
  
      const group: Group = {
        id,
        name: groupName
      };
  
      const newGroups = [...parsedGroups, group];
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
    } else {
      const group: Group = {
        id,
        name: groupName
      };
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([group]));
    }

    return id;
  } catch (err) {
    throw err;
  }
};