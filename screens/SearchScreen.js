import React from 'react';
import { ScrollView, Text, TouchableWithoutFeedbackBase, View } from 'react-native'
import db from '../config'

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      allTransactions:[]
    }
  }
  componentDidMount=async()=>{
    const query = await db.collection("Transaction").get()
    query.docs.map(
      (doc)=>{
        this.setState ({
          allTransactions:[...this.state.allTransactions,doc.data()]
        })
      }
    )
  }
    render() {
      return (
        <ScrollView>
        {
          this.state.allTransactions.map(
            (transaction)=>{
              return(
                <View key={index} style={{borderBottomWidth:true}}>
                  <Text>{"BOOK ID: "+transaction.BookID}</Text>
                  <Text>{"STUDENT ID: "+transaction.StudentID}</Text>
                  <Text>{"TRANSACTION TYPE: "+transaction.getTransaction}</Text>
                  <Text>{"DATE: "+transaction.date.toDate()}</Text>
                </View>
              )
            }
          )
        }
        </ScrollView>
      );
    }

  }