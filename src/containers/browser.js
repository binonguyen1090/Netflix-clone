import React, {useContext, useEffect, useState} from "react";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";
import {Loading} from "../components"

export function BrowserContainer(slides) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const {firebase} = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() =>{
    console.log('profole', profile)
    setTimeout(()=>{
      setLoading(false)
    },30000)
  },[profile.displayName])

  return profile.displayName ? (
    loading ?  (
      <Loading src={user.photoURL} />) : <Loading.ReleaseBody />
    ):(
      <SelectProfileContainer user={user} setProfile={setProfile}/>
      )
}
