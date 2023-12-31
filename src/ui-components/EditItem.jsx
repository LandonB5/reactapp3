/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { API } from "aws-amplify";
import { updateNote } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function EditItem(props) {
  const { edt, overrides, ...rest } = props;
  const [
    textFieldThreeNineFourFiveEightSevenValue,
    setTextFieldThreeNineFourFiveEightSevenValue,
  ] = useState("");
  const [
    textFieldThreeNineFourFiveEightNineValue,
    setTextFieldThreeNineFourFiveEightNineValue,
  ] = useState("");
  const [
    textFieldThreeNineFourFiveEightEightValue,
    setTextFieldThreeNineFourFiveEightEightValue,
  ] = useState("");
  const buttonOnMouseDown = async () => {
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineFourFiveEightSevenValue,
          description: textFieldThreeNineFourFiveEightNineValue,
          image: textFieldThreeNineFourFiveEightEightValue,
          id: edt?.id,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  return (
    <View
      width="390px"
      height="520px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditItem")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        label="Name"
        position="absolute"
        top="123px"
        left="43px"
        placeholder={edt?.name}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineFourFiveEightSevenValue}
        onChange={(event) => {
          setTextFieldThreeNineFourFiveEightSevenValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField394587")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Image"
        position="absolute"
        top="309px"
        left="44px"
        placeholder={edt?.image}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineFourFiveEightEightValue}
        onChange={(event) => {
          setTextFieldThreeNineFourFiveEightEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField394588")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Description"
        position="absolute"
        top="216px"
        left="43px"
        placeholder={edt?.description}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineFourFiveEightNineValue}
        onChange={(event) => {
          setTextFieldThreeNineFourFiveEightNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField394589")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="419px"
        left="149px"
        backgroundColor="rgba(11,153,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Finish"
        onMouseDown={() => {
          buttonOnMouseDown();
        }}
        onMouseUp={() => {
          buttonOnMouseUp();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Istok Web"
        fontSize="36px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="51.8203125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="392px"
        height="71px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31px"
        left="-2px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit Item"
        {...getOverrideProps(overrides, "Edit Item")}
      ></Text>
    </View>
  );
}
