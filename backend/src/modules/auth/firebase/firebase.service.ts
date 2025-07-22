import { Injectable, UnauthorizedException } from '@nestjs/common';
import admin from './firebase.admin';

@Injectable()
export class AuthFirebaseService {
  async verifyIdToken(idToken:string): Promise<IFirebaseAuthPayload> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken) as IFirebaseAuthPayload;
      return decodedToken;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token ' + error.message);
      
    }
  }
}


export interface IFirebaseAuthPayload {
  name: string
  picture: string
  iss: string
  aud: string
  auth_time: number
  user_id: string
  sub: string
  iat: number
  exp: number
  email: string
  email_verified: boolean
  firebase: Firebase
  uid: string
}

export interface Firebase {
  identities: Identities
  sign_in_provider: string
}

export interface Identities {
  "google.com": any[]
  email: any[]
}
