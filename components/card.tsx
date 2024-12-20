import { Linking, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '../theme';

type CardProps = {
    image: string;
    title: string;
    date: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({image, title, date, description, link}) => {
    const handlePress = () => {
        Linking.openURL(link);
    }
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.linkText}>Learn More &gt;</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'flex-start',
        backgroundColor: theme.colors.darkGrey,
        borderRadius: 10,
        padding: 16,
        width: 300,
        marginVertical: 16,
    },
    image: {
        width: 40,
        height: 40,
    },
    title: {
        color: theme.colors.lightGrey,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    date: {
        fontSize: 16,
        marginBottom: 8,
        color: theme.colors.red,
    },
    description: {
        fontSize: 16,
        marginVertical: 8,
        color: theme.colors.lightGrey50,
    },
    linkText: {
        color: theme.colors.yellow,
        fontSize: 16,
        fontWeight: 'bold',
    }
});