import React, { Component } from 'react';
import { ScrollView, TouchableOpacity} from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

class UserDetail extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };
  render() {
    const { picture, name, email, site, login, position, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
          <Button
              title="Link Github"
              buttonStyle={{ marginTop: 20 }}
              onPress={this.handleSettingsPress}
          />

          <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Website"
            rightTitle={site}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Position"
            rightTitle={position}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
