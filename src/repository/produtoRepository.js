import api from '../config/api.config'
import AsyncStorage from '@react-native-community/async-storage';
import { useContext } from 'react';


const token = AsyncStorage.getItem('@AuthToken:token');


const getProdutos = async ( categoria_id ) => {
   
   
    try {
        const produtos = await api.get(`produtos/pesquisar?categorias=${ categoria_id }`, {responseType: 'text'})
        return produtos.data;
    } catch (error) {
        console.log(error)
    }
}

export default getProdutos;

export const addCart = async ({produto}) => {
  
   
    try {
        console.log('Tentou')
        await api.post("produtos/carrinho", produto, {   headers: {'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYWxtZWlkYS4xMzA1QGdtYWlsLmNvbSIsImV4cCI6MTYyNjUyOTk2MH0.au2KK0LayoWaHCSGXUHKgiP9M0ZHgJJI-tVwvFj1aumvE4MHIhZqYaHrY29GYYX-o9nya7DbT4HoeLHfY5e7Ew'} , responseType: 'text'})
        
    } catch (error) {
        console.log(error)
    }
  }

 

// const getImageFromBucket = async ( id ) => {
//     const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com"
//     const url = `${bucketUrl}/prod${id}-small.jpg`
//     return url;
// }