import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#8A0F74', '#1D010C'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
    flex: 1;
`;