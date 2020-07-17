import { Injectable } from '@angular/core';
import {key} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  key=key.value;
  private CryptoJS = require("crypto-js")
  constructor() { }
  encrypt(textToEncrypt: string): string {
    var ciphertext = this.CryptoJS.AES.encrypt(textToEncrypt, this.key).toString();
    return ciphertext;
  }
  decrypt(encryptedText: string): string {
    var bytes  = this.CryptoJS.AES.decrypt(encryptedText, this.key);
    var originalText = bytes.toString(this.CryptoJS.enc.Utf8);
    return originalText;
  }
}
