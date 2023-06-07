import React from "react"
import { Input, Button, Stack, FormControl,FormLabel, FormHelperText } from "@chakra-ui/react"
import apiURL from '@/apiURL'

const Delivery = () => {

    const [fullName, setFullName] = React.useState('')
    const [fullAdress, setfullAdress] = React.useState('')
    const [postalCode, setpostalCode] = React.useState('')
    const [phoneNumber, setphoneNumber] = React.useState('')

    const [ordered,SetOrdered] = React.useState(false)
    const [response,SetResponse] = React.useState('')

    const handleChangeName = (event) => setFullName(event.target.value)
    const handleChangeAdress = (event) => setfullAdress(event.target.value)
    const handleChangePostal = (event) => setpostalCode(event.target.value)
    const handleChangePhone = (event) => setphoneNumber(event.target.value)

    const getDelivery = async () => {
        const response = await fetch(apiURL+'api/delivery/'+JSON.stringify({
            fullName: fullName,
            fullAdress: fullAdress,
            postalCode: postalCode,
            phoneNumber: phoneNumber
        }),{
        method: "POST",
        }
        );
        const jsonData = await response.json();
        SetOrdered(true)
        SetResponse(jsonData.data)
        }
    

    return ordered ?    <h1> {response} </h1> :        
            <form>
                    <Stack spacing={4}>
                    <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input   colorScheme = "red" onChange = {handleChangeName} style = {{margin:'5px', border: '1px solid green'}}/>
                    <FormHelperText>post your full name on your id.</FormHelperText>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Full Adress</FormLabel>
                        <Input  colorScheme = "green" onChange = {handleChangeAdress} style = {{margin:'5px', border: '1px solid green'}}/>
                    <FormHelperText>post your full adress where you live.</FormHelperText>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Postal Code</FormLabel>
                    <Input colorScheme = "green" onChange = {handleChangePostal} style = {{margin:'5px', border: '1px solid green'}}/>
                    </FormControl>
                    <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input  colorScheme = "green" onChange = {handleChangePhone} style = {{margin:'5px', border: '1px solid green'}}/>
                    <FormHelperText>use a single one.</FormHelperText>
                    </FormControl>
                    <Button colorScheme="blue" onClick = { getDelivery }>Get Products</Button>
                        </Stack>

    </form>
}


export default Delivery