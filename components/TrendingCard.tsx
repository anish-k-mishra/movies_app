import {View, Text, ViewStyle, TouchableOpacity, Image} from 'react-native';
import React from "react";
import {Link} from "expo-router";

const TrendingCard = ({movie:{movie_id, title, poster_url}, index}: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5 ">
                <Image
                    source={{uri: poster_url}}
                    className="w-32 h-48 rounded-lg"
                    resizeMode="cover"
                />
                <View className="absoulte bottom-9 -left-3.5 px-2 py-1 rounded-full" >

                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard;