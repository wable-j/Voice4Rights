import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/users'
import Avatar from '../../components/Avatar/Avatar'
import Image from "../../components/image/Image";

const EditProfileForm = ({ currentUser, setSwitch }) => {

    const [name, setName]= useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [image, setImage] = useState(currentUser?.result?.image)
    const [postImage, setPostImage] = useState( { myfile : ""} )
    const [tags, setTags] = useState('')
    const dispatch = useDispatch()

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file)
        const base64 = await convertToBase64(file)
        setImage(base64)
        console.log(base64)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('image-------' + image)
        debugger;
        if(tags.length === 0){
            dispatch(updateProfile( currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags , image: image}))
        } else{
            dispatch(updateProfile( currentUser?.result?._id, { name, about, tags ,image:image}))
        }
        setSwitch(false)
    }

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <h1 className='edit-profile-title'>
                Edit Your Profile
            </h1>
            <h2 className="edit-profile-title-2">
                Public information
            </h2>
            <form className="edit-profile-form" onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                <label htmlFor="name">
                    <h3>Display name</h3>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="about">
                    <h3>About me</h3>
                    <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </label>
                <label htmlFor="tags">
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/>
                </label><br />
                <div className='user-details'>
                <label htmlFor='file-upload'>
                    {image ? (
                    <Image borderRadius='2px' src={image} height='auto' width='200px' alt="User Avatar" />
                    ) : (
                      <div></div>
                    )}
                </label>

                </div>
                <input
                    type='file'
                    label='Image'
                    name='myImage'
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e) => handleFileUpload(e)}
                    />
                <input type="submit" value='Save profile' className='user-submit-btn'/>
                <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfileForm


function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
