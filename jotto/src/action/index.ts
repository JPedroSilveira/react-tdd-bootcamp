import axios from  'axios'

export const getSecretWord = async (): Promise<string> => {
    const response = await axios.get('http://localhost:3030')
    return response.data
}