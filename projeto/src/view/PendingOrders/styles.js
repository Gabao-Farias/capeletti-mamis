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

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;