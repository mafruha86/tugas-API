import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FlowerShop = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines');
        setFlowers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

      useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {/*console.log(data)*/}
            <SafeAreaView>
                <ScrollView>
                    {data && data.map((item, i) => {
                        return <>
                            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 5 }}>
                                <image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
                                <View style={{ justifyContent: 'space-between' }}>
                                    <text style={{ fontWeight: 'bold' }}>{item.title}</text>
                                    <text>{item.author}</text>
                                </View>
                            </View>
                        </>;
                    })}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}