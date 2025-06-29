import { View, StyleSheet} from 'react-native'
import { ReactNode } from 'react'

export default function ScreenContainer({children}: {children: ReactNode}) {
  return (
      <View style={styles.wrapper}>
          <View style={ styles.backgroundTop } />
          <View style={styles.backgroundBottom} />
          
          <View style={styles.container}>
              { children }
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
    },
    backgroundTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: '#2f324a',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        zIndex: 0,
    },
    backgroundBottom: {
        position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#e9c974',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 0,
    },
    container: {
        flex: 1,
        gap: 10,
        padding: 16,
        zIndex: 1,
    }
});