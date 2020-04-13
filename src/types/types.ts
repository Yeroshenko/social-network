export type PostType = {
  id: number
  message: string
}

export type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  userId: number
  photos: PhotosType 
}

export type UserType = {
  id: number
  name: string
  photos: PhotosType
  status: string | null
  followed: boolean
}