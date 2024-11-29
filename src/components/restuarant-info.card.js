import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import star from '../../assets/star';
import open from '../../assets/open';
import {Spacer} from '../components/spacer/spacer-components';
import {Test} from '../components/typography/text.component';
import {
  Icon,
  RestuarantCard,
  RestuarantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
} from './restuarant-info-card.styles';

// const Title = styled(Text)`
//   padding: ${props => props.theme.space[3]};
//   color: ${props => props.theme.colors.ui.primary};
//   font-family: 'Lato-Regular';
//   font-size: ${props => props.theme.fontSizes.body};
// `;

export const RestuarantInfoCard = ({restuarant = {}}) => {
  const {
    name = 'Hanjo Place',
    icons = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp',
    ],
    address = 'Beverly Hills',
    openingHours = true,
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestuarantCard elevation={5}>
      <RestuarantCardCover
        key={name}
        style={styles.cover}
        source={{uri: photos[0]}}
      />
      <Info>
        <Text>akinde</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                style={{color: 'red', fontWeight: 'bold', fontFamily: 'Lato'}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{uri: icons}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestuarantCard>
  );
};

const styles = StyleSheet.create({});
