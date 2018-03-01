import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header, CheckBox, List, ListItem} from 'react-native-elements'

export default class Planning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
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
        const items = [
            'Project',
            'Learn Spanish',
            'Training',
            'Homework'
        ];

        const item = items[Math.floor(Math.random() * items.length)];
        this.setState({
            list: this.state.list.concat({
                id: this.generateRandomID(),
                title: item
            })
        });
    }

    removeItem(id) {
        this.setState({
            list: this.state.list.filter(function (item) {
                return item.id !== id
            })
        })
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
                <CheckBox
                    center
                    title='Add item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    containerStyle={styles.addButton}
                    checked={this.state.checked}
                    onPress={() => this.addItem()}
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