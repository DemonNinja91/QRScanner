import React from 'react';
import {View, StyleSheet, Alert, StatusBar, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SvgXml } from 'react-native-svg';

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="81.753" height="20" viewBox="0 0 81.753 20">
<g id="Group_3280" data-name="Group 3280" transform="translate(-56.415 -116.364)">
  <path id="Path_1" data-name="Path 1" d="M81.694,132.961v-.419a6.488,6.488,0,0,0-.435-1.98,28.113,28.113,0,0,0-1.978-3.388c-1.276-2.13-2.712-4.591-4-6.738-1.057-1.768-2.043-4.038-4.668-4.073-2.73-.036-3.638,2.283-4.628,3.959-3.146,5.319-9.574,16.025-9.574,16.025h2.967s6.133-10.443,9.178-15.721a2.792,2.792,0,0,1,2.057-1.561c1.359,0,2.04,1.557,2.65,2.626,1.636,2.865,3.213,5.607,4.747,8.375.483.87,1.462,2.016.791,3.2-.437.771-1.319.723-2.571.723,0,.02-12.105,0-12.105,0v2.36h11a26.851,26.851,0,0,0,3.64-.114A3.574,3.574,0,0,0,81.694,132.961Z" transform="translate(0 0)" fill="#fff"/>
  <path id="Path_2" data-name="Path 2" d="M99.743,119.767v.419a6.485,6.485,0,0,0,.435,1.979,28.119,28.119,0,0,0,1.978,3.388c1.276,2.13,2.711,4.591,4,6.738,1.057,1.767,2.043,4.038,4.668,4.073,2.73.037,3.638-2.283,4.628-3.959,3.146-5.32,9.574-16.025,9.574-16.025h-2.967s-6.133,10.443-9.178,15.721a2.791,2.791,0,0,1-2.057,1.561c-1.36,0-2.04-1.557-2.65-2.627-1.636-2.865-3.213-5.607-4.747-8.374-.483-.87-1.462-2.016-.791-3.2.437-.771,1.319-.724,2.571-.724,0-.019,12.105,0,12.105,0V116.38h-11a26.9,26.9,0,0,0-3.64.114A3.575,3.575,0,0,0,99.743,119.767Z" transform="translate(-22.501 0)" fill="#fff"/>
  <path id="Path_3" data-name="Path 3" d="M155.855,132.961v-.419a6.486,6.486,0,0,0-.435-1.98,28.11,28.11,0,0,0-1.978-3.388c-1.276-2.13-2.711-4.591-4-6.738-1.057-1.768-2.043-4.038-4.668-4.073-2.73-.036-3.638,2.283-4.628,3.959-3.146,5.319-9.574,16.025-9.574,16.025h2.967s6.133-10.443,9.178-15.721a2.791,2.791,0,0,1,2.057-1.561c1.36,0,2.04,1.557,2.65,2.626,1.636,2.865,3.213,5.607,4.747,8.375.483.87,1.462,2.016.791,3.2-.437.771-1.319.723-2.571.723,0,.02-12.105,0-12.105,0v2.36h11a26.844,26.844,0,0,0,3.639-.114A3.574,3.574,0,0,0,155.855,132.961Z" transform="translate(-38.514 0)" fill="#fff"/>
  <path id="Path_4" data-name="Path 4" d="M173.9,119.767v.419a6.485,6.485,0,0,0,.435,1.979,28.189,28.189,0,0,0,1.978,3.388c1.276,2.13,2.712,4.591,4,6.738,1.057,1.767,2.043,4.038,4.668,4.073,2.73.037,3.638-2.283,4.628-3.959,3.146-5.32,9.574-16.025,9.574-16.025h-2.967s-6.133,10.443-9.178,15.721a2.792,2.792,0,0,1-2.057,1.561c-1.359,0-2.04-1.557-2.65-2.627-1.636-2.865-3.212-5.607-4.747-8.374-.483-.87-1.462-2.016-.791-3.2.437-.771,1.319-.724,2.572-.724,0-.019,12.1,0,12.1,0V116.38h-11a26.9,26.9,0,0,0-3.64.114A3.575,3.575,0,0,0,173.9,119.767Z" transform="translate(-61.015 0)" fill="#fff"/>
