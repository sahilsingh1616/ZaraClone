import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import { BANNER, PRODUCTS } from '../utils/mocks';
import Header from '../Common/Header';
import MyProduct from '../Common/MyProduct';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('screen')

const renderItem1 = ({ item }) => {
    //console.log(item)
    return (

        <View>
            <View style={{ alignItems: "center" }}>
                <Image source={item.bckground} style={{ width: '95%', height: height / 6, borderRadius: 10 }} />
            </View>
        </View>

    );

}

const Home = () => {
    const [page, setPage] = useState(0);
    const ref = useRef()
    const [selectTab, setSelectedTabIndex] = useState(0);
  

    const [categoryList, setCategoriesList] = useState([]);
    const [allwork, setAllWork] = useState([]);
    const [tshirts, setTShirts] = useState([]);
    const [jeans, setJeans] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [jackets, setJackets] = useState([]);
    const [slipper, setSlipper] = useState([]);
    const [Trousers, setTrousers] = useState([]);



    useEffect(() => {
       // console.log(PRODUCTS)
        let TempData = [];
        PRODUCTS.categories.map(item => {
            TempData.push(item)

           // console.log(TempData)
        })
        setCategoriesList(TempData)
        setAllWork(PRODUCTS.categories[0].data)
        setTShirts(PRODUCTS.categories[1].data)
        setJeans(PRODUCTS.categories[2].data)
        setShoes(PRODUCTS.categories[3].data)
        setJackets(PRODUCTS.categories[4].data)
        setSlipper(PRODUCTS.categories[5].data)
        setTrousers(PRODUCTS.categories[6].data)

    }, [])

 

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header />

                <View style={{ marginTop: 10 }}>
                    <Carousel

                        ref={ref}
                        onSnapToItem={(page) => setPage(page)}
                        layout={"stack"}
                        layoutCardOffset={`18`}
                        data={BANNER}
                        renderItem={renderItem1}
                        sliderWidth={width}
                        itemWidth={width}
                        enableSnap={true}
                        disableIntervalMomentum={true}
                        removeClippedSubviews={true}
                        snapToInterval={1}
                    // loop={true}
                    //autoplay={true}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <FlatList

                        data={categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                           // console.log(item)
                            return (
                                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedTabIndex(index)} style={[styles.FirstRow, { borderColor: selectTab == index ? 'blue' : 'black' }]}>
                                    <Text style={{ fontSize: 12, color: selectTab == index ? 'blue' : 'black' }}>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }}

                    />
                </View>

                {selectTab == 0 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'New T-Shirts'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={tshirts}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                       // console.log(item)
                                        return (
                                            <MyProduct item={item}
                                           
                                                    
                                              />
                                        )
                                    }}

                                />
                            </View>

                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'New Pants/Jeans'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={jeans}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                     //   console.log(item)
                                        return (
                                            <MyProduct item={item}
                                         
                                             />
                                        )
                                    }}

                                />
                            </View>

                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Sneakers'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={shoes}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                     //   console.log(item)
                                        return (
                                            <MyProduct item={item}
                                          
                                               />
                                        )
                                    }}

                                />
                            </View>

                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Jackets'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={jackets}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                      //  console.log(item)
                                        return (
                                            <MyProduct item={item} 
                                          
                                             />
                                        )
                                    }}

                                />
                            </View>

                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'FootWear'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={slipper}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                      //  console.log(item)
                                        return (
                                            <MyProduct item={item} 
                                           
                                            
                                             />
                                        )
                                    }}

                                />
                            </View>

                        </View>


                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Trousers'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10, marginBottom: "25%" }}>
                                <FlatList

                                    data={Trousers}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                     //   console.log(item)
                                        return (
                                            <MyProduct item={item}
                                           
                                              />
                                        )
                                    }}

                                />
                            </View>

                        </View>

                    </View>

                )}


                {selectTab == 1 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'New T-Shirts'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={tshirts}
                                    id='0'
                                    horizontal={selectTab == 1 ? false : true}
                                    numColumns={selectTab == 1 ? 2 : 1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>

                            <View style={{ marginBottom: '25%' }}>
                            </View>

                        </View>
                    </View>
                )}

                {selectTab == 2 && (
                    <View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'New Pants/Jeans'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList
                                    id='1'
                                    horizontal={selectTab == 2 ? false : true}
                                    numColumns={selectTab == 2 ? 2 : 1}
                                    data={jeans}

                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>
                            <View style={{ marginBottom: '25%' }}>
                            </View>

                        </View>
                    </View>
                )}

                {selectTab == 3 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Sneakers'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={shoes}
                                    id='3'
                                    horizontal={selectTab == 3 ? false : true}
                                    numColumns={selectTab == 3 ? 2 : 1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>

                            <View style={{ marginBottom: '25%' }}>
                            </View>


                        </View>
                    </View>
                )}

                {selectTab == 4 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Jackets'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={jackets}
                                    id='4'
                                    horizontal={selectTab == 4 ? false : true}
                                    numColumns={selectTab == 4 ? 2 : 1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>
                            <View style={{ marginBottom: '25%' }}>
                            </View>


                        </View>


                    </View>
                )}

                {selectTab == 5 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'FootWear'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <FlatList

                                    data={slipper}
                                    id='5'
                                    horizontal={selectTab == 5 ? false : true}
                                    numColumns={selectTab == 5 ? 2 : 1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                      //  console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>

                            <View style={{ marginBottom: '25%' }}>
                            </View>

                        </View>
                    </View>
                )}

                {selectTab == 6 && (
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 20 }}>{'Trousers'}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', marginRight: 20 }}>{'See all'}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 10, marginBottom: "25%" }}>
                                <FlatList

                                    data={Trousers}
                                    id='6'
                                    horizontal={selectTab == 6 ? false : true}
                                    numColumns={selectTab == 6 ? 2 : 1}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                      //  console.log(item)
                                        return (
                                            <MyProduct item={item} />
                                        )
                                    }}

                                />
                            </View>

                            <View style={{ marginBottom: '20%' }}>
                            </View>

                        </View>
                    </View>
                )}




            </View>

        </ScrollView>


    )
}

export default Home

const styles = StyleSheet.create({
    FirstRow: {
        padding: 10, borderWidth: 1, margin: 10, borderRadius: 10
    }
})