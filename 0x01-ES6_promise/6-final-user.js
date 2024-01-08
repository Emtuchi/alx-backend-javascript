import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName).then(value => ({
    status : 'resolved',
    value,
  }));
  const photo = await uploadPhoto(fileName).catch(error => ({
    status : 'Rejected',
    value : `${error}`
  }));
  return [user, photo]
};