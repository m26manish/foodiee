import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BellAlertIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon} from "react-native-heroicons/solid"
import Categories from '../components/categories'
import axios from 'axios'
import Recipe from '../components/recipe'



const HomeScreen = () => {
  const [activecategory,setActivecategory]=useState('Beef');
  const [categories,setcategori]=useState([]);
  const [meals,setMeals]=useState([]);

  useEffect (()=>{
    getCategories();
    getRecipes();
  },[])

  const handlecategory = category =>{
    setActivecategory(category);
    getRecipes(category);
    setMeals([])
  }

  const getCategories=async ()=>{
    try{
      const response= await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      if(response && response.data){
        setcategori(response.data.categories)
      }
    }
    catch (error){
      console.log(error)
    }
    

  }
  const getRecipes=async (category='Beef')=>{
    try{
      const response= await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
       
      if(response && response.data){
        setMeals(response.data.meals)
      }
    }
    catch (error){
      console.log(error)
    }
    

  }




  return (
    <View style={{flex:1,backgroundColor:"#faebd7"}}>
      <StatusBar style="light"/>
       <ScrollView
       contentContainerStyle={{padding:15}}
       showsVerticalScrollIndicator={false}
       style={{paddingTop:5}}
       
       >
          <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:2}}>
            <Image source={require('../assets/av1.png')}  style={{height:40,width:40}}/>
            <BellAlertIcon size={30} color="#cd5c5c"/>
            </View>
            <View>
                  <Text style={{fontSize:14,fontWeight:"medium",}}> hello Msh!</Text>
              <View>
                  <Text style={{fontSize:25,fontWeight:"bold"}}>Stay At Home, </Text>
                  <Text style={{fontSize:30,fontWeight:"bold"}}>Order Your <Text style={{color:"#cd5c5c",fontWeight:"bold"}}>Recipe</Text></Text>
              </View>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:15,backgroundColor:"gray",borderRadius:30}}>
              <TextInput
                placeholder='search your REcipe'
                style={{padding:10,fontSize:15,marginHorizontal:5}}
              />
              <View style={{margin:2}}>
                <MagnifyingGlassCircleIcon size={35} />
              </View>
            </View>
            
             <View>
             {categories.length>0 &&  <Categories categories={categories} activecategory={activecategory} handlecategory={handlecategory} />}
             </View>

       <View>
        <Recipe  categories={categories} meals={meals}/>
       </View>
            </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})