import React from "react";
import {Text, View,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen =() =>{
    return(
        <View style = {{
            height: '100%',
            backgroundColor: 'white', 
            justifyContent: 'center',
            alignItems:'center',
        }}>

            <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 880, color:'black'}}>My Book List</Text>
            <Text style ={{fontSize:40, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 800, color:'black'}}>Home</Text>
            
            
            <Text style={{fontSize:30, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 680, color:'black'}}>You have Recently Read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 640, color:'black'}}>Tile: {title}</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 610, color:'black'}}>Author: {author}</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 580, color:'black'}}>Genre: {genre}</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 550, color:'black'}}>Number of pages: {pages}</Text>
            

            
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 400, color:'black'}}>Total number of Pages read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 350, color:'black'}}>{pages}</Text>
           

            
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 250, color:'black'}}>Average number of pages read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 200, color:'black'}}>{average}</Text>
            

            <TouchableOpacity style ={styles.addButton}>
                <Text style={styles.buttonText}>+ Add Book</Text>
                
            </TouchableOpacity>
        </View>
        
    );
};

const Book =() =>{
    const Detail = () => Alert.alert("navigate")
   
       const [title, setTitle] = React.useState('');
       const saveTitle = async () => {
           try {
               AsyncStorage.setItem('Title', title);
           } catch (error) {
               console.log(error);
           }
   
           try {
               AsyncStorage.setItem('Author', author);
           } catch (error) {
               console.log(error);
           }
   
           try {
               AsyncStorage.setItem('Pages', pages);
           } catch (error) {
               console.log(error);
           }
   
           try {
               AsyncStorage.setItem('Genre', genre);
           } catch (error) {
               console.log(error);
           }
   
       };
   
       const getTitle = async () => {
           try {
               const title = await AsyncStorage.getItem('Title');
               setTitle(title);
           } catch (error) {}
       };
       React.useEffect(() => {
           getTitle();
       }, []);
   
   
       const getAuthor = async () => {
           try {
               const author = await AsyncStorage.getItem('Author');
               setAuthor(author);
           } catch (error) {}
       };
       React.useEffect(() => {
           getAuthor();
       }, []);
   
       const getPages = async () => {
           try {
               const pages = await AsyncStorage.getItem('Pages');
               setPages(pages);
           } catch (error) {}
       };
       React.useEffect(() => {
           getPages();
       }, []);
   
       const getGenre = async () => {
           try {
               const genre = await AsyncStorage.getItem('Genre');
               setGenre(genre);
           } catch (error) {}
       };
       React.useEffect(() => {
           getGenre();
       }, []);
   
   
       const [author, setAuthor] = React.useState('');
       const [pages, setPages] = React.useState('');
       const [genre, setGenre] = React.useState();
       
   return(
     <View style ={{ height:'100%',  backgroundColor: '#fefbd8',justifyContent:'center', alignItems:'center', 
   }}>
       <Text style={{fontSize:30, fontWeight:'bold',  letterSpacing:5,  position:'absolute', bottom: 480, color:'#000000'}}>Add a book</Text>  
       <TextInput style={{position: 'absolute', bottom: 360, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Title" onChangeText={value => setTitle(value)}/>
       <TextInput style={{position: 'absolute', bottom: 300, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Author" onChangeText={value => setAuthor(value)}/>
       <TextInput style={{position: 'absolute', bottom: 240, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Pages" onChangeText={value => setPages(value)}/>
       <View style={styles.container}>
   <Picker
   style={styles.picker}
   selectedValue={genre}
   onValueChange={value => setGenre(value)}>
   <Picker.Item label="Fiction" value="Fiction" />
   <Picker.Item label="Novel" value="Novel" />
   <Picker.Item label="Narrative" value="Narrative" />
   <Picker.Item label="Science Fiction" value="Science Fiction" />
   <Picker.Item label="Historical Fiction" value="Historical Fiction" />
   <Picker.Item label="Mystery" value="Mystery" />
   <Picker.Item label="Romance" value="Romance" />
   <Picker.Item label="Horror" value="Horror" />
   <Picker.Item label="Thriller" value="Thriller" />
   <Picker.Item label="Non-fiction" value="Non-fiction" />
   <Picker.Item label="Humor" value="Humor" />
   <Picker.Item label="Trur Crime" value="Trur Crime" />
   <Picker.Item label="Science" value="Science" />
   <Picker.Item label="Poetry" value="Poetry" />
   <Picker.Item label="Fairytale" value="Fairytale" />
   </Picker>
   </View>
   
     <Text style={{fontSize:30, position:'absolute', bottom: 580, color:'#000000'}}>Average number of pages read: {pages}</Text> 
     <TouchableOpacity style={styles.addButton} onPress={saveTitle}>
      <Text style={styles.buttonText}><Ionic name={"book"} size={30} color={"black"}/> Add book</Text> 
     </TouchableOpacity>
   
   </View>
   );
   };
const styles = StyleSheet.create({
   

    buttonText: {
        alignItems: 'center',
        bottom: -350,
        backgroundColor: 'grey',
        padding: 10,
    },
    picker:{
        backgroundColor: 'white',
        fontSize: 15,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderWidth: 10,
        borderColor: 'black',
        borderRadius: 10,
        color: 'blue',
        paddingRight: 100,
        position: 'absolute',
        top: 250,
      },
    

});


export default HomeScreen;