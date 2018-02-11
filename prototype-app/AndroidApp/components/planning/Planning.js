import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, CheckBox, List, ListItem} from 'react-native-elements'

export default class Planning extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }

    list = [
        {
            title: 'Work on Website'
        },
        {
            title: 'Learn Spanish'
        }
    ];

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="#333"
                    centerComponent={{text: 'Planning', style: {color: '#fff', fontSize: 18}}}
                />
                <Text style={styles.headerText}>Priorities</Text>
                <List>
                    {
                        this.list.map((item, i) => (

                            <ListItem
                                key={i}
                                title={item.title}
                                rightIcon={{name:'cross', type: 'entypo'}}
                                leftIcon={{name: 'archive', type: 'entypo'}}
                            />
                        ))}
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
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});