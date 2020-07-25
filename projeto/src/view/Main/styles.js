import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#410318', '#8A0F74'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
    flex: 1;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    border-radius: 20px;
    margin-bottom: 100px;
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #fff;
`;

export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #72075F;
`;
