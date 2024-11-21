import BlockUser from "../fixtures/blockUser.json" with {type: "json"};
import Login from "../fixtures/login.json" with { type: "json" };
import PermanentCardBlock from "../fixtures/permanentCardBlock.json" with { type: "json" };
import ProvitionalCardsUsers from "../fixtures/provitionalCardsUsers.json" with { type: "json" };
import Register from "../fixtures/register.json" with {type: "json"};
import TemporalCardBlock from "../fixtures/temporalCardBlock.json" with {type: "json"};
import UnBlockUser from '../fixtures/unBlockUser.json' with {type: "json"};

//jsonName debes ingresar el nombre del archivo .json tal cual está escrito en la carpeta fixtures del proyecto

const getRandomUser = (countryCode, jsonName) =>{

    switch (jsonName) {
        case 'blockUser':
            const blockUsersFromCountry = BlockUser.users.filter(user => user.pais === countryCode);
            const blockRandomUser = blockUsersFromCountry[Math.floor(Math.random() * blockUsersFromCountry.length)];
        
            return blockRandomUser;
            break;
        case 'login':
            const loginUsersFromCountry = Login.users.filter(user => user.pais === countryCode);
            const randomLoginUser = loginUsersFromCountry[Math.floor(Math.random() * loginUsersFromCountry.length)];
        
            return randomLoginUser;
            break;
        case 'permanentCardBlock':
            const usersWithPermanentCardBlockFromCountry = PermanentCardBlock.users.filter(user => user.pais === countryCode);
            const permanentCardBlockRandomUser = usersWithPermanentCardBlockFromCountry[Math.floor(Math.random() * usersWithPermanentCardBlockFromCountry.length)];
        
            return permanentCardBlockRandomUser;
            break;
        case 'provitionalCardsUsers':
            const usersWithProvitionalCardFromCountry = ProvitionalCardsUsers.users.filter(user => user.pais === countryCode);
            const provitionCardRandomUser = usersWithProvitionalCardFromCountry[Math.floor(Math.random() * usersWithProvitionalCardFromCountry.length)];
        
            return provitionCardRandomUser;
            break;
        case 'register':
            const usersRegisterFromCountry = Register.users.filter(user => user.pais === countryCode);
            const randomUserRegister = usersRegisterFromCountry[Math.floor(Math.random() * usersRegisterFromCountry.length)];
        
            return randomUserRegister;
            break;
        case 'temporalCardBlock':
            const usersWithTemporalCardBlockFromCountry = TemporalCardBlock.users.filter(user => user.pais === countryCode);
            const randomUserWithTemporalCardBlock = usersWithTemporalCardBlockFromCountry[Math.floor(Math.random() * usersWithTemporalCardBlockFromCountry.length)];
        
            return randomUserWithTemporalCardBlock;
            break;
        case 'unBlockUser':
            const unBlockUsersFromCountry = UnBlockUser.users.filter(user => user.pais === countryCode);
            const randomUnblockUser = unBlockUsersFromCountry[Math.floor(Math.random() * unBlockUsersFromCountry.length)];
        
            return randomUnblockUser;
            break;
        default:
            throw new Error(`Json name ${jsonName} is not supported`);
    }
}

export { getRandomUser };