import { Issue } from '../../config/Axios';
import { MainRouteConfigMap } from '../../config/MainRouteConfigMap';
import { Text, TouchableOpacity } from 'react-native';
import { listScreenStyles } from './listSceenStyles';
import React from 'react';
import { ListScreenProps } from './ListScreen';

const openDetailScreen = (item: Issue, params: ListScreenProps) => {
  params.navigation.navigate(MainRouteConfigMap.Detail.name, {
    id: item.id,
    title: item.title,
    state: item.state,
    body: item.body,
  });
};
export const ListItem = (item: Issue, params: ListScreenProps) => (
  <TouchableOpacity style={listScreenStyles.item} onPress={() => openDetailScreen(item, params)}>
    <Text style={listScreenStyles.itemText}>{item.title}</Text>
  </TouchableOpacity>
);
