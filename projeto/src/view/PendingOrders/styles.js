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

export const Title = styled.Text`
    align-self: center;
    margin-top: 40px;
    color: #fff;
    font-size: 38px;
`;

export const Description = styled.Text`
    text-align: center;
    color: #fff;
    margin-bottom: 5px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
`;