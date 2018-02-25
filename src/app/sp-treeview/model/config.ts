
export const SELECT_NONE: number = 0;
export const SELECT_CHECKBOX: number = 1;
export const SELECT_RADIO: number = 2;

export class Config {

    constructor(
        public select: number = SELECT_NONE
    ) { }

}
