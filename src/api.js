import axios from "axios";

// const serverDomain = 'https://order-backend.kz'
const serverDomain = 'https://mebelink-back-957b184c2e7b.herokuapp.com'
// const serverDomain = 'http://localhost:3030'

class API {
    createApplication = async (name, phone, type, typeOfRestFurniture, sleepingPlaceSize, message) => {
        let data = {}

        if(type==='new'){
            data = {
                name: name,
                phone: phone,
                type: 'Заказ новой мебели',
                typeOfNewFurniture: typeOfNewFurniture,
                typeOfRestFurniture: '',
                sleepingPlaceSize: sleepingPlaceSize,
                messageText: message.length === 0 ? 'Пустое сообщение.' : message,
            }
        } else {
            data = {
                name: name,
                phone: phone,
                type: 'Заказ реставрации мебели',
                typeOfNewFurniture: '',
                typeOfRestFurniture: typeOfRestFurniture,
                messageText: message.length === 0 ? 'Пустое сообщение.' : message
            }
        }

        await axios.post(`${serverDomain}/createNewApplication/`, data, { useCredentails: true })
    }


    createNewApplicationToConsultation = async (name, phone, message) => {
        let data = {
            name: name,
            phone: phone,
            messageText: message.length === 0 ? 'Пустое сообщение.' : message
        }

        await axios.post(`${serverDomain}/createNewApplicationToConsultation/`, data, { useCredentails: true })
    }
}

export default API;