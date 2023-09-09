import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style=
      {styles.container}>
      <View style={styles.firstGroup}>
        <View style={styles.tools}>
          <Image source={require('./settings.png')} style={styles.settingIcon} />
          <Image source={require('./share.png')} style={styles.settingIcon} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/359519190_1664304047423839_6019744022963778770_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFB0y643ltjTxfCCVA_tc_3_sxlgodZ_Ar-zGWCh1n8Clsdgl8NzKcbCJpt_gBteQoVVhxHMXoW2VArU7ILR23o&_nc_ohc=wJgLZEahEQ4AX-W3-m5&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfDSENRbmeIYwjUfIVeEkLAzMCMzKjyLP1jNHa36-Bb6mw&oe=6500E2DC' }} style={styles.profileImage} />
          </View>
          <View>
            <Text style={styles.nameText}>
              mjanesanchez
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondGroup}>
        <View style={styles.firsSecondCont}>
          <Image source={require('./star.png')}
            style={styles.topStar} />
          <Text style={styles.popularText}>
            Popular
          </Text>
        </View>
        <View style={styles.insideCont}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ columnGap: 10 }}>
              <Image source={{
                uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/359519190_1664304047423839_6019744022963778770_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFB0y643ltjTxfCCVA_tc_3_sxlgodZ_Ar-zGWCh1n8Clsdgl8NzKcbCJpt_gBteQoVVhxHMXoW2VArU7ILR23o&_nc_ohc=wJgLZEahEQ4AX-W3-m5&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfDSENRbmeIYwjUfIVeEkLAzMCMzKjyLP1jNHa36-Bb6mw&oe=6500E2DC'
              }} style={styles.insideImage} />

            </View>
            <View>
              <Text style={styles.insideNameText}>
                mjanesanchez
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.insideText1}>
              Act1_ReactNative_Flexbow
            </Text>
            <Text style={styles.insideText2}>
              Mary Jane Sanchez IT3B
            </Text>
          </View>
          <View style={styles.insidegroup1}>
            <View style={{
              columnGap: 10
            }}>
              <Image source={require('./yellowstar.png')
              }
                style={styles.yellowstar} />

            </View>
            <View>
              <Text style={{ textAlign: 'left', fontSize: 20, marginTop: 5 }}>
                0
              </Text>
            </View>
            <View style={styles.theyellow}>
            </View>
            <View>
              <Text style={{ textAlign: 'left', fontSize: 20, marginTop: 5 }}>
                JavaScript
              </Text>
            </View>
          </View>

        </View>

      </View>
      <View style={styles.thirdGroup}>

        <View style={styles.wew}>
          <View style={styles.repositoryIcon}>
            <View>
              <Image source={require('./book-with-bookmark.png')} style={styles.repositry} />
            </View>
          </View>
          <View>
            <Text style={styles.repositoryText}>Repositories</Text>

          </View>
          <View style={{ marginLeft: 170 }}>
            <Text style={styles.repositoryText}>2</Text>
          </View>
        </View>

        <View style={styles.wew}>
          <View style={styles.orgIcon}>
            <View>
              <Image source={require('./business-and-trade.png')} style={styles.repositry} />
            </View>
          </View>
          <View>
            <Text style={styles.repositoryText}>Organizations</Text>

          </View>
          <View style={{ marginLeft: 155 }}>
            <Text style={styles.repositoryText}>0</Text>
          </View>
        </View>

        <View style={styles.wew}>
          <View style={styles.starredIcon}>
            <View>
              <Image source={require('./staar.png')} style={styles.repositry} />
            </View>
          </View>
          <View>
            <Text style={styles.repositoryText}>Starred</Text>

          </View>
          <View style={{ marginLeft: 215 }}>
            <Text style={styles.repositoryText}>0</Text>
          </View>
        </View>

      </View>
      <View style={styles.fourthGroup}>
      <View>
      <View style={{alignSelf:'center'}}>
        <Image source={require('./hut.png')} style={styles.bottomNav}/>
        
      </View>
      <View style={{textAlign:'center'}}>
      <Text style={{textAlign:'center'}}>Home</Text>
      </View>
    </View>
              <View>
              <View style={{alignSelf:'center'}}>
                <Image source={require('./bell.png')} style={styles.bottomNav}/>
                
              </View>
              <View style={{textAlign:'center'}}>
              <Text style={{textAlign:'center'}}>Notifications</Text>
              </View>
            </View>
              <View>
              <View style={{alignSelf:'center'}}>
                <Image source={require('./telescope.png')} style={styles.bottomNav}/>
                
              </View>
              <View style={{textAlign:'center'}}>
              <Text style={{textAlign:'center'}}>Explore</Text>
              </View>
            </View>
              <View>
                <View style={{alignSelf:'center'}}>
                  <Image source={{uri:'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/359519190_1664304047423839_6019744022963778770_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFB0y643ltjTxfCCVA_tc_3_sxlgodZ_Ar-zGWCh1n8Clsdgl8NzKcbCJpt_gBteQoVVhxHMXoW2VArU7ILR23o&_nc_ohc=wJgLZEahEQ4AX-W3-m5&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfDSENRbmeIYwjUfIVeEkLAzMCMzKjyLP1jNHa36-Bb6mw&oe=6500E2DC'}} style={styles.bottomNavPic}/>
                  
                </View>
                <View style={{textAlign:'center'}}>
                <Text style={{textAlign:'center',color:'#2196F3'}}>Profile</Text>
                </View>
              </View>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFD8DC',
    flexWrap: 'wrap',
    

    

  },
  firstGroup:{
      backgroundColor: 'white',
      height: 200,
      width: 415,
      paddingRight: 5,
  },
  tools:{
      flexDirection: 'row-reverse',
        gap: 15,
        alignContent: 'right',
        alignSelf: 'right'
  },
  settingIcon:{
      height: 30,
      width: 30,
      alignSelf: 'right',
      margin: 5,
  },
  profileImage:{
      height: 100,
              width: 100,
              borderRadius: 50,
              alignSelf: 'left',
              margin: 20
  }, 
  nameText:{
      textAlign: 'left',
            fontSize: 20,
            marginTop: 55,
            color: '#757575',
  } ,
  secondGroup:{
      backgroundColor: 'white',
      width: 415,
      height: 250,
      marginTop: 20,
      padding: 10
    },
    firsSecondCont:{
      flexDirection: 'row',
      columnGap: 15,
      margin: 5
    },
    topStar:{
      height: 18,
      width: 18,
      marginTop: 5,
      marginLeft: 5
    },
    popularText:{
      fontSize: 20,
      fontWeight: 500
    },
    insideCont:{
      borderColor: 'lightgrey',
      borderWidth: 1,
      margin: 10,
      marginRight: 70
    },
    insideImage:{
      height: 30,
      width: 30,
      borderRadius: 50,
      alignSelf: 'left',
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10
    },
    insideNameText:{
      textAlign: 'left',
      fontSize: 20,
      marginTop: 20,
      color: '#757575',
    },
    insideText1:{
      fontWeight: 700,
      fontSize: 20,
      marginLeft: 10
    },
    insideText2:{
      fontWeight: 450,
      fontSize: 19,
      marginLeft: 10
    },
    insidegroup1:{
      marginTop: 25,
      marginBottom: 15,
      marginLeft: 10,
      flexDirection: 'row',
      columnGap: 15
    },
    yellowstar:{
      height: 18,
      width: 18,
      borderRadius:
        50, alignSelf: 'left',
      marginTop: 10,
    },
    theyellow:{
      backgroundColor: 'yellow',
            height: 15,
            width: 15,
            borderRadius: 50,
            marginTop: 12
    },
    thirdGroup:{
      backgroundColor:'white',
      width:415,
      height:180,
       marginTop:2,

       
       
       
      },
      repositoryIcon:{
          backgroundColor:'#212121',
          height:40,
          width:40,
          marginLeft:20,
          marginTop:10,
          

      },

      repositry:{
          height:20,
          width:20,
          alignSelf:'center',
          marginTop:10
      },
      wew:{
          flexDirection:'row',
          gap:20
      },
      repositoryText:{
          fontSize:20,
          marginTop:15
      },
      orgIcon:{
          backgroundColor:'#ff6f00',
          height:40,
          width:40,
          marginLeft:20,
          marginTop:10,
          

      },
      starredIcon:{
          backgroundColor:'#FFB300',
          height:40,
          width:40,
          marginLeft:20,
          marginTop:10,
          

      },
      fourthGroup:{
          backgroundColor:'white',
          height:60,
          width:415,
          marginTop:205,
          flexDirection:'row',
          justifyContent:'center',
          padding:10,
          columnGap: 60

      },

      bottomNav:{
          height: 25,
          width:25,
      },
      bottomNavPic:{
          height: 25,
          width:25,
          borderRadius:20,
          borderColor:'#2196F3',
          borderWidth:3
      }



    
});

