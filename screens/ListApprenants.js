import { Avatar, Header } from '@rneui/base';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { Icon, Input, ListItem} from '@rneui/themed';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
      
    },
  });
const ListApprenants = () => {
  
    const list = [{firstname: "John", lastname:"Doe"},
              {firstname: "John", lastname:"Doe"},
              {firstname: "John", lastname:"Doe"},
              {firstname: "John", lastname:"Doe"},
              {firstname: "John", lastname:"Doe"}
            ];
function getInitial(nom){
  return nom[0];
}
  
  return (
    <View style={styles.container}>
        <View style={{  }}>
             <Header backgroundColor='#152196'>
                <TouchableOpacity>
                   <Icon name='menu' color="white"></Icon>
                </TouchableOpacity>
                <Text style={{color:"white"}}>Apprenants de La Manu</Text>
              </Header>
         </View>
         <View  style={{backgroundColor:"#e1e1e1", margin:5, borderRadius:5, height:45}}>
          <Input 
            placeholder="ex. John Doe"
            rightIcon={
              <Icon name='search' style={{ borderLeftColor:"black", borderLeftWidth:2 , height:"100%"}}>
              </Icon>
            }
           ></Input>
         </View>
         <View>
          <FlatList
           data={list}
           renderItem={({item})=>(
           <ListItem bottomDivider>
            <Avatar rounded containerStyle={{backgroundColor: "#e1e1e1"}} title={getInitial(item.firstname)+getInitial(item.lastname)} titleStyle={{ color:"black"}}/>
            <ListItemContent >
             <ListItem.Title><Text>{item.firstname+" "+item.lastname }</Text></ListItem.Title>
             <ListItem.Subtitle><Text style={{color:"#e1e1e1"}}>Appli Mobile P1</Text></ListItem.Subtitle>
            </ListItemContent>
            <ListItem.Chevron/>
           </ListItem> )}
           keyExtractor={(item, index)=> index}
           />
         </View>
    </View>
    
  );
  
}

export default ListApprenants