</g>
</svg>
`

const flag=`<svg id="Group_3035" data-name="Group 3035" xmlns="http://www.w3.org/2000/svg" width="22.388" height="15" viewBox="0 0 22.388 15">
<g id="Group_2964" data-name="Group 2964" transform="translate(0.01 0.01)">
  <rect id="Rectangle_166" data-name="Rectangle 166" width="22.369" height="14.981" transform="translate(0 0)" fill="#102576"/>
</g>
<g id="Group_2965" data-name="Group 2965" transform="translate(0.01 0.01)">
  <path id="Path_7686" data-name="Path 7686" d="M3362.979,385.068h2.8l5.868,3.93v-3.93h5.029V389l5.866-3.929h2.8v1.876l-4.627,3.1h4.627v5.029h-4.627l4.627,3.1v1.876h-2.8l-5.867-3.93v3.93h-5.029v-3.931l-5.869,3.931h-2.8v-1.876l4.628-3.1h-4.628v-5.029h4.629l-4.629-3.1Z" transform="translate(-3362.979 -385.068)" fill="#fff"/>
</g>
<g id="Group_2966" data-name="Group 2966" transform="translate(0.01 10.15)">
  <path id="Path_7687" data-name="Path 7687" d="M3371.415,434.895v-.35h-1.208l-7.228,4.84h1.729Z" transform="translate(-3362.979 -434.545)" fill="#e50019"/>
</g>
<g id="Group_2967" data-name="Group 2967" transform="translate(13.946 0.01)">
  <path id="Path_7688" data-name="Path 7688" d="M3430.733,389.558v.351h1.205l7.228-4.84h-1.729Z" transform="translate(-3430.733 -385.068)" fill="#e50019"/>
</g>
<g id="Group_2968" data-name="Group 2968" transform="translate(0.01 0.01)">
  <path id="Path_7689" data-name="Path 7689" d="M3362.979,386.225l5.5,3.684h1.729l-7.229-4.84h0Z" transform="translate(-3362.979 -385.068)" fill="#e50019"/>
</g>
<g id="Group_2969" data-name="Group 2969" transform="translate(15.152 10.15)">
  <path id="Path_7690" data-name="Path 7690" d="M3436.863,434.545l7.227,4.84v-1.158l-5.5-3.683Z" transform="translate(-3436.863 -434.545)" fill="#e50019"/>
</g>
<g id="Group_2970" data-name="Group 2970" transform="translate(0.01 0.01)">
  <path id="Path_7691" data-name="Path 7691" d="M3375.673,391.05v-5.982h-3.018v5.982h-9.677v3.017h9.677v5.982h3.018v-5.982h9.674V391.05Z" transform="translate(-3362.979 -385.068)" fill="#e50019"/>
</g>
<g id="Group_2971" data-name="Group 2971">
  <path id="Path_7692" data-name="Path 7692" d="M3385.317,400.019h-22.388v-15h22.388Zm-22.368-.02H3385.3v-14.96h-22.348Z" transform="translate(-3362.929 -385.019)" fill="#1a1818"/>
</g>
</svg>
`


const Home = () => {
    return (
        <View style={styles.container}>
                    <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />

<View style={[styles.header]}>
                <View style={styles.leftContainer}>
                    <AntDesign name={'arrowleft'} size={24} color={'#fff'} />
                </View>
                <View style={[styles.middleContainer, ]}>
                    <SvgXml xml={logo} width={80} height={80} />
                </View>
                <View style={styles.rightContainer}>
                <Text style={styles.cityName}>London</Text>
                    <SvgXml xml={flag} height={24} width={24} />
                    
                </View>
            </View>


            <QRCodeScanner
            onRead={({ data }) => alert(data)}
            height={'100%'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#000'
    },
    header: {

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 45,
        zIndex: 1
    },
    leftContainer: {
        flex: 1,
    },
    middleContainer: {
        flex: 1,
        alignItems: 'center',
        marginRight: '12%'
    },
    rightContainer: {
        flexDirection: 'row', // Align the items horizontally
        alignItems: 'center', // Align items vertically
    },
    cityName:{
        color:'#fff',
        textTransform:'uppercase',
        fontSize: 8,
        marginRight: 5
    }
})

export default Home;
