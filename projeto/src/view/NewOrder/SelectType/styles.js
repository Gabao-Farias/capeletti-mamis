import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#410318', '#8A0F74'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
    flex: 1;
`;

export const Title = styled.Text`
    align-self: center;
    margin-top: 40px;
    color: #fff;
    font-size: 38px;
`;

export const Progress = styled.View`
    margin: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconSpace = styled.View`
    margin: 3px;
`;

export const TypesContainer = styled.View`
    margin: 20px;
    border: 2px solid #fff;
    border-radius: 20px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
`;

export const Type = styled.TouchableOpacity`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const TypeText = styled.Text`
    color: #8a0f74;
    font-size: 22px;
`;

export const TypeSelected = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 20px;
`;

export const Options = styled.View`
    flex-direction: row;
    margin: 20px;
    margin-top: 130px;
    justify-content: space-around;
`;

export const Next = styled.TouchableOpacity`
    padding: 10px;
    border: 1px solid #4DCF8E;
    border-radius: 12px;
    width: 120px;
`;
export const Back = styled.TouchableOpacity`
    padding: 10px;
    border: 1px solid #D85050;
    border-radius: 12px;
    width: 120px;
`;

export const NextText = styled.Text`
    align-self: center;
    font-size: 22px;
    color: #4DCF8E;
`;

export const BackText = styled.Text`
    align-self: center;
    font-size: 22px;
    color: #D85050;
`;