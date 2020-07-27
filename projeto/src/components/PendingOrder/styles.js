import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Name = styled.Text`
    font-size: 30px;
`;

export const DescriptionCard = styled.View`
    margin-top: 4px;
    border-radius: 10px;
    border: 2px solid #8A0F74;
    padding: 3px;
`;

export const DeliverDate = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #fff;
    background: #8A0F74;
    border-radius: 6px;
`;

export const SmallDescription = styled.View`
    padding: 10px;
    border-radius: 6px;
    background: #111;
    margin-top: 5px;
`;

export const LilDesc = styled.Text`
    margin-bottom: 4px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border: 1px solid #D805B5;
    border-radius: 6px;
`;

export const Price = styled.TextInput.attrs({
    placeholderTextColor: "#8A0F74"
})`
    color: #8A0F74;
    margin-top: 5px;
    border-radius: 6px;
    font-size: 20px;
    border: 2px solid #8A0F74;
`;

export const ConfirmDeliver = styled.TouchableOpacity`
    margin-top: 5px;
    padding: 2px;
    background-color: #4DCF8E;
    border-radius: 6px;
    align-items: center;
`;

export const DeliverText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #fff;

`;
