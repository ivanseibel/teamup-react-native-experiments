import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { GROUP_COLLECTION } from '@storage/storageConfig'; 
import { getAllGroups } from './getAllGroups';
import { AppError } from '@utils/AppError';
import { NewGroup } from '../../screens/NewGroup/index';

export type Group = {
  id: string;
  name: string;
}

export const createGroup = async (groupName: string) => {
  const newGroup: Group = {
    id: new Date().getTime().toString(),
    name: groupName.trim()
  };

  if (!newGroup.name) {
    throw new AppError('Group name is required');
  }
  
  try {
    const groups = await getAllGroups();
    
    if (groups) {
      const parsedGroups = groups;
  
      if (parsedGroups.find((g: Group) => g.name === newGroup.name)) {
        throw new AppError('Group already exists');
      }
  
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...parsedGroups, newGroup]));
    } else {
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([newGroup]));
    }

    return newGroup;
  } catch (err) {
    throw err;
  }
};