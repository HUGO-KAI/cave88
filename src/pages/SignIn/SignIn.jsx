import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../../components/Login/Login.jsx'
import '../../globalData';
const url = global.api.url;

//La page SignIn
const SignIn = () => {
    const navigate = useNavigate();
    //Envoyer les données de l'utilisateur au backend
    const handleSubmit = (userInfo) => {
        axios.post(`${url}/api/auth/login`,userInfo)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("token", res.data.token);
            navigate('/Admin');
          }else { // fail to login
            window.alert('登录失败、');
            return;
        }})
        .catch((error) => {
          window.alert('User non trouvé');
        })
      };
    return (
        <>
        <Login userSubmit={handleSubmit}/>
        </>
    )
}

export default SignIn