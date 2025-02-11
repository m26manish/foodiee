import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const categories = ({categories, activecategory ,handlecategory}) => {
  return (
   <View>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:10}}

    >
        {
        categories.map((category, index) => {
            let isActive=category.strCategory===activecategory;
           
            return (
                <TouchableOpacity onPress={()=>handlecategory(category.strCategory)} key={index} style={{flex:1 , alignItems:"center",gap:10}}>
                 <View style={{borderRadius:50,marginTop:10,marginRight:10}}>
                <Image source={{uri:category.strCategoryThumb}} style={{width:70,height:70,borderRadius:50, backgroundColor: isActive?"#cd5c5c":"white"}} />
                 </View>
                 <Text style={{fontSize:10,fontWeight:"bold"}}>
                    {category.strCategory} 
                 </Text>
                </TouchableOpacity>


            )
  })  
  }


        </ScrollView>

   </View>
  )
}

export default categories

const styles = StyleSheet.create({})