import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View, ViewStyle } from "react-native";
import { getFromAsyncStorage, saveToAsyncStorage } from "../../lib/AsyncStorageHelper";
import { detailScreenStyles } from "./detailScreenStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Strings } from "../../resources/Strings";

type DetailScreenProps = {
  Issue: {
    id: number
    title: string
    state: string
    body: string
  };
};

type Props = NativeStackScreenProps<DetailScreenProps, "Issue">;

export const DetailScreen = (props: Props) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    getComment();
  }, []);

  async function getComment() {
    setComment(await getFromAsyncStorage(props.route.params.id.toString()));
  }

  async function saveComment(text: string) {
    setComment(text);
    await saveToAsyncStorage(props.route.params.id.toString(), text);
  }

  const textContainer = (style: ViewStyle, title: string, body: string) =>
    <View style={style}>
      <Text style={detailScreenStyles.textTitle}>
        {title}
      </Text>
      <Text style={detailScreenStyles.text}>{body}</Text>
    </View>;

  return (
    <View style={detailScreenStyles.container}>
      <ScrollView>
        <View>
          {textContainer(detailScreenStyles.textContainer, Strings.title, props.route.params.title)}
          {textContainer(detailScreenStyles.textContainer, Strings.status, props.route.params.state)}
          {textContainer({}, Strings.description, props.route.params.body)}
        </View>
      </ScrollView>
      <TextInput
        placeholder={Strings.comment}
        onChangeText={text => saveComment(text)}
        value={comment}
        multiline={true}
        style={detailScreenStyles.commentInput}
      /></View>
  );
};
