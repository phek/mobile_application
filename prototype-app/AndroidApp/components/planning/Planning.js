import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Modal} from 'react-native';
import {Header, CheckBox, List, ListItem, FormLabel, FormInput, Button} from 'react-native-elements'

export default class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            itemName: "",
            modalVisible: false,
            list: [
                {
                    id: this.generateRandomID(),
                    title: 'Project'
                },
                {
                    id: this.generateRandomID(),
                    title: 'Learn Spanish'
                },
                {
                    id: this.generateRandomID(),
                    title: 'Training'
                },
                {
                    id: this.generateRandomID(),
                    title: 'Homework'
                }
            ]
        }
    }

    generateRandomID = () => '_' + Math.random().toString(36).substr(2, 9);

    renderRow = ({item}) => (
        <ListItem
            key={item.id}
            title={item.title}
            rightIcon={{name: 'cross', type: 'entypo'}}
            leftIcon={{name: 'archive', type: 'entypo'}}
            onPressRightIcon={() => this.removeItem(item.id)}
        />
    );

    addItem() {
        let name;
        if (this.state.itemName === "") {
            const items = [
                'Project',
                'Learn Spanish',
                'Training',
                'Homework'
            ];

            name = items[Math.floor(Math.random() * items.length)];
        } else {
            name = this.state.itemName;
        }
        this.setState({
            list: this.state.list.concat({
                id: this.generateRandomID(),
                title: name
            })
        });
        this.input.clearText();
        this.setModalVisible(false);
    }

    removeItem(id) {
        this.setState({
            list: this.state.list.filter(function (item) {
                return item.id !== id
            })
        })
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{height: 51, borderBottomColor: '#9b59b6', borderBottomWidth: 2}}
                    backgroundColor="#333"
                    centerComponent={{text: 'PLANNING', style: {color: '#fff'}}}
                />
                <Text style={styles.headerText}>Priorities</Text>
                <List>
                    <FlatList
                        data={this.state.list}
                        extraData={this.state}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </List>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                    <FormLabel>New Priority:</FormLabel>
                    <FormInput ref={input => this.input = input}
                               onChangeText={(text) => this.setState({itemName: text})}/>

                    <Button
                        title='Add priority'
                        onPress={() => this.addItem()}
                    />
                </Modal>
                <CheckBox
                    center
                    title='Add priority'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    containerStyle={styles.addButton}
                    checked={this.state.checked}
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#fff'
    },
    headerText: {
        color: '#333',
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});