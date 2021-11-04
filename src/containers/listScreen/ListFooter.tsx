import { Text, TouchableOpacity, View } from 'react-native';
import { listScreenStyles } from './listSceenStyles';
import * as Progress from 'react-native-progress';
import { Strings } from '../../resources/Strings';
import React from 'react';

export const ListFooter = (getIssues: () => void, pending: boolean, error: Error | string | null) =>
  pending ? (
    <View style={listScreenStyles.footer}>
      <Progress.Circle size={40} indeterminate={true} />
    </View>
  ) : error ? (
    <TouchableOpacity onPress={() => getIssues()}>
      <Text>{Strings.retry}</Text>
    </TouchableOpacity>
  ) : null;
