import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './style';

export default function App() {

  const images = [
    require('../assets/images/card0.png'),
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Semaine 1: Synthèse</Text>
      <Text style={styles.subHeader}>Vos succès</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          loop
          autoPlay={true}
          autoPlayInterval={3000}
          mode='parallax'
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          width={Dimensions.get('window').width}
          height={325}
          data={images}
          renderItem={({ item, index }) => {
            console.log('Rendering item at index:', index);
            return (
              <Image style={styles.image} source={item} />
            );
          }}
          onSnapToItem={(index) => {
            setCurrentIndex(index);
            console.log('current index:', index);
          }}

        />
      </View>

      <Text style={styles.sectionHeader}>Vue d'ensemble</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewItem}>
          <Image style={styles.overviewIcon} source={require('../assets/images/Observance.png')} />
        </View>
        <View style={styles.overviewItem}>
          <Image style={styles.overviewIcon} source={require('../assets/images/intake consecutive.png')} />
        </View>
      </View>

      <Image style={styles.overviewIcon} source={require('../assets/images/missed intake.png')} />
      <Image style={styles.overviewIcon} source={require('../assets/images/symptom.png')} />

      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Comme pour beaucoup de personnes, le week-end semble être un moment de la semaine plus compliqué pour prendre vos traitements. Voici quelques conseils :{'\n\n'}</Text>
        <View style={styles.reminderItem}>
          <Text style={styles.bullet}>{"\u272A"}</Text>
          <Text style={styles.reminderText}>
            N'hésitez pas à modifier vos rappels pour coller à vos habitudes du week-end. Par exemple pour un réveil plus tardif.
          </Text>
        </View>
        <View style={styles.reminderItem}>
          <Text style={styles.bullet}>{"\u272A"}</Text>
          <Text style={styles.reminderText}>
            Pensez à avoir votre Respiventix près de vous aux abords de votre horaire de prise. Placez-le dans la pièce où vous avez l'habitude d'être aux horaires de prises.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Vos prises cette semaine</Text>
      <View style={styles.weeklyIntakeContainer}>
        <Image style={styles.weeklyIntakeImage} source={require('../assets/images/Week intakes widget.png')} />
      </View>

      <Text style={styles.sectionHeader}>Vos prochaines étapes</Text>
      <View style={styles.nextStepsContainer}>
        <Image style={styles.nextStepsImage} source={require('../assets/images/Goal Widget.png')} />
      </View>
      <View style={styles.nextStepsContainer}>
        <Image style={styles.nextStepsImage} source={require('../assets/images/Next step container.png')} />
      </View>

    </ScrollView>
  );
};
