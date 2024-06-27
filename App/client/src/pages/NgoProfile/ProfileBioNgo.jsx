//src/components/ProfileBioNgo.jsx
import React from 'react'

const ProfileBioNgo = ({currentProfile}) => {
  return (
    <div>
        <div>
            {
                currentProfile?.Description ? (
                    <>
                    <h4>Description</h4>
                    <p>{currentProfile.Description}</p>
                    </>
                ) : (
                    <p>No Description Found</p>
                )
            }
        </div>
    </div>
  )
}

export default ProfileBioNgo;
