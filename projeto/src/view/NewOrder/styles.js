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

export const InputText = styled.TextInput.attrs({
    placeholderTextColor: "#aaa",
})`
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 22px;
`;

export const DateCard = styled.View`
    margin-top: 20px;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
`;

export const Subtitle = styled.Text`
    align-self: center;
    color: #fff;
    font-size: 30px;
`;

export const InputsSmall = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const SmallInput = styled.TextInput.attrs({
    placeholderTextColor: "#aaa",
})`
    flex: 1;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
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
