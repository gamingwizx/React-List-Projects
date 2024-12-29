import styled from "styled-components";
import Img from "../../ui/Img";
import Label from "../../ui/Label"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {createRetrieveUserInfo} from "../../services/apiAuth"
import useGetAvatarImage from "./useGetAvatarImage.js"
import useRetrieveUserInfo from "./useRetrieveUserInfo1.js";
import Loader from "../../ui/Spinner.jsx";
const StyledUserAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing);
    padding: calc(var(--spacing) / 2);
`

const useLoadInitialData = async() => {
    
}

function UserAvatar({filename, fullname}) {
    const [username, setUsername] = useState("")
    const [imageName, setImageName] = useState("")
    
    const navigate = useNavigate()
    const {data: userAvatar, isLoading} = useGetAvatarImage(filename)
    if (isLoading) return <span>Loading avatar...</span>
    const {signedUrl} = userAvatar
    return (
        <StyledUserAvatar>
            <Img className="avatar-image" onClick={() => console.log("Hello")} src={signedUrl} borderradius="rounded" size="small"></Img>
            <Label>{fullname}</Label>
            
        </StyledUserAvatar>
    )
}

export default UserAvatar