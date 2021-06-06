import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {Color} from '../values/color';
import CreateButton from './createButton';

const TransactionsList = () => {
  const data = [];

  const noResults = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          marginTop: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Color.white}}>No accounts yet!!</Text>
        <CreateButton />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: Color.themeBlack,
          borderRadius: 10,
          marginBottom: 5,
        }}
        key={item.username + index}>
        <Avatar
          rounded
          title="MD"
          titleStyle={{color: Color.themeBlack}}
          containerStyle={{backgroundColor: Color.orange, padding: 6}}
        />
        <ListItem.Content>
          <ListItem.Title style={{color: Color.white}}>
            {item.username}
          </ListItem.Title>
          <ListItem.Subtitle style={{color: Color.darkGrey}}>
            {item.amount}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={{marginTop: 20}}>
      <FlatList
        style={{backgroundColor: Color.themeSilverGray}}
        scrollEnabled
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={noResults}
      />
    </View>
  );
};

export default TransactionsList;
