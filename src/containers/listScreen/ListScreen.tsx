import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getIssuesAction } from '../../redux/actions/actions';
import { RootState } from '../../redux/reducers/reducers';
import { listScreenStyles } from './listSceenStyles';
import { ListItem } from './ListItem';
import { ListFooter } from './ListFooter';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface ListScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
export const ListScreen = (params: ListScreenProps) => {
  const { issues, pending, error, page } = useSelector((state: RootState) => state.issues);
  const dispatch = useDispatch();

  useEffect(() => {
    getIssues();
  }, []);

  function getIssues() {
    dispatch(getIssuesAction(page));
  }

  return (
    <View style={listScreenStyles.container}>
      <FlatList
        data={issues}
        renderItem={({ item }) => ListItem(item, params)}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={ListFooter(getIssues, pending, error)}
        onEndReached={() => {
          if (!pending) getIssues();
        }}
      />
    </View>
  );
};
