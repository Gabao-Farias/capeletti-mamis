import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#8A0F74', '#1D010C'],
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

export const Inputs = styled.View`
    padding: 20px;
`;

export const InputDescription = styled.TextInput.attrs({
    placeholderTextColor: "#aaa",
})`    
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 22px;
`;

export const InputValue = styled.TextInput.attrs({
    placeholderTextColor: "#aaa",
})`
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 22px;
`;

export const Options = styled.View`
    flex-direction: row;
    margin: 20px;
    justify-content: space-around;
`;

export const Add = styled.TouchableOpacity`
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

export const AddText = styled.Text`
    align-self: center;
    font-size: 22px;
    color: #4DCF8E;
`;

export const BackText = styled.Text`
    align-self: center;
    font-size: 22px;
    color: #D85050;
`;