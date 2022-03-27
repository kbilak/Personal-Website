import crypto from 'crypto';

function validPassword(password: string, hash: string, salt: string) {
    let hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
};

export default validPassword;