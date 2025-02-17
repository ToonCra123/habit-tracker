import { View, Text, FlatList } from "react-native";
import { Habit } from "../types";

// TypeScript thingy
type HabitListProps = {
    habits: Habit[];
};

let HabitList = (props: HabitListProps) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
            data={props.habits}
            renderItem={({ item }) => { return (
                <View style={HabitListStyles.habitList}>
                    <Text style={HabitListStyles.habitText}>{item.habit}</Text>
                    <View>
                        <Text style={HabitListStyles.dateText}>{item.date.toLocaleTimeString()}</Text>
                        <Text style={HabitListStyles.dateText}>{item.date.toLocaleDateString()}</Text>
                    </View>
                </View>
            )}}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

let HabitListStyles = {
    habitList: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#A27B5C",
        flexDirection: "row" as "row",
        justifyContent: "space-between" as "space-between",
    },
    habitText: {
        color: "#DCD7C9",
        padding: 10,
        flex: 1,
        fontSize: 20,
    },
    dateText: {
        color: "#DCD7C9",
        padding: 10,
        flex: 1,
        fontSize: 10,
        textAlign: "right" as "right",
    }
};

export default HabitList;