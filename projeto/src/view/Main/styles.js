import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#410318', '#8A0F74'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
    flex: 1;
`;

export const Options = styled.View`
    margin: 20px;
    padding: 20px;
    flex: 1;
    justify-content: space-around;
    border: 2px solid #fff;
    border-radius: 20px;
`;

export const Title = styled.Text`
    align-self: center;
    margin-top: 40px;
    color: #fff;
    font-size: 38px;
`;

export const Button = styled.TouchableOpacity`
    align-self: center;
    border-radius: 20px;
    width: 280px;
    padding: 20px;
    background-color: #fff;
`;

export const Text = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #72075F;
`;
