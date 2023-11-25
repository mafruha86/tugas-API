import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const FlowerShop = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com/api/flowers');
        setFlowers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>List of Flowers:</Text>
      {flowers.map((flower) => (
        <Text key={flower.id}>{flower.name}</Text>
      ))}
    </View>
  );
};