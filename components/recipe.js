import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import Loading from './Loading';

const recipe = ({categories ,meals}) => {
  return (
    <View style={{marginTop:10}}>
      <Text style={{fontSize:30,fontWeight:"bold"}}>Recipes</Text>
      <View>
        {
            categories.length==0 || meals.length==0 ? 
            <Loading size={100}/>
            :(
                <MasonryList
                data={meals}
               keyExtractor={(item) => item.idMeal}
              numColumns={2}
               showsVerticalScrollIndicator={false}
               renderItem={({item,i}) => <RecipeCard index={i} item={item} />}
            //    refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
                  />
            )
        }
    

      </View>
    </View>
  )
}


const RecipeCard=({item,index})=>{
    let isEven= index%2==0;
    return (
        <View>
            <Pressable style={{widht:"100%",flex:1,justifyContent:"center",margin:5}}>
              <Image style={{widht:"100%",height: index%3==0 ? 400 :200,borderRadius:36}} source={{uri:item.strMealThumb}} />
              <Text style={{fontSize:15,fontWeight:"bold"}}>
                 {
                    item.strMeal.length>20?item.strMeal.slice(0,15)+"...":item.strMeal
                 }
                </Text>
            </Pressable>
        </View>

    )

}

export default recipe

