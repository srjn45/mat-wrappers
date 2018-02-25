export class Node {

    constructor(
        public text: string,
        public value: any,
        public children?: Node[],
        public checked: boolean = false,
        public collapsed: boolean = true,
        public disabled: boolean = false
    ) { }

}
