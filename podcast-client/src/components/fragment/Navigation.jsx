import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "./DropDownLanguageList";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import { Avatar, Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";
import { auth } from '../../firebase/firebaseConfig';
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticate } from '../../actions/loginActions';

function Navigation() {
    const dispatch = useDispatch()
    const authenticated = useSelector(state => state.auth)
    const [isLanguageListOpen, setLangList] = useState(false);
    const [isOpenProfile, setOpenProfile] = useState(false);

    const logout = () => {
        auth.signOut().then(() => {
            dispatch(setAuthenticate(false))
            console.log('signed out')
        }).catch((error) => {
            console.log(error)
        });
    }
    function handleOpenLanguageList() {
        if (isOpenProfile === true)
            setOpenProfile(!isOpenProfile);
        setLangList(!isLanguageListOpen);
    }

    function handleOpenProfile() {
        if (isLanguageListOpen === true)
            setLangList(!isLanguageListOpen);
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand />
            <div className={"navigation"}>
                {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
                {/* <NavigationButton href={"/home/about"} name={"About"}/>*/}
                {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
            </div>
            <SearchBar />
            <div className={"language"} onClick={handleOpenLanguageList}>
                <Button className={"Dropdown-btn"}
                    endIcon={isLanguageListOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}>
                    <div className="wrapper">
                        <p>Music Languages</p>
                    </div>
                </Button>
                {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList />
                }
            </div>
            {(authenticated.isAuthenticated )&& (
                <div className="profile" onClick={handleOpenProfile}>
                    <Button className={"Dropdown-btn"}
                        startIcon={<Avatar style={{ width: '30px', height: '30px', padding: '18px' }} >VS</Avatar>}
                        endIcon={isOpenProfile ? <ExpandMoreIcon /> : <ExpandLessIcon />}>

                    </Button>
                    <Button onClick={logout}>
                        Logout
                 </Button>
                    {
                        isOpenProfile &&
                        <DropDownProfile />
                    }
                </div>
            )}

            {!(authenticated.isAuthenticated) && (
                 <div className="profile" >
                 <Link to="/login" className="btn btn-primary">Login</Link>
             </div>
            )}

          
        </nav>
    );
}

export default Navigation;