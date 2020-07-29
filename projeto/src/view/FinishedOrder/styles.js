import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#8A0F74', '#1D010C'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    align-self: center;
    margin-top: 20px;
    color: #fff;
    font-size: 38px;
`;

export const Description = styled.Text`
    color: #ddd;
    font-size: 14px;
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    padding: 10px;
    border: 1px solid #D85050;
    border-radius: 12px;
`;

export const BackText = styled.Text`
    align-self: center;
    font-size: 22px;
    color: #D85050;
`;