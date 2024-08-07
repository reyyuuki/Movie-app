import React from 'react'
import {ScrollView} from 'react-native'
import Header from '../../../components/common/Header'
import Corousale from '../../../components/common/Corousale'

export default function homepage(){
  return (
    <ScrollView>
        <Header/>
        <Corousale/>
    </ScrollView>
  )
}
