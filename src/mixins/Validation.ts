interface dropdown {
    dropdown: string[];
}

interface ValidationBody {
    rules?: (string | dropdown)[];
    message?: {
        [key: string]: string;

    }

}
interface FormValidation {
    [key: string]: ValidationBody;
}

interface date {
    day: number;
    month: number;
    year: number;

}

interface Form {
    [key: string]: string | date | string[];

}


interface errors
{
    [key: string]: string;
}

class validation {
    constructor(public validationObject: FormValidation, public form: Form) {
        this.validator = {
            required: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.required) {
                        this.errors.push({
                                [this.key]: this.element.message.required
                            });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is required`
                        });
                    }
                }


                if (arr && arr.length > 0) {
                    const firstElement = arr[0];
                    if (firstElement === 'if') {
                        let data = this.form[arr[1] as keyof typeof this.form];
                        if (data && data === arr[2]) {
                            if (!this.data) {
                                pushError();
                            }
                        }
                    }
                } else {
                    if (!this.data) {
                        pushError();
                    }
                }



            },
            date: (arr?: string[]) => {}
        }
    }
    // protected validator: { [key: string]: () => void };
    protected validator: any;



    isValid: boolean = false;
    errors: errors[] = [];

    element: any;
    data: any;
    key: any;

    keys: string[] = [];


    validate(): errors[] {
        this.errors = [];
        this.keys = [];
        for (const key in this.validationObject) {

            this.element = this.validationObject[key as keyof typeof this.validationObject];
            this.data = this.form[key as keyof typeof this.form];
            this.key = key;
            if (this.element.rules && this.element.rules.length > 0) {

                //   if(this.checkRules()) break;
                this.checkRules();

            }
            // this.checkIfRequired(element, key);
            // this.checkIfDropdown(element, key);

        }
        this.isValid = (this.errors.length === 0);
        this.assignKeys();
        return this.errors;
    }

    private checkRules(): any {
        let rules = this.element.rules as (string | dropdown)[];
        for (const rule of rules) {
            if (this.handleRule(rule)) {
                return true;
            };
        }

    }

    private handleRule(rule: string | dropdown,) {
        if (typeof rule === 'string') {
            if (rule.includes(':')) {
                let ruleArr = rule.split(':');
                let ruleName = ruleArr[0];
                let ruleValue = ruleArr.splice(1);
                const validationFunction = this.validator[ruleName];

                if (validationFunction && typeof validationFunction === 'function') {
                    validationFunction(ruleValue);
                }
            } else {
                const validationFunction = this.validator[rule];

                if (validationFunction && typeof validationFunction === 'function') {
                    validationFunction();
                }
            }


        }
        return !(this.errors.length === 0);

    }

    private assignKeys(): void {
        this.keys = this.errors.reduce((keys, obj) => {
            Object.keys(obj).forEach(key => {
                if (!keys.includes(key)) {
                    keys.push(key);
                }
            });
            return keys;
        }, [] as string[]);

    }
    // private checkIfRequired(element: any, key: string): void {
    //     if (typeof element.required === 'boolean' && element.required === true) {
    //         if (!this.data[key as keyof typeof this.data]) {

    //             if (element.message && element.message.required) {
    //                 this.errors.push(element.message.required);
    //             } else {
    //                 this.errors.push(`${key} is required`);

    //             }
    //         }
    //     }
    // }

    // private checkIfDropdown(element: any, key: string): void {
    //     if (element.dropdown && element.dropdown.length > 0) {
    //         if (!element.dropdown.includes(this.data[key as keyof typeof this.data])) {

    //         }
    //     }
    // }
}

export default validation;
