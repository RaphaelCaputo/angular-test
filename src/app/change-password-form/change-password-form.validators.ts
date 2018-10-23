import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

export class ChangePasswordValidators {
    static invalidPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({ invalidPassword: true });
                else
                    resolve(null);
            }, 2000);
        });       
    }

    static passwordMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return { passwordMatch: true };
            
        return null;
    }
}