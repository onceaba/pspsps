import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "./firebase";

/**
 * Kullanıcı adını Firebase'in anlayacağı
 * sahte email formatına çeviriyoruz.
 */
const usernameToEmail = (username: string) =>
  `${username.toLowerCase()}@pspsps.app`;

export async function register(
  username: string,
  password: string
) {
  const userRef = doc(db, "users", username.toLowerCase());

  const exists = await getDoc(userRef);

  if (exists.exists()) {
    throw new Error("Bu kullanıcı adı kullanılıyor.");
  }

  const credential =
    await createUserWithEmailAndPassword(
      auth,
      usernameToEmail(username),
      password
    );

  await setDoc(userRef, {
    uid: credential.user.uid,
    username,
    avatar: "",
    bio: "",
    theme: "gothic",
    createdAt: Date.now(),
  });

  return credential.user;
}

export async function login(
  username: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    usernameToEmail(username),
    password
  );
}

export async function logout() {
  return signOut(auth);
}