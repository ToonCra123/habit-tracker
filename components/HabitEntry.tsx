import { View, TextInput, Text, Button } from "react-native";
import { useState } from "react";

type HabitEntryProps = {
    changeText: any;
    currList: any;
};

let HabitEntry = (props: HabitEntryProps) => {
    let [habit, setHabit] = useState<string>("");

    let onButtonPress = () => {
        props.changeText([...props.currList, { 
            id: props.currList.length, 
            habit: habit,
            date: new Date()
        }]);

        setHabit("");
    };

    return (
        <View style={HabitEntryStyles.habitEntry}>
            <TextInput
                placeholder="Type Here..."
                style={HabitEntryStyles.textInput}
                value={habit}
                onChangeText={(text) => setHabit(text)}
                ></TextInput>
            <View style={HabitEntryStyles.addBtn}>
                <Button title="+" onPress={onButtonPress} />
            </View>
        </View>
    );
};

let HabitEntryStyles = {
    habitEntry: {
        padding: 10,
        flexDirection: "row" as "row",
    },
    textInput: {
        padding: 10,
        backgroundColor: "#DCD7C9",
        flex: .8,
        fontSize: 20,
        borderRadius: 10,
    },
    addBtn: {
        marginLeft: 30,
        flex: .2,
        backgroundColor: "#DCD7C9",
        borderRadius: 30,
    }
};

export default HabitEntry;